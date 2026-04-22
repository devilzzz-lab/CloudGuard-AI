import express from "express";
import cors from "cors";
import mlRoutes from "./routes/mlRoutes.js";
import devopsRoutes from "./routes/devopsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ml", mlRoutes);
app.use("/api/devops", devopsRoutes);

const PORT = process.env.PORT || 3001;

app.get("/api/health", (req, res) => {
  res.json({
    status: "CloudGuard Backend Running",
    service: "backend",
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT} 🚀`);
});