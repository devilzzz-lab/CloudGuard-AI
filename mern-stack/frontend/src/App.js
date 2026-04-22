import React, { useState } from "react";
import axios from "axios";

function App() {
  const [violations, setViolations] = useState([]);
  const [spikes, setSpikes] = useState([]);
  const [status, setStatus] = useState("Not Checked");
  const [pods, setPods] = useState([]);

  const getPods = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/devops/pods");
      setPods(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const checkHealth = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/health");
      setStatus(res.data.status);
    } catch {
      setStatus("Backend Down ❌");
    }
  };

  const runML = async () => {
    try {
      const logsRes = await axios.get("http://localhost:3001/api/ml/logs");

      const res = await axios.post(
        "http://localhost:3001/api/ml/analyze",
        logsRes.data
      );

      setViolations(res.data.repeated_violations || []);
      setSpikes(res.data.remediation_spikes || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 CloudGuard AI Dashboard</h1>

      {/* Backend Health */}
      <button onClick={checkHealth}>Check Backend</button>
      <p>Status: {status}</p>

      {/* Kubernetes Pods */}
      <button onClick={getPods}>Check Kubernetes Pods</button>

      <h2>☸️ Kubernetes Pods</h2>
      {pods.length === 0 ? (
        <p>No data</p>
      ) : (
        pods.map((p, i) => (
          <p key={p.name || i}>
            {p.name} → {p.status}
          </p>
        ))
      )}

      {/* ML Analysis */}
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