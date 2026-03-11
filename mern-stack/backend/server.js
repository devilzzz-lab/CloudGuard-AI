const express = require("express");
const app = express();

const PORT = 3001;

app.get("/api/health", (req, res) => {
  res.json({
    status: "CloudGuard Backend Running",
    service: "backend",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});