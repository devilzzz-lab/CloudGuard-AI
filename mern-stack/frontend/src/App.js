import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

// ✅ CENTRALIZED BACKEND URL
const API_BASE = "http://localhost:3001";

function App() {
  const [violations, setViolations] = useState([]);
  const [spikes, setSpikes] = useState([]);
  const [status, setStatus] = useState("Not Checked");
  const [pods, setPods] = useState([]);
  const [logs, setLogs] = useState("");
  const [selectedPod, setSelectedPod] = useState("");
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    getPods();
    getMetrics();

    const interval = setInterval(() => {
      getPods();
      getMetrics();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 PODS
  const getPods = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/devops/pods`);
      setPods(res.data);

      res.data.forEach(p => {
        if (p.restarts > 3) {
          console.warn(`⚠️ Pod ${p.name} restarting too much`);
        }
      });

    } catch (err) {
      console.error("Pods Error:", err.message);
    }
  };

  // 🔹 METRICS
  const getMetrics = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/devops/metrics`);

      const formatted = res.data.map(m => ({
        name: m.name,
        cpu: parseInt(m.cpu.replace("m", "")),
        memory: parseInt(m.memory.replace("Mi", ""))
      }));

      setMetrics(formatted);
    } catch (err) {
      console.error("Metrics Error:", err.message);
    }
  };

  // 🔹 LOGS
  const getLogs = async (podName) => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/devops/logs/${podName}`
      );
      setLogs(res.data.logs);
      setSelectedPod(podName);
    } catch (err) {
      console.error("Logs Error:", err.message);
    }
  };

  // 🔹 STATUS COLOR
  const getColor = (status) => {
    if (status === "Running") return "green";
    if (status === "Pending") return "orange";
    return "red";
  };

  // 🔹 HEALTH
  const checkHealth = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/health`);
      setStatus(res.data.status);
    } catch {
      setStatus("Backend Down ❌");
    }
  };

  // 🔹 ML
  const runML = async () => {
    try {
      const logsRes = await axios.get(`${API_BASE}/api/ml/logs`);

      const res = await axios.post(
        `${API_BASE}/api/ml/analyze`,
        logsRes.data
      );

      setViolations(res.data.repeated_violations || []);
      setSpikes(res.data.remediation_spikes || []);
    } catch (err) {
      console.error("ML Error:", err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 CloudGuard AI Dashboard</h1>

      <button onClick={checkHealth}>Check Backend</button>
      <p>Status: {status}</p>

      <h2>☸️ Kubernetes Pods (Auto Refresh)</h2>

      {pods.length === 0 ? (
        <p>No data</p>
      ) : (
        pods.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderLeft: `6px solid ${getColor(p.status)}`
            }}
          >
            <strong>{p.name}</strong> <br />
            Status: {p.status} <br />
            Restarts: {p.restarts} <br />
            Node: {p.node} <br />

            <button onClick={() => getLogs(p.name)}>
              View Logs
            </button>
          </div>
        ))
      )}

      {/* Logs */}
      {selectedPod && (
        <div style={{ marginTop: "20px" }}>
          <h3>📜 Logs: {selectedPod}</h3>
          <pre style={{
            background: "#000",
            color: "#0f0",
            padding: "10px",
            maxHeight: "300px",
            overflow: "auto"
          }}>
            {logs}
          </pre>
        </div>
      )}

      {/* CPU */}
      <h2>📊 CPU Usage</h2>
      <BarChart width={600} height={300} data={metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cpu" />
      </BarChart>

      {/* Memory */}
      <h2>💾 Memory Usage</h2>
      <BarChart width={600} height={300} data={metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="memory" />
      </BarChart>

      <button onClick={runML}>Run ML Analysis</button>

      <h2>🚨 Repeated Violations</h2>
      {violations.length === 0 ? (
        <p>No anomalies</p>
      ) : (
        violations.map((v, i) => (
          <p key={v.resource_id || i}>
            {v.resource_id} → {v.count} times
          </p>
        ))
      )}

      <h2>⚠️ Remediation Spikes</h2>
      {spikes.length === 0 ? (
        <p>No spikes</p>
      ) : (
        spikes.map((s, i) => (
          <p key={i}>
            {s.count} events in {s.window_minutes} mins
          </p>
        ))
      )}
    </div>
  );
}

export default App;