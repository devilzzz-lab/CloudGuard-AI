from fastapi import FastAPI
from routes import router

app = FastAPI(title="CloudGuard ML Engine")

app.include_router(router)


@app.get("/")
def root():
    return {"message": "ML Engine Running"}