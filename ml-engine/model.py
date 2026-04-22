from collections import defaultdict
from datetime import datetime, timedelta


# 🔴 1. Repeated Violation Detection
def detect_repeated_violations(logs, threshold=3):
    """
    Detect resources that violate repeatedly
    """
    violation_count = defaultdict(int)

    for log in logs:
        if log["event_type"] == "violation":
            violation_count[log["resource_id"]] += 1

    anomalies = []

    for resource, count in violation_count.items():
        if count >= threshold:
            anomalies.append({
                "type": "Repeated Violation",
                "resource_id": resource,
                "count": count,
                "status": "anomaly"
            })

    return anomalies


# 🔴 2. Remediation Spike Detection
def detect_remediation_spike(logs, window_minutes=5, threshold=5):
    """
    Detect too many remediations in short time
    """
    remediation_times = []

    for log in logs:
        if log["event_type"] == "remediation":
            remediation_times.append(datetime.fromisoformat(log["timestamp"]))

    remediation_times.sort()

    anomalies = []

    for i in range(len(remediation_times)):
        count = 1
        for j in range(i + 1, len(remediation_times)):
            if remediation_times[j] - remediation_times[i] <= timedelta(minutes=window_minutes):
                count += 1

        if count >= threshold:
            anomalies.append({
                "type": "Remediation Spike",
                "count": count,
                "window_minutes": window_minutes,
                "status": "anomaly"
            })
            break  # one spike is enough

    return anomalies