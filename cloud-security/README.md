<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>📁 Final Project Structure (Phase 2)</h1>
    
    <pre><code>cloud-security/
    │
    ├── lambda/
    ├── config-rules/
    ├── scripts/
    ├── diagrams/
    └── README.md</code></pre>

    <h2>📂 1️⃣ lambda/ (MOST IMPORTANT)</h2>
    <p><strong>👉 This folder contains ALL Lambda source code you wrote.</strong></p>
    
    <p><strong>What to put here</strong></p>
    <pre><code>lambda/
    ├── s3_auto_remediation.py
    ├── sg_auto_remediation.py
    ├── README.md</code></pre>

    <h3>🔹 s3_auto_remediation.py</h3>
    <p>Put your final S3 Lambda code (the one with):</p>
    <ul>
        <li>Public Access Block check</li>
        <li>No email spam</li>
        <li>SNS alert</li>
        <li>Exclusions</li>
    </ul>
    <p><strong>📌 Add a small header comment at the top:</strong></p>
    <pre><code>"""
S3 Auto-Remediation Lambda
- Detects public S3 buckets
- Enforces Public Access Block
- Sends SNS alerts only on real remediation
"""</code></pre>

    <h3>🔹 sg_auto_remediation.py</h3>
    <p>Put your Security Group Lambda:</p>
    <ul>
        <li>Detects 0.0.0.0/0</li>
        <li>SSH / RDP / ALL traffic</li>
        <li>Removes risky rules</li>
        <li>Sends SNS alerts</li>
    </ul>
    <p><strong>Add header:</strong></p>
    <pre><code>"""
Security Group Auto-Remediation Lambda
- Detects risky inbound rules
- Auto-removes public SSH/RDP/ALL rules
- Sends SNS alerts
"""</code></pre>

    <h3>🔹 lambda/README.md</h3>
    <p>Explain what Lambdas exist and why. Example:</p>
    <pre><code># Lambda Functions

## s3_auto_remediation.py
Automatically detects and remediates public S3 buckets using
Public Access Block enforcement.

## sg_auto_remediation.py
Automatically detects and removes insecure Security Group rules
such as SSH/RDP open to the internet.</code></pre>

    <hr>

    <h2>📂 2️⃣ config-rules/</h2>
    <p>Even if you didn't deploy AWS Config rules yet, this folder shows design maturity.</p>
    
    <p><strong>What to put here</strong></p>
    <pre><code>config-rules/
    ├── s3-public-access-rule.json
    ├── sg-open-ports-rule.json
    ├── README.md</code></pre>

    <h3>🔹 Example s3-public-access-rule.json</h3>
    <pre><code>{
  "ConfigRuleName": "s3-bucket-public-access-prohibited",
  "Source": {
    "Owner": "AWS",
    "SourceIdentifier": "S3_BUCKET_PUBLIC_ACCESS_PROHIBITED"
  }
}</code></pre>
    <p><strong>📌 This shows: "We can enforce detection via AWS Config if needed"</strong></p>

    <h3>🔹 config-rules/README.md</h3>
    <pre><code># AWS Config Rules

This folder contains AWS Config rules used to detect
non-compliant cloud resources.

These rules can be integrated with Lambda for auto-remediation.</code></pre>

    <hr>

    <h2>📂 3️⃣ scripts/</h2>
    <p>This is for helper scripts, testing, and local validation.</p>
    
    <p><strong>What to put here</strong></p>
    <pre><code>scripts/
    ├── test_s3_violation.md
    ├── test_sg_violation.md
    ├── deployment_steps.md</code></pre>

    <h3>🔹 test_s3_violation.md</h3>
    <p>Explain how to test manually:</p>
    <pre><code># Test S3 Violation

1. Create an S3 bucket
2. Disable Block Public Access
3. Wait 5 minutes
4. Lambda remediates automatically
5. SNS email received</code></pre>

    <h3>🔹 test_sg_violation.md</h3>
    <pre><code># Test Security Group Violation

1. Add SSH (22) from 0.0.0.0/0
2. Wait 5 minutes
3. Lambda removes rule
4. SNS email received</code></pre>

    <h3>🔹 deployment_steps.md</h3>
    <p>This is GOLD for reviewers.</p>
    <pre><code># Deployment Steps

1. Create IAM roles
2. Deploy Lambda functions
3. Configure SNS topic
4. Create EventBridge schedules
5. Validate remediation</code></pre>

    <hr>

    <h2>📂 4️⃣ diagrams/</h2>
    <p>This is where your project looks professional.</p>
    
    <p><strong>What to put here</strong></p>
    <pre><code>diagrams/
    ├── s3_auto_remediation_architecture.png
    ├── sg_auto_remediation_architecture.png
    ├── overall_phase2_architecture.png</code></pre>

    <p><strong>What these diagrams show</strong></p>
    <ul>
        <li>EventBridge → Lambda → AWS resource</li>
        <li>SNS → Email</li>
        <li>Scheduled remediation flow</li>
    </ul>
    <p><strong>📌 Even hand-drawn → exported PNG is fine.</strong></p>

    <hr>

    <h2>📄 5️⃣ README.md (ROOT FILE)</h2>
    <p>This is your main documentation. Example structure</p>
    <pre><code># CloudGuard AI – Phase 2
Automated Cloud Security Remediation

## Overview
Phase 2 focuses on automated detection and remediation of
cloud security misconfigurations using AWS-native services.

## Implemented Controls
- S3 public access auto-remediation
- Security Group open port auto-remediation
- Scheduled enforcement using EventBridge
- Alerting via SNS

## Architecture
See diagrams/ for detailed flow diagrams.

## Technologies Used
- AWS Lambda
- EventBridge Scheduler
- Amazon SNS
- Amazon S3
- Amazon EC2 Security Groups

## Future Enhancements
- AWS Config integration
- Tag-based exclusions
- Multi-account remediation
- Instant event-based triggers</code></pre>
</body>
</html>
