# 🚀 Phase 3 — DevOps Automation & Platform Setup

## Overview

Phase 3 implements the **DevOps automation layer** for the CloudGuard AI platform.

The goal of this phase is to automate application delivery, run platform services reliably inside Kubernetes, and enable real-time monitoring of the system.

This phase establishes a **production-like DevOps environment** using containerization, CI/CD pipelines, and Kubernetes orchestration.

---

# 🎯 Objectives

The DevOps phase focuses on the following objectives:

* Automate build and deployment of platform services
* Run applications inside a Kubernetes cluster
* Implement container-based infrastructure
* Enable monitoring and observability
* Provide automated CI/CD pipelines

This allows CloudGuard AI services to run **continuously and reliably**.

---

# 🏗️ DevOps Architecture

The DevOps automation layer connects development workflows with runtime infrastructure.

```
Developer
   ↓
GitHub Repository
   ↓
Jenkins CI/CD Pipeline
   ↓
Docker Image Build
   ↓
DockerHub Registry
   ↓
Kubernetes Cluster (KIND)
   ↓
Prometheus Monitoring
   ↓
Grafana Dashboards
```

This architecture ensures that application updates are **automatically built, deployed, and monitored**.

---

# ⚙️ Technologies Used

The following tools were used to build the DevOps platform:

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| Jenkins           | CI/CD automation        |
| Docker            | Containerization        |
| Kubernetes (KIND) | Container orchestration |
| Prometheus        | Metrics collection      |
| Grafana           | Monitoring dashboards   |
| GitHub            | Source code management  |

---

# 🔄 CI/CD Pipeline Workflow

The Jenkins pipeline automates the build and deployment process.

## Step 1 — Code Commit

Developers push code to the GitHub repository.

```
git push origin main
```

## Step 2 — Jenkins CI Job

Jenkins automatically performs the following tasks:

* Pull latest source code
* Build Docker image
* Tag image using build number
* Push image to DockerHub registry

Example image tag:

```
devilzz/cloudguard-backend:build-12
```

---

## Step 3 — Production Deployment Job

The deployment job performs the following operations:

* Creates Kubernetes namespace (if not exists)
* Applies Kubernetes manifests
* Updates container image in deployment
* Waits for rollout completion

Example commands executed by Jenkins:

```
kubectl get ns cloudguard || kubectl create ns cloudguard

kubectl apply -n cloudguard -f k8s/

kubectl set image deployment/cloudguard-backend \
cloudguard-backend=devilzz/cloudguard-backend:build-12 \
-n cloudguard

kubectl rollout status deployment cloudguard-backend -n cloudguard
```

---

# ☸️ Kubernetes Platform Setup

All CloudGuard AI services run inside a **Kubernetes cluster**.

A lightweight Kubernetes cluster was created using **KIND (Kubernetes in Docker)**.

### Namespace Structure

```
cloudguard
monitoring
```

### Services Deployed

| Service     | Purpose                   |
| ----------- | ------------------------- |
| Backend API | Platform API service      |
| ML Engine   | Anomaly detection service |
| MongoDB     | Data storage              |
| Prometheus  | Metrics collection        |
| Grafana     | Visualization             |

---

# 📊 Monitoring & Observability

Monitoring was implemented using Prometheus and Grafana.

## Metrics Collection

Prometheus collects metrics from Kubernetes nodes and application pods.

Examples of monitored metrics:

* CPU usage
* Memory usage
* Pod restarts
* Deployment health
* Node resource utilization

## Visualization

Grafana dashboards provide real-time visualization of platform performance.

DevOps engineers can observe system health and detect operational issues quickly.

---

# 📁 Project Structure

```
devops/
├── ci-cd
│   ├── cloudguard-ci-build.sh
│   └── cloudguard-prod-deploy.sh
├── diagrams
├── docker
│   ├── backend.Dockerfile
│   └── ml-engine.Dockerfile
├── k8s
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── ml-deployment.yaml
│   ├── ml-service.yaml
│   ├── mongo.yaml
│   └── namespace.yaml
├── monitoring
│   ├── alertmanager.yaml
│   ├── grafana.yaml
│   └── prometheus.yaml
├── README.md
└── screenshots

---

# 🔎 DevOps Responsibilities in the Platform

The DevOps layer is responsible for:

* Automating build and deployment pipelines
* Managing Kubernetes infrastructure
* Ensuring reliable service operation
* Monitoring system health
* Handling deployment failures and alerts

This layer ensures that CloudGuard AI services run **continuously with minimal manual intervention**.

---

# 🧠 How DevOps Integrates with Other Phases

CloudGuard AI platform architecture consists of multiple independent domains.

```
User
 ↓
MERN Dashboard
 ↓
Backend APIs
 ↓
---------------------------------
| Security | DevOps | ML Engine |
---------------------------------
 ↓         ↓         ↓
AWS     Kubernetes   ML Models
```

Each domain operates independently but integrates through APIs and shared infrastructure.

---

# 🎓 One-Line Summary

> Phase 3 implements the DevOps automation layer of CloudGuard AI by enabling CI/CD pipelines, containerized deployments, Kubernetes orchestration, and real-time monitoring of platform services.

---

# 📌 Phase Status

```
PHASE 1 — Architecture & Planning        ✅ Completed
PHASE 2 — Cloud Security Foundation     ✅ Completed
PHASE 3 — DevOps Automation Platform    🔄 In Progress
PHASE 4 — ML Intelligence Layer         ⏳ Planned
PHASE 5 — MERN Dashboard Interface      ⏳ Planned
```
