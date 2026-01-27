<h1>🛡️ CloudGuard AI</h1>
<p><strong>Intelligent Cloud Security & Operations Platform</strong></p>

<h2>📌 Project Overview</h2>
<p>CloudGuard AI is a hybrid cloud native platform designed to provide end to end cloud security, DevOps automation, and machine learning driven intelligence through a single unified system.</p>

<p>The platform continuously:</p>
<ul>
<li>Detects and auto remediates AWS cloud misconfigurations</li>
<li>Automates CI/CD and Kubernetes deployments</li>
<li>Monitors infrastructure using Prometheus & Grafana</li>
<li>Applies ML intelligence on security logs and DevOps metrics</li>
<li>Presents everything through a secure MERN based dashboard</li>
</ul>

<p>This project follows a real enterprise architecture, where each domain is independently developed and integrated via APIs.</p>

<h2>🎯 Problem Statement</h2>
<p>Modern cloud environments face three major challenges:</p>
<ul>
<li>Cloud misconfigurations are the #1 cause of security breaches</li>
<li>DevOps pipelines lack centralized visibility</li>
<li>Security and operational data are reactive, not intelligent</li>
</ul>

<p>Most tools solve these problems separately.</p>
<p>👉 <strong>CloudGuard AI solves all three together</strong> by combining Security + DevOps + ML + Full-Stack UI into a single platform.</p>

<h2>🧠 Key Objectives</h2>
<ul>
<li>Detect insecure AWS configurations in real time</li>
<li>Automatically remediate critical cloud security risks</li>
<li>Automate application deployment using CI/CD pipelines</li>
<li>Monitor Kubernetes clusters and applications</li>
<li>Apply ML to identify anomalies and risk patterns</li>
<li>Provide a centralized dashboard with authentication</li>
<li>Follow a phase wise, modular, enterprise approach</li>
</ul>

<h2>🏗️ Deployment Model</h2>
<h3>Hybrid Architecture</h3>

<p><strong>☁️ AWS Cloud</strong></p>
<ul>
<li>Cloud security detection</li>
<li>Logging & governance</li>
</ul>

<p><strong>🏠 On-Prem / Local Kubernetes</strong></p>
<ul>
<li>DevOps automation</li>
<li>ML services</li>
<li>MERN dashboard</li>
</ul>

<p>This mirrors real SOC / NOC enterprise environments.</p>

<h2>🧩 System Architecture (High Level)</h2>
<img src="/diagrams/system-architecture.png" alt="CloudGuard AI Architecture Diagram" width="100%">

<h2>👥 Team Composition & Responsibilities</h2>
<table border="1" cellpadding="8" cellspacing="0">
<thead>
<tr>
<th>Member</th>
<th>Role</th>
<th>Responsibility</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sriram</td>
<td>DevOps Engineer</td>
<td>CI/CD, Kubernetes, Monitoring, Integration</td>
</tr>
<tr>
<td>Thilakpriyan</td>
<td>ML Engineer</td>
<td>Log & metric analysis, anomaly detection</td>
</tr>
<tr>
<td>Vikas</td>
<td>Cloud Security Engineer</td>
<td>AWS misconfiguration detection & remediation</td>
</tr>
<tr>
<td>Srimathi</td>
<td>MERN Stack Developer</td>
<td>Dashboard UI, backend APIs, authentication</td>
</tr>
</tbody>
</table>

<p>Each member works independently on their domain, exactly like a real company.</p>

<h2>🗂️ Repository Structure</h2>
<pre>
CloudGuard-AI/
│
├── README.md
├── phases/
│   ├── phase-1-architecture.md
│   ├── phase-2-cloud-security.md
│   ├── phase-3-devops.md
│   ├── phase-4-ml.md
│   ├── phase-5-mern.md
│   └── phase-6-integration.md
│
├── devops/
│   ├── jenkins/
│   ├── docker/
│   ├── kubernetes/
│   └── monitoring/
│
├── cloud-security/
│   ├── lambda/
│   ├── config_rules/
│   │   ├── s3-public-access-rule/
│   │   └── sg-open-ports-rule/
│   ├── diagrams/
│   ├── screenshots/
│   └── README.md
│
├── ml-engine/
│   ├── app.py
│   ├── preprocess.py
│   ├── model/
│   └── requirements.txt
│
├── mern-app/
│   ├── frontend/
│   └── backend/
│
└── diagrams/
    └── system-architecture.png
