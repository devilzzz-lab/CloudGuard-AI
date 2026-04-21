<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

<h1>🛡️ CloudGuard AI</h1>
<p><strong>Internal Enterprise Cloud Security &amp; Operations Platform</strong></p>

<hr>

<h2>📌 Project Overview</h2>

<p>CloudGuard AI is an <strong>internal enterprise platform</strong> that combines cloud security, DevOps automation, and ML intelligence into a single unified dashboard for one organization's cloud environment.</p>

<p>The platform continuously:</p>
<ul>
  <li>🔐 Detects and auto-remediates AWS misconfigurations</li>
  <li>🚀 Automates CI/CD and Kubernetes deployments</li>
  <li>🤖 Applies ML anomaly detection</li>
  <li>🌐 Presents everything via a secure MERN dashboard</li>
</ul>

<p><strong>👉 Model: Single organization (no multi-tenant)</strong></p>

<hr>

<h2>🎯 Problem Statement</h2>

<p>Enterprise cloud teams face:</p>
<ul>
  <li><strong>Security:</strong> Misconfigurations are the #1 cause of breaches</li>
  <li><strong>DevOps:</strong> Manual deployments with no visibility</li>
</ul>

<p>👉 <strong>CloudGuard AI solves both via one unified platform</strong></p>

<hr>

<h2>🚀 Quick Navigation</h2>

<p align="center">
  <a href="what.md">📖 What is this project about?</a> |
  <a href="GIT_WORKFLOW.md">🔐 GitHub workflow for team</a>
</p>

<hr>

<h2>🧩 Phase-wise Implementation</h2>

<h3>🟦 Phase 1 — Project Planning &amp; Architecture &nbsp;✅ Completed</h3>

<p><strong>Owner:</strong> Sriram (DevOps lead)</p>

<p><strong>Objectives:</strong></p>
<ul>
  <li>Finalize system architecture</li>
  <li>Define responsibilities</li>
  <li>Set up repository and branches</li>
  <li>Decide tools and APIs</li>
</ul>

<p><strong>Deliverables:</strong></p>
<ul>
  <li>Architecture diagram</li>
  <li>Phase plan</li>
  <li>Repository structure</li>
</ul>

<p>✅ <a href="Architecture.md">View Phase 1 docs</a></p>

<hr>

<h3>🟩 Phase 2 — Cloud Security Foundation &nbsp;✅ Completed</h3>

<p><strong>Owner:</strong> Vikas (cloud security engineer)</p>

<p><strong>Objectives:</strong></p>
<ul>
  <li>Detect AWS misconfigurations</li>
  <li>Enable logging and auditing</li>
  <li>Implement preventive security controls</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
  <li>AWS Config rules</li>
  <li>Lambda-based auto-remediation</li>
  <li>SNS alerts</li>
  <li>IAM governance &amp; SCPs</li>
</ul>

<p>✅ <a href="cloud-security/README.md">View Phase 2 docs</a></p>

<hr>

<h3>🟨 Phase 3 — DevOps Automation &amp; Platform Setup &nbsp;🔄 In Progress</h3>

<p><strong>Owner:</strong> Sriram (DevOps engineer)</p>

<p><strong>Objectives:</strong></p>
<ul>
  <li>Automate build and deployment</li>
  <li>Run platform services reliably</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
  <li>Jenkins CI/CD pipelines</li>
  <li>Docker image builds</li>
  <li>Kubernetes deployment (KIND)</li>
</ul>

<p>🔄 <a href="devops/README.md">View Phase 3 docs</a></p>

<hr>

<h3>🟧 Phase 4 — Machine Learning Intelligence Layer &nbsp;⏳ Pending</h3>

<p><strong>Owner:</strong> Thilakpriyan (ML engineer)</p>

<p><strong>Objectives:</strong></p>
<ul>
  <li>Add intelligence to security and ops data</li>
  <li>Detect anomalies and trends</li>
</ul>

<p><strong>Implementations:</strong></p>
<ul>
  <li>Log preprocessing</li>
  <li>Metric ingestion</li>
  <li>Anomaly detection logic</li>
  <li>API for ML insights</li>
</ul>

<p>⏳ <a href="ml-engine/README.md">View Phase 4 docs</a></p>

<hr>

<h3>🟥 Phase 5 — MERN Application (Product Layer) &nbsp;⏳ Planned</h3>

<p><strong>Owner:</strong> Srimathi (MERN stack developer)</p>

<p><strong>Objectives:</strong></p>
<ul>
  <li>Provide a unified user interface</li>
  <li>Secure access to platform features</li>
</ul>

<p><strong>Frontend (React):</strong> Login, dashboard, alerts<br>
<strong>Backend (Node):</strong> JWT, RBAC, APIs, MongoDB</p>

<hr>

<h3>🟪 Phase 6 — Integration, Testing &amp; Validation &nbsp;⏳ Planned</h3>

<p><strong>Owner:</strong> Entire team (DevOps lead)</p>

<p><strong>Test scenarios:</strong></p>
<ul>
  <li>Public S3 bucket → auto-blocked</li>
  <li>Open security group → auto-removed</li>
  <li>Pipeline failure → alert triggered</li>
  <li>Abnormal metrics → flagged by ML</li>
</ul>

<hr>

<h2>👥 Team &amp; Roles</h2>

<table>
  <thead>
    <tr>
      <th>Member</th>
      <th>Domain</th>
      <th>Phase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sriram</td>
      <td>DevOps lead</td>
      <td>Phases 1, 3</td>
    </tr>
    <tr>
      <td>Vikas</td>
      <td>Cloud security engineer</td>
      <td>Phase 2</td>
    </tr>
    <tr>
      <td>Thilakpriyan</td>
      <td>ML engineer</td>
      <td>Phase 4</td>
    </tr>
    <tr>
      <td>Srimathi</td>
      <td>MERN developer</td>
      <td>Phase 5</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Technologies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud security</td>
      <td>AWS Config, Lambda, CloudTrail, SNS</td>
    </tr>
    <tr>
      <td>DevOps</td>
      <td>Jenkins, Docker, KIND</td>
    </tr>
    <tr>
      <td>ML</td>
      <td>Python, Pandas, statistical models</td>
    </tr>
    <tr>
      <td>Dashboard</td>
      <td>MERN + JWT + RBAC</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🌐 User Experience</h2>

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Sees</th>
      <th>Can Do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>👑 Admin</td>
      <td>All dashboards</td>
      <td>Configure and manage</td>
    </tr>
    <tr>
      <td>🚀 DevOps</td>
      <td>CI/CD and Kubernetes</td>
      <td>Deploy and monitor</td>
    </tr>
    <tr>
      <td>🛡️ Security</td>
      <td>AWS alerts</td>
      <td>Review risks</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🎓 One-line Summary</h2>

<blockquote>
  <p><strong>CloudGuard AI is an internal enterprise platform combining AWS security automation, DevOps pipelines, ML intelligence, and role-based dashboards for unified cloud operations.</strong></p>
</blockquote>

</body>
</html>