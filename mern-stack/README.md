<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<h1>🟥 Phase 5 — MERN Application (Product Layer)</h1>

<h2>Overview</h2>
<p>
Phase 5 implements the <strong>Product Layer</strong> of CloudGuard AI using the MERN stack.
This layer provides a unified interface for interacting with the platform, including
security insights, anomaly detection, and system operations.
</p>

<p>
The backend acts as an API gateway connecting the frontend with the ML engine and cloud services,
while the frontend provides a user-friendly dashboard for visualization and control.
</p>

<hr>

<h2>🎯 Objectives</h2>
<ul>
  <li>Provide a unified web interface for CloudGuard AI</li>
  <li>Integrate backend APIs with ML intelligence layer</li>
  <li>Enable secure access to platform features</li>
  <li>Display anomaly detection results in real-time</li>
</ul>

<hr>

<h2>🏗️ MERN Architecture</h2>
<pre>
React Frontend
      ↓
Node.js Backend (Express API)
      ↓
ML Engine (Phase 4)
      ↓
Cloud Services (AWS)
</pre>

<p>
This architecture allows seamless communication between UI, backend logic,
and ML-based anomaly detection services.
</p>

<hr>

<h2>⚙️ Core Components</h2>

<h3>🔹 1. Frontend (React)</h3>
<p>
Provides a dashboard interface for users to view system status and ML insights.
</p>

<ul>
  <li>Dashboard UI</li>
  <li>Alert display (violations & spikes)</li>
  <li>API integration with backend</li>
</ul>

<h3>🔹 2. Backend (Node.js + Express)</h3>
<p>
Acts as a central API layer that connects frontend with ML engine.
</p>

<ul>
  <li>REST API endpoints</li>
  <li>ML integration via HTTP requests</li>
  <li>Request/response handling</li>
</ul>

<h3>🔹 3. ML Integration</h3>
<p>
Backend communicates with the ML engine to fetch anomaly detection results.
</p>

<ul>
  <li>Repeated violation detection</li>
  <li>Remediation spike detection</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
mern-stack/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── mlRoutes.js
│   ├── services/
│   │   └── mlService.js
│   └── package.json
├── frontend/
│   └── (React Application)
└── README.md
</pre>

<hr>

<h2>🔄 Application Workflow</h2>

<pre>
User Request (Frontend)
        ↓
Backend API (/api/ml/analyze)
        ↓
ML Engine (/ml/anomalies)
        ↓
Detection Logic Execution
        ↓
Response sent back to Frontend
</pre>

<hr>

<h2>🔗 API Endpoints</h2>

<h3>Backend Health Check</h3>
<pre>
GET /api/health
</pre>

<h3>ML Analysis Endpoint</h3>
<pre>
POST /api/ml/analyze
</pre>

<hr>

<h2>▶️ Running the Application</h2>

<h3>Start Backend</h3>
<pre>
cd mern-stack/backend
npm install
node server.js
</pre>

<h3>Start ML Engine</h3>
<pre>
cd ml-engine
uvicorn app:app --reload
</pre>

<hr>

<h2>🧪 Testing APIs</h2>

<h3>1️⃣ Backend Health Check</h3>
<pre>
curl http://localhost:3001/api/health
</pre>

<h3>2️⃣ Test ML Integration</h3>
<pre>
curl -X POST http://localhost:3001/api/ml/analyze \
-H "Content-Type: application/json" \
-d '[
  {"resource_id":"sg-1","event_type":"violation","timestamp":"2026-04-22T10:00:00"},
  {"resource_id":"sg-1","event_type":"violation","timestamp":"2026-04-22T10:01:00"},
  {"resource_id":"sg-1","event_type":"violation","timestamp":"2026-04-22T10:02:00"}
]'
</pre>

<hr>

<h2>📊 Features</h2>

<ul>
  <li>Centralized dashboard for CloudGuard AI</li>
  <li>Real-time anomaly detection integration</li>
  <li>REST API-based architecture</li>
  <li>Scalable backend design</li>
</ul>

<hr>

<h2>⚙️ Technologies Used</h2>

<ul>
  <li>MongoDB (optional integration)</li>
  <li>Express.js</li>
  <li>React.js</li>
  <li>Node.js</li>
</ul>

<hr>

<h2>🎓 One-Line Summary</h2>

<blockquote>
  <p>
  <strong>Phase 5 implements a MERN-based product layer that integrates frontend, backend, and ML services to provide real-time anomaly detection and user interaction for CloudGuard AI.</strong>
  </p>
</blockquote>

</body>
</html>