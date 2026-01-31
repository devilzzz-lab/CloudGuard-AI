<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🏗️ ARCHITECTURE DIAGRAM — EXPLANATION (INTERNAL ENTERPRISE MODEL)</h1>
<p><strong>You don't just show the diagram — you tell a story about an internal enterprise platform.</strong></p>

<hr>

<h2>🔹 High-Level Architecture (Model-1: Single Organization)</h2>
<p>CloudGuard AI is designed as an <strong>internal enterprise platform</strong> for one organization's cloud environment, following real enterprise modular architecture.</p>

<img src="/diagrams/system-architecture.png" alt="CloudGuard AI Architecture Diagram" width="100%">

<p><strong>The architecture flows from top to bottom:</strong></p>

<h3>1️⃣ User & Product Layer (MERN Dashboard) 👑</h3>
<p><strong>Entry point for all users (Admin/DevOps/Security)</strong></p>
<ul>
    <li>React dashboard with role-based views</li>
    <li>JWT authentication + RBAC (Admin/DevOps/Security/ML)</li>
    <li>Single unified interface for all data</li>
    <li><strong>Admin configures integrations once</strong></li>
</ul>
<p><strong>📌 Admin sees everything, others see their domain only</strong></p>

<h3>2️⃣ Backend API Gateway (Node + Express)</h3>
<ul>
    <li>Aggregates data from all domains</li>
    <li>Enforces role-based access control</li>
    <li>Stores audit logs in MongoDB</li>
    <li><strong>Single API endpoint for frontend</strong></li>
</ul>

<h3>3️⃣ Intelligence Layer (ML Engine) 🤖</h3>
<p><strong>Adds proactive intelligence to operations data</strong></p>
<ul>
    <li>Python ML processes security logs + DevOps metrics</li>
    <li>Detects anomalies (CPU spikes, unusual API calls)</li>
    <li>Generates risk scores and predictions</li>
    <li>Exposes insights via APIs</li>
</ul>

<h3>4️⃣ Operations Layer (DevOps Platform) 🚀</h3>
<p><strong>Automated delivery + monitoring backbone</strong></p>
<ul>
    <li><strong>Jenkins:</strong> CI/CD pipelines (build → Docker → K8s)</li>
    <li><strong>Kubernetes (KIND):</strong> Runs all platform services</li>
    <li><strong>Prometheus:</strong> Collects CPU/memory/pod metrics</li>
    <li><strong>Grafana:</strong> Visual dashboards</li>
    <li><strong>AlertManager:</strong> Proactive notifications</li>
</ul>

<h3>5️⃣ Security Layer (AWS Cloud Security) 🔐</h3>
<p><strong>Proactive cloud protection (runs independently)</strong></p>
<ul>
    <li><strong>AWS Config:</strong> Detects misconfigurations</li>
    <li><strong>CloudTrail:</strong> Tracks all API activity</li>
    <li><strong>Lambda:</strong> Auto-remediates (blocks public S3, closes open ports)</li>
    <li><strong>SNS:</strong> Sends security alerts</li>
</ul>

<h3>6️⃣ Infrastructure Layer (Hybrid) ☁️🏠</h3>
<ul>
    <li><strong>AWS Cloud:</strong> Security monitoring + governance</li>
    <li><strong>Local K8s:</strong> Platform runtime (DevOps/ML/MERN)</li>
</ul>

<hr>

<h2>🔗 DATA FLOW (END-TO-END)</h2>
<pre>
👥 Users → MERN Dashboard → Backend APIs
         ↓
   [ML Engine ← DevOps Platform ← AWS Security]
         ↓
   MongoDB (Audit) + Grafana (Visuals)
</pre>

<hr>

<h2>🎓 ONE-LINE ARCHITECTURE SUMMARY</h2>
<blockquote>
    <p><strong>"Internal enterprise platform with layered architecture: role-based MERN dashboard → intelligent ML → automated DevOps → proactive AWS security, all integrated via APIs for one organization's cloud."</strong></p>
</blockquote>

<hr>

<h2>👥 WHO ANSWERS WHAT IN VIVA (PER PHASE)</h2>

<h3>🟦 PHASE 1 (You - Architecture)</h3>
<table border="1" cellpadding="6">
    <tr><th>Q</th><th>A</th></tr>
    <tr><td><strong>Why hybrid architecture?</strong></td><td>Separates security (AWS) from operations (local K8s) like real enterprises</td></tr>
    <tr><td><strong>How domains integrate?</strong></td><td>APIs + event-driven (SNS → Lambda → K8s services)</td></tr>
</table>

<h3>🟩 PHASE 2 (Vikas - Cloud Security)</h3>
<table border="1" cellpadding="6">
    <tr><th>Q</th><th>A</th></tr>
    <tr><td><strong>What misconfigs detected?</strong></td><td>Public S3, open SGs, weak IAM → auto-fixed by Lambda</td></tr>
    <tr><td><strong>How auto-remediation works?</strong></td><td>AWS Config → Lambda trigger → fix + SNS alert</td></tr>
</table>

<h3>🟨 PHASE 3 (You - DevOps)</h3>
<table border="1" cellpadding="6">
    <tr><th>Q</th><th>A</th></tr>
    <tr><td><strong>CI/CD flow?</strong></td><td>GitHub webhook → Jenkins → Docker → K8s rolling update</td></tr>
    <tr><td><strong>Why KIND Kubernetes?</strong></td><td>Local, lightweight, production-like for dev platform</td></tr>
    <tr><td><strong>Monitoring stack?</strong></td><td>Prometheus scrapes → Grafana dashboards → AlertManager</td></tr>
</table>

<h3>🟧 PHASE 4 (Thilakpriyan - ML)</h3>
<table border="1" cellpadding="6">
    <tr><th>Q</th><th>A</th></tr>
    <tr><td><strong>What ML use case?</strong></td><td>Anomaly detection on security logs + DevOps metrics</td></tr>
    <tr><td><strong>Data sources?</strong></td><td>CloudTrail (security) + Prometheus (operations)</td></tr>
</table>

<h3>🟥 PHASE 5 (Srimathi - MERN)</h3>
<table border="1" cellpadding="6">
    <tr><th>Q</th><th>A</th></tr>
    <tr><td><strong>Role-based access?</strong></td><td>JWT + RBAC: Admin sees all, DevOps sees CI/CD, Security sees AWS</td></tr>
    <tr><td><strong>Why MERN?</strong></td><td>Single JS stack, rapid dev, scalable APIs</td></tr>
</table>

<hr>

<h2>🔥 FINAL VIVA CLOSING (Your Line)</h2>
<blockquote>
    <p><strong>"CloudGuard AI proves how enterprises build internal platforms: specialized teams create independent domains (security→DevOps→ML→UI) integrated via APIs, running 24/7 with zero-touch automation and role-based dashboards."</strong></p>
</blockquote>

<hr>

<h2>🚀 Navigation</h2>
<p align="center">
    <a href="README.html">← Back to Home</a> | 
    <a href="what.html">What is it?</a> | 
    <a href="operating-model.html">👥 Roles</a>
</p>

</body>
</html>
