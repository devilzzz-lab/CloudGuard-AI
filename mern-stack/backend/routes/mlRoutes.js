const express = require("express");
const router = express.Router();
const { getAnomalies } = require("../services/mlService");

router.post("/analyze", async (req, res) => {
  const logs = req.body;

  const result = await getAnomalies(logs);

  res.json(result);
});

module.exports = router;