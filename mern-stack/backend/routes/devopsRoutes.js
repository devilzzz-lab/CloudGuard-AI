const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

// 🔹 Get Pods (enhanced)
router.get("/pods", (req, res) => {
  exec("kubectl get pods -n cloudguard -o json", (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr });
    }

    try {
      const data = JSON.parse(stdout);

      const pods = data.items.map(pod => ({
        name: pod.metadata.name,
        status: pod.status.phase,
        restarts: pod.status.containerStatuses?.[0]?.restartCount || 0,
        node: pod.spec.nodeName
      }));

      res.json(pods);
    } catch {
      res.status(500).json({ error: "Parse error" });
    }
  });
});

// 🔹 Get Logs
router.get("/logs/:pod", (req, res) => {
  const podName = req.params.pod;

  exec(`kubectl logs ${podName} -n cloudguard`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr });
    }

    res.json({ logs: stdout });
  });
});


router.get("/metrics", (req, res) => {
  exec("kubectl top pods -n cloudguard --no-headers", (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: stderr });
    }

    try {
      const lines = stdout.trim().split("\n");

      const metrics = lines.map(line => {
        const parts = line.split(/\s+/);

        return {
          name: parts[0],
          cpu: parts[1],     // e.g. 5m
          memory: parts[2]   // e.g. 20Mi
        };
      });

      res.json(metrics);
    } catch {
      res.status(500).json({ error: "Parse error" });
    }
  });
});

module.exports = router;