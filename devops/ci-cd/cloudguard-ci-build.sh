#!/bin/bash
set -euo pipefail

REGISTRY="devilzz"
BACKEND_IMAGE="cloudguard-backend"
FRONTEND_IMAGE="cloudguard-frontend"

TAG="build-${BUILD_NUMBER}"

echo "======================================"
echo "🔨 CI JOB – Docker Build & Push"
echo "Tag: ${TAG}"
echo "======================================"

echo "🔐 Docker Login..."
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

echo "🐳 Building Backend Image..."
docker build --pull -t ${REGISTRY}/${BACKEND_IMAGE}:${TAG} -f devops/docker/backend.Dockerfile .
docker tag ${REGISTRY}/${BACKEND_IMAGE}:${TAG} ${REGISTRY}/${BACKEND_IMAGE}:latest

echo "🐳 Building Frontend Image..."
docker build --pull -t ${REGISTRY}/${FRONTEND_IMAGE}:${TAG} -f devops/docker/frontend.Dockerfile .
docker tag ${REGISTRY}/${FRONTEND_IMAGE}:${TAG} ${REGISTRY}/${FRONTEND_IMAGE}:latest

echo "📦 Built Images:"
docker images | grep cloudguard

echo "📤 Pushing Images..."
docker push ${REGISTRY}/${BACKEND_IMAGE}:${TAG}
docker push ${REGISTRY}/${BACKEND_IMAGE}:latest

docker push ${REGISTRY}/${FRONTEND_IMAGE}:${TAG}
docker push ${REGISTRY}/${FRONTEND_IMAGE}:latest


echo "✅ CI Build completed"