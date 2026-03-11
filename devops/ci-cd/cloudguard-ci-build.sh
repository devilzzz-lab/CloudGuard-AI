#!/bin/bash
set -e

REGISTRY="devilzz"
BACKEND_IMAGE="cloudguard-backend"
ML_IMAGE="cloudguard-ml"
TAG="build-${BUILD_NUMBER}"

echo "======================================"
echo "🔨 CI JOB – Docker Build & Push"
echo "Tag: ${TAG}"
echo "======================================"

echo "🔐 Docker Login..."
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

echo "🐳 Building Backend Image..."
docker build -t ${REGISTRY}/${BACKEND_IMAGE}:${TAG} -f docker/backend.Dockerfile .

docker tag ${REGISTRY}/${BACKEND_IMAGE}:${TAG} ${REGISTRY}/${BACKEND_IMAGE}:latest

echo "🐳 Building ML Engine Image..."
docker build -t ${REGISTRY}/${ML_IMAGE}:${TAG} -f docker/ml-engine.Dockerfile .

docker tag ${REGISTRY}/${ML_IMAGE}:${TAG} ${REGISTRY}/${ML_IMAGE}:latest

echo "📤 Pushing Images..."
docker push ${REGISTRY}/${BACKEND_IMAGE}:${TAG}
docker push ${REGISTRY}/${BACKEND_IMAGE}:latest

docker push ${REGISTRY}/${ML_IMAGE}:${TAG}
docker push ${REGISTRY}/${ML_IMAGE}:latest

echo "✅ CI Build completed"