</pre>

<h2>🌳 Branch Strategy</h2>
<table border="1" cellpadding="8" cellspacing="0">
<thead>
<tr>
<th>Branch</th>
<th>Owner</th>
<th>Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>main</td>
<td>You (Final integration & delivery)</td>
<td>Sriram</td>
</tr>
<tr>
<td>devops</td>
<td>DevOps work</td>
<td>Sriram</td>
</tr>
<tr>
<td>cloud-security</td>
<td>Security work</td>
<td>Vikas</td>
</tr>
<tr>
<td>ml-engine</td>
<td>ML work</td>
<td>Thilakpriyan</td>
</tr>
<tr>
<td>mern-app</td>
<td>MERN work</td>
<td>Srimathi</td>
</tr>
</tbody>
</table>


<p>Github Team Work Flow <a href="GIT_WORKFLOW.md">Github Team Work Flow</a> for full documentation</p>

<p>👉 All features are merged only after a phase is completed.</p>

<h2>🧩 PHASE-WISE IMPLEMENTATION (CORE OF PROJECT)</h2>

<h3>🟦 PHASE 1 — Project Planning & Architecture ✅ COMPLETED</h3>
<p><strong>Owner:</strong> DevOps Lead (Sriram)</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Finalize system architecture</li>
<li>Define responsibilities</li>
<li>Setup repository & branches</li>
<li>Decide tools and APIs</li>
</ul>

<p><strong>Deliverables</strong></p>
<ul>
<li>Architecture diagram</li>
<li>Phase plan</li>
<li>Repo structure</li>
</ul>

<p>✅ Phase completed - See <a href="Architecture.md">Architecture</a> for full documentation</p>

<h3>🟩 PHASE 2 — Cloud Security Foundation ✅ COMPLETED</h3>
<p><strong>Owner:</strong> Cloud Security Engineer (Vikas)</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Detect AWS misconfigurations</li>
<li>Enable logging and auditing</li>
<li>Implement preventive security</li>
</ul>

<p><strong>Implementations</strong></p>
<ul>
<li>AWS Config rules</li>
<li>Security detection logic</li>
<li>Lambda-based auto-remediation</li>
<li>SNS alerts</li>
<li>IAM governance & SCPs</li>
</ul>

<p><strong>Output</strong></p>
<ul>
<li>Secure-by-default AWS environment</li>
<li>Real-time detection & remediation</li>
</ul>

<p>✅ Phase completed - See <a href="cloud-security/README.md">cloud-security/README.md</a> for full documentation</p>

<h3>🟨 PHASE 3 — DevOps Automation & Platform Setup</h3>
<p><strong>Owner:</strong> DevOps Engineer (Sriram)</p>
<p><strong>Status:</strong> In Progress</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Automate build and deployment</li>
<li>Run platform services reliably</li>
<li>Enable monitoring</li>
</ul>

<p><strong>Implementations</strong></p>
<ul>
<li>Jenkins CI/CD pipelines</li>
<li>Docker image builds</li>
<li>Kubernetes deployment (KIND)</li>
<li>Prometheus metrics collection</li>
<li>Grafana dashboards</li>
<li>AlertManager configuration</li>
</ul>

<p><strong>Output</strong></p>
<ul>
<li>Fully automated DevOps platform</li>
</ul>

<h3>🟧 PHASE 4 — Machine Learning Intelligence Layer</h3>
<p><strong>Owner:</strong> ML Engineer (Thilakpriyan)</p>
<p><strong>Status:</strong> Planned</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Add intelligence to security & ops data</li>
<li>Detect anomalies and trends</li>
</ul>

<p><strong>Implementations</strong></p>
<ul>
<li>Log preprocessing</li>
<li>Metric ingestion</li>
<li>Anomaly detection logic</li>
<li>Risk scoring</li>
<li>API for ML insights</li>
</ul>

<p><strong>Output</strong></p>
<ul>
<li>ML-powered security & ops insights</li>
</ul>

<h3>🟥 PHASE 5 — MERN Application (Product Layer)</h3>
<p><strong>Owner:</strong> MERN Stack Developer (Srimathi)</p>
<p><strong>Status:</strong> Planned</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Provide a unified user interface</li>
<li>Secure access to platform features</li>
</ul>

