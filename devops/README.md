<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<h1>🚀 Phase 3 — DevOps Automation & Platform Setup</h1>

<h2>Overview</h2>
<p>Phase 3 implements the <strong>DevOps automation layer</strong> for the CloudGuard AI platform.</p>
<p>The goal is to automate application delivery, run platform services reliably inside Kubernetes</p>
<p>This phase establishes a <strong>production-like DevOps environment</strong> using containerization, CI/CD pipelines, and Kubernetes orchestration.</p>

<h2>🎯 Objectives</h2>
<p>The DevOps phase focuses on these key objectives:</p>
<ul>
  <li>Automate build and deployment of platform services</li>
  <li>Run applications inside a Kubernetes cluster</li>
  <li>Implement container-based infrastructure</li>
  <li>Provide automated CI/CD pipelines</li>
</ul>
<p>This allows CloudGuard AI services to run <strong>continuously and reliably</strong>.</p>

<h2>🏗️ DevOps Architecture</h2>
<p>The DevOps automation layer connects development workflows with runtime infrastructure.</p>
<pre>
Developer
   ↓
GitHub Repository
   ↓
Jenkins CI/CD Pipeline
   ↓
Docker Image Build
   ↓
DockerHub Registry
   ↓
Kubernetes Cluster (KIND)
</pre>
<p>This architecture ensures application updates are <strong>automatically built and deployed</strong>.</p>

<h2>⚙️ Technologies Used</h2>
<table>
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Jenkins</td>
    <td>CI/CD automation</td>
  </tr>
  <tr>
    <td>Docker</td>
    <td>Containerization</td>
  </tr>
  <tr>
    <td>Kubernetes (KIND)</td>
    <td>Container orchestration</td>
  </tr>
  <tr>
    <td>GitHub</td>
    <td>Source code management</td>
  </tr>
</table>

<h2>🔄 CI/CD Pipeline Workflow</h2>

<h3>Step 1 - Enable ngrok</h3>
<p>This command:</p>
<pre>ngrok http 8080</pre>
<p>generates a domain like <code>https://e6d7-14-102-13-146.ngrok-free.app</code> (port forwarding: ngrok URL → <code>http://localhost:8080</code>).</p>
<p><strong>Setup GitHub Webhook:</strong></p>
<ol>
  <li>Copy the ngrok domain</li>
  <li>Go to repo → Settings → Webhooks → Add webhook</li>
  <li>Payload URL: <code>https://your-ngrok-url/github-webhook/</code></li>
  <li>Content type: <code>application/json</code></li>
</ol>
<p>Now GitHub and Jenkins are connected!</p>

<h3>Step 2 — Code Commit</h3>
<pre>git push main</pre>

<h3>Step 3 — Jenkins CI Job</h3>
<p>Jenkins automatically performs:</p>
<ul>
  <li>Pulls latest source code from GitHub via webhook</li>
  <li>Builds Docker images (frontend + backend)</li>
  <li>Tags images using build number</li>
  <li>Pushes images to DockerHub registry</li>
</ul>
<p><strong>Example image tags:</strong></p>
<pre>yourusername/cloudguard-backend:build-42
yourusername/cloudguard-frontend:build-42
yourusername/cloudguard-ml-engine:build-42</pre>

<h3>Step 4 — Production Deployment Job</h3>
<p>The deployment job executes:</p>
<pre># Create Kubernetes namespace (if not exists)
kubectl create namespace cloudguard --dry-run=client -o yaml | kubectl apply -f -

# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
kubectl apply -f k8s/ml-deployment.yaml
kubectl apply -f k8s/ml-service.yaml


# Update image in deployment and rollout
kubectl set image deployment/backend-api cloudguard-backend=yourusername/cloudguard-backend:build-42 -n cloudguard
kubectl rollout status deployment/backend-api -n cloudguard</pre>

<h2>☸️ Kubernetes Platform Setup</h2>
<p>All CloudGuard AI services run inside a <strong>Kubernetes cluster</strong> created using <strong>KIND (Kubernetes IN Docker)</strong>.</p>

<h3>Namespace Structure</h3>
<pre>cloudguard    # Application services
monitoring    # Observability stack</pre>

<h3>Services Deployed</h3>
<table>
  <tr>
    <th>Service</th>
    <th>Purpose</th>
    <th>Namespace</th>
  </tr>
  <tr>
    <td>Backend API</td>
    <td>Platform API service</td>
    <td>cloudguard</td>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>User dashboard</td>
    <td>cloudguard</td>
  </tr>
  <tr>
    <td>ML Engine</td>
    <td>Anomaly detection service</td>
    <td>cloudguard</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>Data storage</td>
    <td>cloudguard</td>
  </tr>
</table>

<hr>

<h2>📁 Project Structure</h2>
<pre>devops/
├── ci-cd/
│   ├── cloudguard-ci-build.sh       # CI build script
│   └── cloudguard-prod-deploy.sh    # CD deploy script
├── diagrams/                        # Architecture diagrams
├── docker/
│   ├── backend.Dockerfile
│   └── ml-engine.Dockerfile
├── k8s/
│   ├── namespace.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── ml-deployment.yaml
│   ├── ml-service.yaml
│   └── mongo.yaml
├── README.md
└── screenshots/</pre>

<h2>🔎 DevOps Responsibilities</h2>
<p>The DevOps layer handles:</p>
<ul>
  <li>Automating build/deployment pipelines</li>
  <li>Managing Kubernetes infrastructure</li>
  <li>Ensuring 99.9% service uptime</li>
  <li>Real-time system monitoring</li>
  <li>Automated failure recovery</li>
  <li>Deployment rollback capabilities</li>
</ul>

<h2>🧠 Integration Architecture</h2>
<pre>User
 ↓
MERN Dashboard (Phase 5)
 ↓
Backend APIs (Phase 2)
 ---------------------------------
| Security  | DevOps  | ML Engine |
| (Phase 2) | (Phase 3)| (Phase 4) |
 ---------------------------------
 ↓          ↓         ↓
AWS S3/EC2  KIND K8s  ML Models</pre>
<p>Each domain operates independently but integrates through APIs and shared infrastructure.</p>

<h2>🎓 One-Line Summary</h2>
<blockquote>
  <p><strong>Phase 3 implements DevOps automation for CloudGuard AI with CI/CD pipelines, Kubernetes orchestration (KIND) and Docker containerization</strong></p>
</blockquote>

</body>
</html>