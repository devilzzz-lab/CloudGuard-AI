#!/bin/bash
set -e

REGISTRY="devilzz"
BACKEND_IMAGE="cloudguard-backend"
ML_IMAGE="cloudguard-ml"
TAG="${IMAGE_TAG}"

echo "======================================"
echo "🚀 Production Deployment"
echo "Tag: ${TAG}"
echo "======================================"

kubectl get ns cloudguard || kubectl create ns cloudguard

kubectl apply -n cloudguard -f k8s/

kubectl set image deployment/cloudguard-backend \
backend=${REGISTRY}/${BACKEND_IMAGE}:${TAG} \
-n cloudguard

kubectl set image deployment/cloudguard-ml \
ml=${REGISTRY}/${ML_IMAGE}:${TAG} \
-n cloudguard

kubectl rollout status deployment cloudguard-backend -n cloudguard
kubectl rollout status deployment cloudguard-ml -n cloudguard

kubectl get pods -n cloudguard

echo "✅ Deployment completed"