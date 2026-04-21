<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<h1>🟧 Phase 4 — Machine Learning Intelligence Layer</h1>

<h2>Overview</h2>
<p>
Phase 4 introduces the <strong>Machine Learning Intelligence Layer</strong> for the CloudGuard AI platform.
This layer focuses on analyzing <strong>cloud security events, remediation logs, and DevOps pipeline activity</strong>
to detect abnormal patterns and provide intelligent insights.
</p>

<p>
Unlike traditional monitoring systems, this ML layer does not rely on system metrics such as CPU or memory.
Instead, it acts as a <strong>Security Intelligence Engine</strong> that identifies suspicious behavior,
repeated violations, and operational anomalies.
</p>

<hr>

<h2>🎯 Objectives</h2>
<ul>
  <li>Analyze cloud security violations and remediation activity</li>
  <li>Detect abnormal patterns in infrastructure behavior</li>
  <li>Identify repeated or suspicious security misconfigurations</li>
  <li>Monitor DevOps pipeline failures and unusual activity</li>
  <li>Provide real-time anomaly insights via APIs</li>
</ul>

<hr>

<h2>🧠 ML Architecture</h2>
<pre>
Cloud Events / Logs
(S3, Security Groups, Pipeline Logs)
        ↓
Preprocessing Layer
        ↓
Feature Extraction
        ↓
Anomaly Detection Engine
        ↓
ML API (FastAPI)
        ↓
Backend (Phase 5)
        ↓
Frontend Dashboard
</pre>

<p>
This architecture enables continuous analysis of security and operational events,
allowing the platform to detect threats and anomalies proactively.
</p>

<hr>

<h2>⚙️ Core Components</h2>

<h3>🔹 1. Data Preprocessing</h3>
<p>
Raw logs from AWS services and DevOps pipelines are cleaned and structured
into a consistent format for analysis.
</p>

<ul>
  <li>Parsing Lambda logs (S3 and Security Group remediation)</li>
  <li>Processing DevOps pipeline logs (Jenkins / Kubernetes)</li>
  <li>Structuring event-based data</li>
</ul>

<h3>🔹 2. Feature Engineering</h3>
<p>
Relevant features are extracted to represent behavior patterns across the system.
</p>

<ul>
  <li>Violation frequency per resource</li>
  <li>Remediation count over time</li>
  <li>Pipeline failure frequency</li>
  <li>User or system action patterns</li>
</ul>

<h3>🔹 3. Anomaly Detection Engine</h3>
<p>
The ML Engine identifies unusual patterns that may indicate security risks,
misconfigurations, or abnormal operations.
</p>

<ul>
  <li>Repeated security violations</li>
  <li>Sudden spikes in remediation activity</li>
  <li>Frequent DevOps pipeline failures</li>
  <li>Unusual or suspicious action patterns</li>
</ul>

<h3>🔹 4. ML API Layer</h3>
<p>
A FastAPI-based service exposes endpoints that deliver anomaly insights
to the backend layer.
</p>

<ul>
  <li>Real-time anomaly detection results</li>
  <li>Structured insights for frontend visualization</li>
  <li>Integration with MERN backend APIs</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
ml-engine/
├── app.py             # FastAPI application entry point
├── routes.py          # API routes for ML insights
├── preprocess.py      # Log parsing and preprocessing logic
├── model.py           # Anomaly detection logic
├── model/             # Saved models / artifacts
├── requirements.txt   # Dependencies
└── README.md
</pre>

<hr>

<h2>🔄 ML Workflow</h2>

<pre>
1. Receive cloud events and logs
2. Preprocess and structure data
3. Extract behavior-based features
4. Apply anomaly detection logic
5. Identify abnormal patterns
6. Return insights via API
</pre>

<hr>

<h2>🔗 Integration with Platform</h2>

<pre>
DevOps Layer (Phase 3)
        ↓
ML Engine (Phase 4)
        ↓
Backend API (Phase 5)
        ↓
Frontend Dashboard
</pre>

<ul>
  <li>Consumes logs from AWS remediation and DevOps pipelines</li>
  <li>Provides anomaly insights to backend APIs</li>
  <li>Enables real-time alert visualization in frontend</li>
</ul>

<hr>

<h2>📊 Key Use Cases</h2>

<ul>
  <li><strong>Repeated Security Violations:</strong> Detect resources that repeatedly become non-compliant</li>
  <li><strong>Remediation Spike Detection:</strong> Identify sudden increase in auto-remediation events</li>
  <li><strong>Pipeline Failure Patterns:</strong> Detect repeated failures in CI/CD pipelines</li>
  <li><strong>Suspicious Action Behavior:</strong> Identify unusual or excessive system/user actions</li>
  <li><strong>Time-Based Anomalies:</strong> Detect unusual activity during unexpected time periods</li>
</ul>

<hr>

<h2>⚙️ Technologies Used</h2>

<ul>
  <li>Python</li>
  <li>FastAPI</li>
  <li>NumPy / Pandas</li>
  <li>Scikit-learn (Anomaly Detection)</li>
</ul>

<hr>

<h2>🎓 One-Line Summary</h2>

<blockquote>
  <p>
  <strong>Phase 4 implements a security-focused ML intelligence layer that analyzes cloud events and DevOps activity to detect anomalies and provide real-time insights for CloudGuard AI.</strong>
  </p>
</blockquote>

</body>
</html>