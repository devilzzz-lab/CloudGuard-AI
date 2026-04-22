import axios from "axios";

const ML_API_URL = "http://ml-service:80/ml/anomalies";

export async function getAnomalies(logs) {
  try {
    const response = await axios.post(ML_API_URL, logs);
    return response.data;
  } catch (error) {
    console.error("ML Service Error:", error.message);
    return { error: "ML service failed" };
  }
}