const express = require("express");
const cors = require("cors");
const mlRoutes = require("./routes/mlRoutes");

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/api/ml", mlRoutes);

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