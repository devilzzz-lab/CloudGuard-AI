import express from "express";
import * as k8s from "@kubernetes/client-node";

const router = express.Router();

// ✅ Load Kubernetes config
const kc = new k8s.KubeConfig();

if (process.env.KUBERNETES_SERVICE_HOST) {
  kc.loadFromCluster();
} else {
  kc.loadFromDefault();
}

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const log = new k8s.Log(kc);

// 🔹 Get Pods ✅ FINAL FIX
router.get("/pods", async (req, res) => {
  try {
    // ✅ Use STRING (not object)
    const response = await k8sApi.listNamespacedPod("cloudguard");

    // ✅ Handle both possible formats safely
    const items = response.items || response.body?.items || [];

    const pods = items.map((pod) => ({
      name: pod.metadata?.name,
      status: pod.status?.phase,
      restarts:
        pod.status?.containerStatuses?.[0]?.restartCount || 0,
      node: pod.spec?.nodeName,
    }));

    res.json(pods);
  } catch (err) {
    console.error("Pods Error FULL:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Logs
router.get("/logs/:pod", async (req, res) => {
  const podName = req.params.pod;

  try {
    let logsData = "";

    await log.log(
      "cloudguard",
      podName,
      "",
      (chunk) => {
        logsData += chunk;
      },
      { follow: false }
    );

    res.json({ logs: logsData });
  } catch (err) {
    console.error("Logs Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Metrics
router.get("/metrics", async (req, res) => {
  res.json([]);
});

export default router;