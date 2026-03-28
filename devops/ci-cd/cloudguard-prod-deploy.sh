#!/bin/bash
set -euo pipefail

REGISTRY="devilzz"
BACKEND_IMAGE="cloudguard-backend"
FRONTEND_IMAGE="cloudguard-frontend"

if [ -z "${IMAGE_TAG:-}" ]; then
  echo "❌ ERROR: IMAGE_TAG is not set"
  exit 1
fi

TAG="${IMAGE_TAG}"

echo "======================================"
echo "🚀 Production Deployment"
echo "Tag: ${TAG}"
echo "======================================"

kubectl get ns cloudguard || kubectl create ns cloudguard

kubectl apply -n cloudguard -f devops/k8s/

kubectl set image deployment/cloudguard-backend \
backend=${REGISTRY}/${BACKEND_IMAGE}:${TAG} \
-n cloudguard

kubectl set image deployment/cloudguard-frontend \
frontend=${REGISTRY}/${FRONTEND_IMAGE}:${TAG} \
-n cloudguard

kubectl rollout status deployment/cloudguard-backend -n cloudguard
kubectl rollout status deployment/cloudguard-frontend -n cloudguard

kubectl rollout history deployment cloudguard-backend -n cloudguard
kubectl rollout history deployment cloudguard-frontend -n cloudguard

kubectl get pods -n cloudguard

echo "IMAGE_TAG received: ${TAG}"

echo "✅ Deployment completed"