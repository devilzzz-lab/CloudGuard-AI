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
Phase 4 implements a lightweight <strong>Machine Learning Intelligence Layer</strong> 
for CloudGuard AI. This layer analyzes cloud security events and remediation logs 
to detect abnormal patterns.
</p>

<p>
The focus is on identifying repeated security violations and unusual spikes in 
auto-remediation activity, enabling quick detection of misconfigurations or 
suspicious behavior.
</p>

<hr>

<h2>🎯 Objectives</h2>
<ul>
  <li>Analyze security violation logs</li>
  <li>Detect repeated violations for the same resource</li>
  <li>Identify sudden spikes in remediation activity</li>
  <li>Provide simple anomaly insights via API</li>
</ul>

<hr>

<h2>🧠 ML Architecture</h2>
<pre>
Cloud Logs (S3 / Security Groups)
        ↓
Preprocessing
        ↓
Simple Detection Logic
        ↓
ML API (FastAPI)
        ↓
Backend (Phase 5)
        ↓
Frontend Dashboard
</pre>

<hr>

<h2>⚙️ Core Components</h2>

<h3>🔹 1. Preprocessing</h3>
<p>
Parses and structures incoming logs into a usable format.
</p>

<ul>
  <li>Extract resource ID</li>
  <li>Extract event type</li>
  <li>Extract timestamp</li>
</ul>

<h3>🔹 2. Detection Logic</h3>
<p>
Implements simple rule-based anomaly detection.
</p>

<ul>
  <li><strong>Repeated Violations:</strong> Same resource flagged multiple times</li>
  <li><strong>Remediation Spike:</strong> High number of fixes in short time</li>
</ul>

<h3>🔹 3. ML API</h3>
<p>
FastAPI service that returns anomaly results.
</p>

<hr>

<h2>📁 Project Structure</h2>

<pre>
ml-engine/
├── app.py
├── routes.py
├── preprocess.py
├── model.py
├── model/
├── requirements.txt
└── README.md
</pre>

<hr>

<h2>🔄 ML Workflow</h2>

<pre>
1. Receive logs
2. Preprocess data
3. Apply detection rules
4. Identify anomalies
5. Return results via API
</pre>

<hr>

<h2>📊 Key Use Cases</h2>

<ul>
  <li><strong>Repeated Security Violations:</strong> Same resource becoming insecure multiple times</li>
  <li><strong>Remediation Spike Detection:</strong> Sudden increase in auto-fix actions</li>
</ul>

<hr>

<h2>⚙️ Technologies Used</h2>

<ul>
  <li>Python</li>
  <li>FastAPI</li>
</ul>

<hr>

<h2>🎓 One-Line Summary</h2>

<blockquote>
  <p>
  <strong>Phase 4 implements a lightweight ML layer that detects repeated security violations and remediation spikes using simple rule-based logic.</strong>
  </p>
</blockquote>

</body>
</html>