<p><strong>Frontend (React)</strong></p>
<ul>
<li>Login & authentication</li>
<li>Dashboard overview</li>
<li>Security alerts page</li>
<li>DevOps metrics page</li>
<li>ML insights page</li>
</ul>

<p><strong>Backend (Node + Express)</strong></p>
<ul>
<li>JWT authentication</li>
<li>Role-based access</li>
<li>API gateway</li>
<li>MongoDB storage</li>
</ul>

<p><strong>Output</strong></p>
<ul>
<li>SaaS-style dashboard</li>
</ul>

<h3>🟪 PHASE 6 — Integration, Testing & Validation</h3>
<p><strong>Owner:</strong> Entire Team (DevOps lead)</p>
<p><strong>Status:</strong> Planned</p>

<p><strong>Objectives</strong></p>
<ul>
<li>Validate end-to-end flow</li>
<li>Prove system functionality</li>
</ul>

<p><strong>Tests</strong></p>
<ul>
<li>Create public S3 → auto-blocked</li>
<li>Open security group → auto-removed</li>
<li>Pipeline failure → alert triggered</li>
<li>Abnormal metrics → ML anomaly flagged</li>
</ul>

<p><strong>Output</strong></p>
<ul>
<li>Fully integrated, interview-ready platform</li>
</ul>

<h2>🛠️ Technology Stack</h2>

<p><strong>Cloud</strong></p>
<ul>
<li>AWS (S3, IAM, Config, CloudTrail, Lambda, SNS)</li>
</ul>

<p><strong>DevOps</strong></p>
<ul>
<li>Jenkins</li>
<li>Docker</li>
<li>Kubernetes (KIND)</li>
<li>GitHub</li>
</ul>

<p><strong>Monitoring</strong></p>
<ul>
<li>Prometheus</li>
<li>Grafana</li>
<li>AlertManager</li>
</ul>

<p><strong>Machine Learning</strong></p>
<ul>
<li>Python</li>
<li>Pandas</li>
<li>NumPy</li>
<li>Statistical anomaly detection</li>
</ul>

<p><strong>MERN</strong></p>
<ul>
<li>MongoDB</li>
<li>Express.js</li>
<li>React</li>
<li>Node.js</li>
<li>JWT Authentication</li>
</ul>

<h2>📊 Project Progress</h2>
<table border="1" cellpadding="8" cellspacing="0">
<thead>
<tr>
<th>Phase</th>
<th>Status</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Phase 1 - Architecture</td>
<td>✅ Complete</td>
<td><a href="Architecture.md">Architecture.md</a></td>
</tr>
<tr>
<td>Phase 2 - Cloud Security</td>
<td>✅ Complete</td>
<td><a href="cloud-security/README.md">cloud-security/README.md</a></td>
</tr>
<tr>
<td>Phase 3 - DevOps</td>
<td>🔄 In Progress</td>
<td>devops/README.md</td>
</tr>
<tr>
<td>Phase 4 - ML Engine</td>
<td>⏳ Planned</td>
<td>ml-engine/README.md</td>
</tr>
<tr>
<td>Phase 5 - MERN App</td>
<td>⏳ Planned</td>
<td>mern-app/README.md</td>
</tr>
<tr>
<td>Phase 6 - Integration</td>
<td>⏳ Planned</td>
<td>phases/phase-6-integration.md</td>
</tr>
</tbody>
</table>

<h2>🎓 Viva Explanation (One Line)</h2>
<p>CloudGuard AI is a modular hybrid cloud platform that integrates cloud security enforcement, DevOps automation, machine learning intelligence, and a full-stack dashboard, reflecting real enterprise cloud operations.</p>

<h2>🏁 Final Conclusion</h2>
<p>CloudGuard AI demonstrates how modern cloud systems are actually built with multiple specialized teams, strong automation, preventive security, intelligent analytics, and a unified product interface.</p>

<p>This project is:</p>
<ul>
<li>✅ Modular</li>
<li>✅ Realistic</li>
<li>✅ Cost-aware</li>
<li>✅ Interview-aligned</li>
<li>✅ Enterprise-grade</li>
</ul>
