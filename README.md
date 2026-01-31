<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🛡️ CloudGuard AI</h1>
<p><strong>Internal Enterprise Cloud Security & Operations Platform</strong></p>

<hr>

<h2>📌 Project Overview</h2>
<p>CloudGuard AI is an <strong>internal enterprise platform</strong> that combines cloud security, DevOps automation, monitoring, and ML intelligence into a single unified dashboard for one organization's cloud environment.</p>

<p>The platform continuously:</p>
<ul>
    <li>🔐 Detects & auto-remediates AWS misconfigurations</li>
    <li>🚀 Automates CI/CD + Kubernetes deployments</li>
    <li>📊 Monitors via Prometheus + Grafana</li>
    <li>🤖 Applies ML anomaly detection</li>
    <li>🌐 Presents everything via secure MERN dashboard</li>
</ul>

<p><strong>👉 Model-1: Single organization (no multi-tenant)</strong></p>

<hr>

<h2>🎯 Problem Statement</h2>
<p>Enterprise cloud teams face:</p>
<ul>
    <li><strong>Security:</strong> Misconfigurations = #1 breach cause</li>
    <li><strong>DevOps:</strong> Manual deployments + no visibility</li>
    <li><strong>Intelligence:</strong> Reactive monitoring, no ML insights</li>
</ul>

<p>👉 <strong>CloudGuard AI solves ALL THREE via one platform</strong></p>

<hr>

<h2>🧩 PHASE-WISE IMPLEMENTATION (CORE OF PROJECT)</h2>

<h3>🟦 PHASE 1 — Project Planning & Architecture ✅ COMPLETED</h3>
<p><strong>Owner:</strong> DevOps Lead (Sriram)</p>

<p><strong>Objectives:</strong></p>
<ul>
    <li>Finalize system architecture</li>
    <li>Define responsibilities</li>
    <li>Setup repository & branches</li>
    <li>Decide tools and APIs</li>
</ul>

<p><strong>Deliverables:</strong></p>
<ul>
    <li>Architecture diagram</li>
    <li>Phase plan</li>
    <li>Repo structure</li>
</ul>

<p>✅ <a href="Architecture.md">Phase 1 completed</a></p>

<hr>

<h3>🟩 PHASE 2 — Cloud Security Foundation ✅ COMPLETED</h3>
<p><strong>Owner:</strong> Cloud Security Engineer (Vikas)</p>

<p><strong>Objectives:</strong></p>
<ul>
    <li>Detect AWS misconfigurations</li>
    <li>Enable logging and auditing</li>
    <li>Implement preventive security</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
    <li>AWS Config rules</li>
    <li>Lambda-based auto-remediation</li>
    <li>SNS alerts</li>
    <li>IAM governance & SCPs</li>
</ul>

<p>✅ <a href="cloud-security/README.md">Phase 2 completed</a></p>

<hr>

<h3>🟨 PHASE 3 — DevOps Automation & Platform Setup 🔄 IN PROGRESS</h3>
<p><strong>Owner:</strong> DevOps Engineer (Sriram)</p>

<p><strong>Objectives:</strong></p>
<ul>
    <li>Automate build and deployment</li>
    <li>Run platform services reliably</li>
    <li>Enable monitoring</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
    <li>Jenkins CI/CD pipelines</li>
    <li>Docker image builds</li>
    <li>Kubernetes deployment (KIND)</li>
    <li>Prometheus + Grafana</li>
</ul>

<hr>

<h3>🟧 PHASE 4 — Machine Learning Intelligence Layer ⏳ PLANNED</h3>
<p><strong>Owner:</strong> ML Engineer (Thilakpriyan)</p>

<p><strong>Objectives:</strong></p>
<ul>
    <li>Add intelligence to security & ops data</li>
    <li>Detect anomalies and trends</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
    <li>Log preprocessing</li>
    <li>Metric ingestion</li>
    <li>Anomaly detection logic</li>
    <li>API for ML insights</li>
</ul>

<hr>

<h3>🟥 PHASE 5 — MERN Application (Product Layer) ⏳ PLANNED</h3>
<p><strong>Owner:</strong> MERN Stack Developer (Srimathi)</p>

<p><strong>Objectives:</strong></p>
<ul>
    <li>Provide unified user interface</li>
    <li>Secure access to platform features</li>
</ul>

<p><strong>Frontend (React):</strong> Login, Dashboard, Alerts</p>
<p><strong>Backend (Node):</strong> JWT, RBAC, APIs, MongoDB</p>

<hr>

<h3>🟪 PHASE 6 — Integration, Testing & Validation ⏳ PLANNED</h3>
<p><strong>Owner:</strong> Entire Team (DevOps lead)</p>

<p><strong>Tests:</strong></p>
<ul>
    <li>Public S3 → auto-blocked</li>
    <li>Open SG → auto-removed</li>
    <li>Pipeline failure → alert triggered</li>
    <li>Abnormal metrics → ML flagged</li>
</ul>

<hr>

<h2>👥 Team & Roles</h2>
<table border="1" cellpadding="6">
    <tr>
        <th>Member</th>
        <th>Domain</th>
        <th>Phase</th>
    </tr>
    <tr>
        <td>Sriram</td>
        <td>DevOps Lead</td>
        <td>Phase 1, 3</td>
    </tr>
    <tr>
        <td>Vikas</td>
        <td>Cloud Security</td>
        <td>Phase 2</td>
    </tr>
    <tr>
        <td>Thilakpriyan</td>
        <td>ML Engineer</td>
        <td>Phase 4</td>
    </tr>
    <tr>
        <td>Srimathi</td>
        <td>MERN Developer</td>
        <td>Phase 5</td>
    </tr>
</table>

<hr>

<h2>🛠️ Tech Stack</h2>
<table border="1" cellpadding="6">
    <tr>
        <th>Domain</th>
        <th>Technologies</th>
    </tr>
    <tr>
        <td>Cloud Security</td>
        <td>AWS Config, Lambda, CloudTrail, SNS</td>
    </tr>
    <tr>
        <td>DevOps</td>
        <td>Jenkins, Docker, KIND, Prometheus</td>
    </tr>
    <tr>
        <td>Monitoring</td>
        <td>Grafana, AlertManager</td>
    </tr>
    <tr>
        <td>ML</td>
        <td>Python, Pandas, Statistical models</td>
    </tr>
    <tr>
        <td>Dashboard</td>
        <td>MERN + JWT + RBAC</td>
    </tr>
</table>

<hr>

<h2>🌐 User Experience</h2>
<table border="1" cellpadding="6">
    <tr>
        <th>Role</th>
        <th>Sees</th>
        <th>Can Do</th>
    </tr>
    <tr>
        <td>👑 Admin</td>
        <td>All dashboards</td>
        <td>Configure + Manage</td>
    </tr>
    <tr>
        <td>🚀 DevOps</td>
        <td>CI/CD + K8s</td>
        <td>Deploy + Monitor</td>
    </tr>
    <tr>
        <td>🛡️ Security</td>
        <td>AWS alerts</td>
        <td>Review risks</td>
    </tr>
</table>

<hr>

<h2>🎓 One-Line Viva Answer</h2>
<blockquote>
    <p><strong>CloudGuard AI is an internal enterprise platform combining AWS security automation, DevOps pipelines, ML intelligence, and role-based dashboards for unified cloud operations.</strong></p>
</blockquote>

<hr>

<h2>🚀 Quick Navigation</h2>
<p align="center">
    <a href="what?.md">📖 What is it?</a> | 
    <a href="cloud-security/README.md">🔐 Cloud Security</a>
</p>

</body>
</html>
