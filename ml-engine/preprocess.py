from collections import defaultdict

def preprocess_logs(logs):
    """
    Expected log format:
    [
        {
            "resource_id": "sg-123",
            "event_type": "violation" or "remediation",
            "timestamp": "2026-04-22T10:00:00"
        }
    ]
    """
    structured = []

    for log in logs:
        structured.append({
            "resource_id": log.get("resource_id"),
            "event_type": log.get("event_type"),
            "timestamp": log.get("timestamp")
        })

    return structured