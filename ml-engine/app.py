from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ML service running"}

@app.get("/predict")
def predict():
    return {"prediction": "dummy"}