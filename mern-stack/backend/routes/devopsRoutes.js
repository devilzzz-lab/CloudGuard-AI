import express from "express";
import * as k8s from "@kubernetes/client-node";

const router = express.Router();

const kc = new k8s.KubeConfig();
if (process.env.KUBERNETES_SERVICE_HOST) {
  kc.loadFromCluster();
} else {
  kc.loadFromDefault();
}

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const metricsApi = kc.makeApiClient(k8s.CustomObjectsApi);

// 🔹 Get Pods
router.get("/pods", async (req, res) => {
  try {
    const response = await k8sApi.listNamespacedPod({ namespace: "cloudguard" });
    const items = response.items ?? [];
    const pods = items.map((pod) => ({
      name: pod.metadata?.name,
      status: pod.status?.phase,
      restarts: pod.status?.containerStatuses?.[0]?.restartCount ?? 0,
      node: pod.spec?.nodeName,
    }));
    console.log("✅ Pods fetched:", pods.length);
    res.json(pods);
  } catch (err) {
    console.error("Pods Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Logs - FIXED (no more streaming crash)
router.get("/logs/:pod", async (req, res) => {
  const podName = req.params.pod;
  try {
    const response = await k8sApi.readNamespacedPodLog({
      name: podName,
      namespace: "cloudguard",
      tailLines: 100
    });
    console.log("✅ Logs fetched for:", podName);
    res.json({ logs: response });
  } catch (err) {
    console.error("Logs Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Metrics - FIXED (reads from metrics-server)
router.get("/metrics", async (req, res) => {
  try {
    const result = await metricsApi.listNamespacedCustomObject({
      group: "metrics.k8s.io",
      version: "v1beta1",
      namespace: "cloudguard",
      plural: "pods"
    });

    const metrics = result.items.map((item) => ({
      name: item.metadata.name,
      cpu: item.containers[0]?.usage?.cpu || "0m",
      memory: item.containers[0]?.usage?.memory || "0Mi"
    }));

    console.log("✅ Metrics fetched:", metrics.length);
    res.json(metrics);
  } catch (err) {
    console.error("Metrics Error:", err.message);
    res.json([]); // fallback so frontend doesn't crash
  }
});

export default router;