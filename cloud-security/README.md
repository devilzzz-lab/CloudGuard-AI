<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>📁 Final Cloud-Security Structure (Phase 2)</h1>
    
<pre>
├───cloud-security
│   ├───config_rules
│   │   ├───s3-public-access-rule
│   │   └───sg-open-ports-rule
│   ├───lambda
│   └───screenshots
</pre>

<h2>📂 1️⃣ lambda/ (MOST IMPORTANT)</h2>
<p><strong>👉 This folder contains ALL Lambda source code you wrote.</strong></p>
    
<p><strong>What to put here</strong></p>
<pre>lambda/
├── s3_auto_remediation.py
├── sg_auto_remediation.py
├── README.md</pre>

<h3>🔹 s3_auto_remediation.py</h3>
<p>Put your final S3 Lambda code (the one with):</p>
<ul>
    <li>Public Access Block check</li>
    <li>No email spam</li>
    <li>SNS alert</li>
    <li>Exclusions</li>
</ul>
<p><strong>📌 Add a small header comment at the top:</strong></p>
<pre>"""
S3 Auto-Remediation Lambda
- Detects public S3 buckets
- Enforces Public Access Block
- Sends SNS alerts only on real remediation
""</pre>

<h3>🔹 sg_auto_remediation.py</h3>
<p>Put your Security Group Lambda:</p>
<ul>
    <li>Detects 0.0.0.0/0</li>
    <li>SSH / RDP / ALL traffic</li>
    <li>Removes risky rules</li>
    <li>Sends SNS alerts</li>
    </ul>
<p><strong>Add header:</strong></p>
<pre>"""
Security Group Auto-Remediation Lambda
- Detects risky inbound rules
- Auto-removes public SSH/RDP/ALL rules
- Sends SNS alerts
"""</pre>

<h3>🔹 lambda/README.md</h3>
<p>Explain what Lambdas exist and why. Example:</p>
<pre># Lambda Functions

<p> s3_auto_remediation.py
Automatically detects and remediates public S3 buckets using
Public Access Block enforcement.</p>

<pre>sg_auto_remediation.py
Automatically detects and removes insecure Security Group rules
such as SSH/RDP open to the internet.</pre>

<hr>

<h2>📂 2️⃣ config-rules/</h2>
<p>Even if you didn't deploy AWS Config rules yet, this folder shows design maturity.</p>
    
<p><strong>Check the Screenshot of Folders</strong></p>
<pre>config-rules/
├── s3-public-access-rule/
├── sg-open-ports-rule/
</pre>

This folder contains AWS Config rules used to detect
non-compliant cloud resources.

These rules can be integrated with Lambda for auto-remediation.</pre>

<hr>

<h2>📂 3️⃣ scripts/</h2>
<p>This is for helper scripts, testing, and local validation.</p>
    
<p><strong>What to put here</strong></p>
<pre>scripts/
├── test_s3_violation.md
├── test_sg_violation.md
├── deployment_steps.md</pre>

<h3>🔹 test_s3_violation.md</h3>
<p>Explain how to test manually:</p>
<pre># Test S3 Violation

1. Create an S3 bucket
2. Disable Block Public Access
3. Wait 5 minutes
4. Lambda remediates automatically
5. SNS email received</pre>

<h3>🔹 test_sg_violation.md</h3>
<pre># Test Security Group Violation

1. Add SSH (22) from 0.0.0.0/0
2. Wait 5 minutes
3. Lambda removes rule
4. SNS email received</pre>

<h3>🔹 deployment_steps.md</h3>
<p>This is GOLD for reviewers.</p>
<pre># Deployment Steps

1. Create IAM roles
2. Deploy Lambda functions
3. Configure SNS topic
4. Create EventBridge schedules
5. Validate remediation</pre>

<hr>

<h2>📂 4️⃣ diagrams/</h2>
<p>This is where your project looks professional.</p>
    
<p><strong>What to put here</strong></p>
<pre>diagrams/
├── s3_auto_remediation_architecture.png
├── sg_auto_remediation_architecture.png
├── overall_phase2_architecture.png</pre>

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
<pre># CloudGuard AI – Phase 2
Automated Cloud Security Remediation

<p>Overview
Phase 2 focuses on automated detection and remediation of
cloud security misconfigurations using AWS-native services.</p>

<p> Implemented Controls
- S3 public access auto-remediation
- Security Group open port auto-remediation
- Scheduled enforcement using EventBridge
- Alerting via SNS</p>

<p> Architecture
See diagrams/ for detailed flow diagrams.</p>

<p>Technologies Used
- AWS Lambda
- EventBridge Scheduler
- Amazon SNS
- Amazon S3
- Amazon EC2 Security Groups
</p>

</body>
</html>
