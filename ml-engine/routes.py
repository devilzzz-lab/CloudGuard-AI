from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from preprocess import preprocess_logs
from model import detect_repeated_violations, detect_remediation_spike

router = APIRouter()


# ✅ Input Schema
class Log(BaseModel):
    resource_id: str
    event_type: str  # "violation" or "remediation"
    timestamp: str


# ✅ Output Schema
class AnomalyResponse(BaseModel):
    repeated_violations: list
    remediation_spikes: list


@router.post("/ml/anomalies", response_model=AnomalyResponse)
async def get_anomalies(logs: List[Log]):
    processed_logs = preprocess_logs([log.dict() for log in logs])

    violations = detect_repeated_violations(processed_logs)
    spikes = detect_remediation_spike(processed_logs)

    return {
        "repeated_violations": violations,
        "remediation_spikes": spikes
    }


# ✅ Test API (for demo)
@router.get("/ml/test")
async def test_ml():
    sample_logs = [
        {"resource_id": "sg-1", "event_type": "violation", "timestamp": "2026-04-22T10:00:00"},
        {"resource_id": "sg-1", "event_type": "violation", "timestamp": "2026-04-22T10:01:00"},
        {"resource_id": "sg-1", "event_type": "violation", "timestamp": "2026-04-22T10:02:00"},
        {"resource_id": "sg-2", "event_type": "remediation", "timestamp": "2026-04-22T10:00:00"},
        {"resource_id": "sg-3", "event_type": "remediation", "timestamp": "2026-04-22T10:01:00"},
        {"resource_id": "sg-4", "event_type": "remediation", "timestamp": "2026-04-22T10:02:00"},
        {"resource_id": "sg-5", "event_type": "remediation", "timestamp": "2026-04-22T10:03:00"},
        {"resource_id": "sg-6", "event_type": "remediation", "timestamp": "2026-04-22T10:04:00"},
    ]

    processed_logs = preprocess_logs(sample_logs)

    return {
        "repeated_violations": detect_repeated_violations(processed_logs),
        "remediation_spikes": detect_remediation_spike(processed_logs)
    }