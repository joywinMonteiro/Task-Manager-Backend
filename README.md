# Task Manager Backend (Starter)

Simple Node.js + Express + MongoDB backend for a Task Manager app.

## Features
- User registration & login (JWT)
- CRUD tasks (title, description, status)
- Dockerfile included
- GitHub Actions CI workflow (example)
- Kubernetes deployment manifest (example)

## Quick start
1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```

## Docker
Build:
```
docker build -t task-manager-api .
```

## Kubernetes
See `k8s/deployment.yaml` for an example manifest.

