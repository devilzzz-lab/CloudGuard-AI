import boto3

s3 = boto3.client("s3")
sns = boto3.client("sns")

# 🔔 SNS Topic ARN
SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:260969591589:s3-auto-remediation-alerts"

# 🚫 Buckets to exclude (system / security buckets)
EXCLUDED_PREFIXES = [
    "aws-cloudtrail-logs",
    "cloudguard-cloudtrail-logs",
    "cloudguard-config-logs",
    "aws-config",
]

DESIRED_PAB = {
    "BlockPublicAcls": True,
    "IgnorePublicAcls": True,
    "BlockPublicPolicy": True,
    "RestrictPublicBuckets": True
}

def lambda_handler(event, context):
    print("Lambda remediation started")

    buckets = s3.list_buckets().get("Buckets", [])
    print(f"Found {len(buckets)} buckets")

    remediated_buckets = []

    for bucket in buckets:
        name = bucket["Name"]

        # Skip system buckets
        if any(name.startswith(prefix) for prefix in EXCLUDED_PREFIXES):
            print(f"⏭ Skipping system bucket: {name}")
            continue

        print(f"Checking bucket: {name}")

        needs_fix = False

        try:
            current = s3.get_public_access_block(
                Bucket=name
            )["PublicAccessBlockConfiguration"]

            # Compare current vs desired
            if current != DESIRED_PAB:
                needs_fix = True
                print(f"🚨 Non-compliant bucket: {name}")
            else:
                print(f"ℹ Already compliant: {name}")

        except s3.exceptions.NoSuchPublicAccessBlockConfiguration:
            # No PAB configured → non-compliant
            needs_fix = True
            print(f"🚨 No Public Access Block found: {name}")

        except Exception as e:
            print(f"❌ Error checking bucket {name}: {e}")
            continue

        # Apply fix ONLY if needed
        if needs_fix:
            try:
                s3.put_public_access_block(
                    Bucket=name,
                    PublicAccessBlockConfiguration=DESIRED_PAB
                )
                remediated_buckets.append(name)
                print(f"✔ Remediated bucket: {name}")

            except Exception as e:
                print(f"❌ Failed to remediate {name}: {e}")

    # 🔔 Send SNS alert ONLY if remediation happened
    if remediated_buckets:
        message = (
            "S3 Auto-Remediation Alert\n\n"
            "The following S3 buckets were found NON-COMPLIANT "
            "and automatically secured:\n\n"
            + "\n".join(f"- {b}" for b in remediated_buckets)
        )

        sns.publish(
            TopicArn=SNS_TOPIC_ARN,
            Subject="🚨 S3 Public Access Auto-Remediation",
            Message=message
        )

        print("📩 SNS alert sent")

    else:
        print("ℹ All buckets already compliant. No alert sent.")

    return {
        "status": "completed",
        "remediated_buckets": remediated_buckets
    }
