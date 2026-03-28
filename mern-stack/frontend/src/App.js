import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://localhost:8084/api/health")
    .then((res) => res.json())
    .then((data) => setMessage(data.status))
    .catch(() => setMessage("Backend not reachable"));
}, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>CloudGuard AI Platform</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;