const express = require("express");
const router = express.Router();
const k8s = require("@kubernetes/client-node");

// ✅ Load Kubernetes config (works both local + in-cluster)
const kc = new k8s.KubeConfig();

if (process.env.KUBERNETES_SERVICE_HOST) {
  kc.loadFromCluster();   // inside Kubernetes
} else {
  kc.loadFromDefault();   // local testing
}

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const log = new k8s.Log(kc);

// 🔹 Get Pods (NO kubectl)
router.get("/pods", async (req, res) => {
  try {
    const response = await k8sApi.listNamespacedPod("cloudguard");

    const pods = response.body.items.map((pod) => ({
      name: pod.metadata.name,
      status: pod.status.phase,
      restarts:
        pod.status.containerStatuses?.[0]?.restartCount || 0,
      node: pod.spec.nodeName,
    }));

    res.json(pods);
  } catch (err) {
    console.error("Pods Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get Logs (NO kubectl)
router.get("/logs/:pod", async (req, res) => {
  const podName = req.params.pod;

  try {
    let logsData = "";

    await log.log(
      "cloudguard",   // namespace
      podName,
      "",             // container (empty = first)
      (chunk) => {
        logsData += chunk;
      },
      { follow: false }
    );

    res.json({ logs: logsData });
  } catch (err) {
    console.error("Logs Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get Metrics (TEMP SAFE VERSION)
router.get("/metrics", async (req, res) => {
  try {
    // ⚠️ Metrics-server not configured → return empty
    // We will fix this later properly
    res.json([]);
  } catch (err) {
    console.error("Metrics Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;