const express = require("express");
const router = express.Router();
const { getAnomalies } = require("../services/mlService");

router.post("/analyze", async (req, res) => {
  const logs = req.body;

  const result = await getAnomalies(logs);

  res.json(result);
});

router.get("/logs", (req, res) => {
  // simulate logs coming from AWS / DevOps
  const logs = [
    { resource_id: "sg-1", event_type: "violation", timestamp: "2026-04-22T10:00:00" },
    { resource_id: "sg-1", event_type: "violation", timestamp: "2026-04-22T10:01:00" },
    { resource_id: "sg-1", event_type: "violation", timestamp: "2026-04-22T10:02:00" },
    { resource_id: "sg-2", event_type: "remediation", timestamp: "2026-04-22T10:00:00" },
    { resource_id: "sg-3", event_type: "remediation", timestamp: "2026-04-22T10:01:00" },
    { resource_id: "sg-4", event_type: "remediation", timestamp: "2026-04-22T10:02:00" },
    { resource_id: "sg-5", event_type: "remediation", timestamp: "2026-04-22T10:03:00" },
    { resource_id: "sg-6", event_type: "remediation", timestamp: "2026-04-22T10:04:00" }
  ];

  res.json(logs);
});

module.exports = router;