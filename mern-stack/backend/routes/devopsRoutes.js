const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

router.get("/pods", (req, res) => {
  exec("kubectl get pods -n cloudguard -o json", (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr });
    }

    const data = JSON.parse(stdout);

    const pods = data.items.map(pod => ({
      name: pod.metadata.name,
      status: pod.status.phase
    }));

    res.json(pods);
  });
});

module.exports = router;