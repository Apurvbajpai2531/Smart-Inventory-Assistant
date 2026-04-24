# Smart Inventory Assistant 🚀

An end-to-end **DevOps, Cloud-Native, and Observability** project that demonstrates how modern teams build, deploy, monitor, and troubleshoot scalable applications.

## 📌 Project Overview

Smart Inventory Assistant is a full-stack application designed to simulate a production-style workflow from development to deployment and monitoring.

It includes:

* Frontend UI
* Node.js Backend API
* PostgreSQL Database
* Containerized services with Docker
* Kubernetes deployment using Kind
* GitOps delivery with Argo CD
* CI/CD with GitHub Actions
* Monitoring with Prometheus + Grafana
* Logging with Loki
* Tracing with OpenTelemetry + Tempo
* Search/analytics with OpenSearch

## 🏗️ Architecture

```text
Developer → GitHub → GitHub Actions → Docker Images → Kubernetes Cluster
                                       ↓
                                   Argo CD Sync
                                       ↓
                             Application Services Running
                                       ↓
        Prometheus Metrics | Grafana Dashboards | Loki Logs | Tempo Traces
```

## 🛠️ Tech Stack

### Application

* Frontend (HTML/CSS/JS)
* Node.js
* PostgreSQL

### DevOps & Deployment

* Docker
* Docker Compose
* Kubernetes
* Kind
* Helm
* Argo CD
* GitHub Actions

### Observability

* Prometheus
* Grafana
* Loki
* OpenTelemetry
* Tempo
* OpenSearch
* OpenSearch Dashboards

## 📁 Project Structure

```text
Smart-Inventory-Assistant/
├── frontend/
├── backend/
├── helm/
│   └── smart-inventory/
├── k8s/
├── argocd/
├── .github/workflows/
└── README.md
```

## 🚀 Features Implemented

### 1. Full-Stack Application

* Inventory UI
* Backend APIs
* PostgreSQL integration

### 2. Dockerization

* Separate frontend/backend images
* Multi-service local environment using Docker Compose

### 3. Kubernetes Deployment

* Deployments
* Services
* Namespaces
* Internal networking
* NodePort exposure

### 4. Helm Charts

* Reusable package deployment
* Parameterized values

### 5. GitOps with Argo CD

* Automatic sync from GitHub repo to cluster
* Self-heal & prune support

### 6. CI/CD Pipelines

* GitHub Actions workflow
* Build automation
* Deployment pipeline
* Email notifications

### 7. Monitoring

* Prometheus metrics scraping
* Grafana dashboards
* Node Exporter
* kube-state-metrics

### 8. Logging

* Loki log aggregation
* Promtail log shipping

### 9. Tracing

* OpenTelemetry instrumentation
* Tempo trace backend

## 📊 Access URLs (Local)

```text
Frontend : http://localhost:30010
Backend  : http://localhost:30009
Grafana  : http://localhost:3000
Prometheus : http://localhost:9090
Argo CD : http://localhost:8080
```

## ⚙️ Complete Installation & Setup Guide

Follow these exact steps to run the full project from scratch.

### 1. Clone Repository

```bash
git clone https://github.com/Apurvbajpai2531/Smart-Inventory-Assistant.git
cd Smart-Inventory-Assistant
```

### 2. Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### 3. Install Docker Compose

```bash
sudo apt install docker-compose-plugin -y
docker compose version
```

### 4. Run Project with Docker Compose

```bash
docker compose up --build -d
```

### 5. Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

### 6. Install Kind

```bash
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

### 7. Create Kubernetes Cluster

```bash
kind create cluster --name apurv-cluster
kubectl cluster-info --context kind-apurv-cluster
```

### 8. Build Docker Images

```bash
docker build -t smart-frontend:latest ./frontend
docker build -t smart-backend:latest ./backend
```

### 9. Load Images into Kind Cluster

```bash
kind load docker-image smart-frontend:latest --name apurv-cluster
kind load docker-image smart-backend:latest --name apurv-cluster
```

### 10. Deploy Kubernetes Resources

```bash
kubectl apply -f k8s/
```

### 11. Verify Pods & Services

```bash
kubectl get pods
kubectl get svc
```

### 12. Access Application

```text
Frontend : http://localhost:30010
Backend  : http://localhost:30009
```

### 13. Install Helm

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
helm version
```

### 14. Deploy via Helm Chart

```bash
helm upgrade --install smart-inventory ./helm/smart-inventory
```

### 15. Install Argo CD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### 16. Access Argo CD

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Open: [https://localhost:8080](https://localhost:8080)

### 17. Install Monitoring Stack

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
kubectl create namespace monitoring
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring
```

### 18. Access Grafana

```bash
kubectl port-forward svc/monitoring-grafana -n monitoring 3000:80
```

Open: [http://localhost:3000](http://localhost:3000)

Get password:

```bash
kubectl get secret monitoring-grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 -d
```

### 19. Install Loki Logging Stack

```bash
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
kubectl create namespace logging
helm install loki grafana/loki-stack -n logging
```

### 20. Add Loki in Grafana

```text
URL: http://loki.logging:3100
```

### 21. Optional Public Access using ngrok

```bash
ngrok http 30010
```

## 🚀 Quick Start

### Clone Repo

```bash
git clone https://github.com/Apurvbajpai2531/Smart-Inventory-Assistant.git
cd Smart-Inventory-Assistant
```

### Docker Compose

```bash
docker compose up --build
```

### Kubernetes (Kind)

```bash
kind create cluster --name apurv-cluster
kubectl apply -f k8s/
```

### Helm Deploy

```bash
helm upgrade --install smart-inventory ./helm/smart-inventory
```

## 📈 Real-World Issues Solved

* ErrImageNeverPull / ImagePullBackOff
* DNS resolution failures
* Port conflicts
* Service endpoint issues
* Helm ownership conflicts
* Grafana datasource errors
* Pod startup failures
* Kubernetes networking issues
* Cluster image loading problems

## 🎯 Key Learnings

* End-to-end DevOps lifecycle
* CI/CD + GitOps workflows
* Kubernetes service networking
* Monitoring, logging, tracing
* Production-style troubleshooting
* Cloud-native deployment mindset.

