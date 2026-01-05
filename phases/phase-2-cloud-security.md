🟩 PHASE 2 — Cloud Security Foundation

Owner: Vikas (Cloud Security Engineer)
Branch: cloud-security

🎯 Phase 2 Goal (Your Mission)

Create a secure-by-default AWS environment that:

Detects AWS misconfigurations automatically

Logs every security-relevant activity

Auto-remediates critical risks

Sends alerts

Works independently (API-ready for later phases)

When Phase 2 finishes → other teams can safely build on top.

🧠 What You Are Building (Big Picture)

Flow:

Misconfiguration
   ↓
AWS Config / CloudTrail
   ↓
Lambda Detection
   ↓
Auto-Remediation
   ↓
SNS Alert

🧩 Phase 2 Architecture (Services You Own)

You will work with:

AWS Config

AWS CloudTrail

AWS Lambda

Amazon SNS

AWS IAM

AWS Organizations + SCPs

📁 What You Should Create in GitHub (ONLY THIS)
cloud-security/
├── README.md
├── config-rules/
│   ├── s3-public-read-prohibited.json
│   ├── sg-open-to-world.json
│
├── lambda/
│   ├── s3_auto_remediate.py
│   ├── sg_auto_remediate.py
│
├── scripts/
│   ├── enable_cloudtrail.sh
│   ├── enable_config.sh
│
├── diagrams/
│   └── phase-2-security-architecture.png


No Jenkins.
No Docker.
No Kubernetes.

🟢 STEP 1 — Enable Centralized Logging (MANDATORY)
1️⃣ Enable CloudTrail (All Regions)

Purpose: Capture every API call (attack detection)

✔ Actions:

Create multi-region trail

Enable management + data events

Store logs in S3 (private)

📌 Deliverable:

CloudTrail enabled

Screenshot

Mention in README.md

2️⃣ Enable AWS Config

Purpose: Detect configuration drift

✔ Actions:

Enable AWS Config

Use S3 bucket + IAM role

Enable recording all resources

📌 Deliverable:

AWS Config active

Recording all supported resources

🟢 STEP 2 — Security Detection Rules (CORE)
🔐 Rule 1: Public S3 Bucket Detection

Use AWS Config Managed Rule:

s3-bucket-public-read-prohibited


✔ Detects:

Public READ access

ACL or bucket policy exposure

📌 Output:

NON_COMPLIANT status triggers remediation

🔐 Rule 2: Open Security Group Detection

Use:

restricted-common-ports


✔ Detects:

0.0.0.0/0 on ports like 22, 3389

📌 Output:

SG flagged as NON_COMPLIANT

🟢 STEP 3 — Auto-Remediation with Lambda (VERY IMPORTANT)
🔁 Lambda 1 — Auto-Block Public S3

Trigger: Config NON_COMPLIANT event
Action: Remove public ACL + policy

Pseudo-logic:

def lambda_handler(event, context):
    bucket = event["resourceId"]
    remove_public_access(bucket)
    send_sns_alert(bucket)


✔ Must:

Enable Block Public Access

Remove bucket policy

Log action

🔁 Lambda 2 — Auto-Fix Open Security Group

Trigger: Config NON_COMPLIANT
Action: Remove 0.0.0.0/0 rule

✔ Must:

Revoke insecure ingress rule

Log before/after state

Alert via SNS

🟢 STEP 4 — Alerts (SOC Visibility)

Create SNS Topic:

cloudguard-security-alerts


✔ Lambda sends message:

🚨 Security Auto-Remediation Executed
Resource: S3 Bucket
Action: Public access removed


📌 Email subscription is enough.

🟢 STEP 5 — Preventive Governance (Enterprise Touch)
🔒 IAM Best Practices

No AdministratorAccess to users

Use roles

Least privilege policies

🔒 SCPs (Optional but HIGH VALUE)

Create SCP to:

Block S3 public access globally

Block disabling CloudTrail

Block deletion of Config

Example:

{
  "Effect": "Deny",
  "Action": "s3:PutBucketAcl",
  "Condition": {
    "StringEquals": {
      "s3:x-amz-acl": "public-read"
    }
  }
}

🟢 STEP 6 — Testing (VERY IMPORTANT FOR INTERVIEW)
✅ Test Case 1 — Public S3

Create bucket

Enable public access

Observe:

Config → NON_COMPLIANT

Lambda → auto-fix

SNS → alert

✅ Test Case 2 — Open Security Group

Open port 22 to 0.0.0.0/0

Observe:

Rule violation

Lambda remediation

Alert received

📌 Record results in README.

📄 What Your README.md MUST Contain

Phase objective

Architecture diagram

Services used

Detection rules

Auto-remediation logic

Test cases + results

Screenshots (optional)

🏁 When PHASE 2 Is OFFICIALLY COMPLETE

You are DONE when:

✅ CloudTrail logging everything
✅ AWS Config detecting misconfigurations
✅ Lambda auto-remediates
✅ SNS alerts generated
✅ GitHub branch clean & documented

At this point you say:

“Phase 2 Cloud Security Foundation is completed and ready for integration.”

Only then Phase 3 can start (by other team).

🎤 One-Line Interview Explanation (YOUR ROLE)

“I designed and implemented the cloud security foundation by enabling centralized logging, real-time misconfiguration detection, and automated remediation using AWS Config, Lambda, and SNS.”