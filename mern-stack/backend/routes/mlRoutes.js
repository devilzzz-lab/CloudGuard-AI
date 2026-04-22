import express from "express";
import { getAnomalies } from "../services/mlService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const logs = req.body;

  const result = await getAnomalies(logs);

  res.json(result);
});

router.get("/logs", (req, res) => {
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

export default router;