import boto3

ec2 = boto3.client("ec2")
sns = boto3.client("sns")

SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:260969591589:s3-auto-remediation-alerts"

DANGEROUS_PORTS = [22, 3389]

def lambda_handler(event, context):
    print("Security Group remediation started")

    response = ec2.describe_security_groups()
    remediated = []

    for sg in response["SecurityGroups"]:
        sg_id = sg["GroupId"]
        sg_name = sg.get("GroupName", "unknown")

        for rule in sg.get("IpPermissions", []):
            protocol = rule.get("IpProtocol")
            from_port = rule.get("FromPort")
            to_port = rule.get("ToPort")

            # IPv4
            for ip in rule.get("IpRanges", []):
                if ip.get("CidrIp") == "0.0.0.0/0":
                    if protocol == "-1" or from_port in DANGEROUS_PORTS:
                        try:
                            ec2.revoke_security_group_ingress(
                                GroupId=sg_id,
                                IpPermissions=[rule]
                            )
                            remediated.append(f"{sg_id} ({sg_name})")
                            print(f"✔ Removed risky IPv4 rule from {sg_id}")
                        except Exception as e:
                            print(f"❌ Failed {sg_id}: {e}")

            # IPv6
            for ip in rule.get("Ipv6Ranges", []):
                if ip.get("CidrIpv6") == "::/0":
                    if protocol == "-1" or from_port in DANGEROUS_PORTS:
                        try:
                            ec2.revoke_security_group_ingress(
                                GroupId=sg_id,
                                IpPermissions=[rule]
                            )
                            remediated.append(f"{sg_id} ({sg_name})")
                            print(f"✔ Removed risky IPv6 rule from {sg_id}")
                        except Exception as e:
                            print(f"❌ Failed {sg_id}: {e}")

    if remediated:
        message = (
            "Security Group Auto-Remediation Alert\n\n"
            "Risky inbound rules were removed from:\n\n"
            + "\n".join(f"- {r}" for r in set(remediated))
        )

        sns.publish(
            TopicArn=SNS_TOPIC_ARN,
            Subject="🚨 Security Group Auto-Remediation",
            Message=message
        )

    return {
        "status": "completed",
        "remediated_security_groups": list(set(remediated))
    }
