# 📌 Task Manager Backend

A simple **Node.js + Express + MongoDB** backend API for a Task Manager application.
This project is containerized with **Docker** and deployable with **Kubernetes**.

---

## 🚀 Features

* ✅ User registration & login with JWT authentication
* ✅ Create, Read, Update, Delete (CRUD) tasks (title, description, status)
* ✅ Secure password hashing with bcrypt
* ✅ Environment-based configuration (`.env`)
* ✅ Dockerfile for containerization
* ✅ Kubernetes manifests for deployment
* ✅ Example CI workflow with GitHub Actions
---

## ⚡ Quick Start (Local Development)

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/Task-Manager.git
   cd Task-Manager
   ```

2. Copy `.env.example` → `.env` and update values:

   ```
   MONGO_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run locally:

   ```bash
   npm run dev
   ```

5. API available at:

   ```
   http://localhost:5000
   ```

---

## 🐳 Docker

### Build Image

```bash
docker build -t task-manager-api .
```

### Run Container

```bash
docker run -p 5000:5000 --env-file .env task-manager-api
```

App will be available at `http://localhost:5000`

---

## ☸️ Kubernetes (Local with Minikube)

1. Make sure Minikube is running:

   ```bash
   minikube start
   ```

2. Load image into Minikube (if local):

   ```bash
   eval $(minikube docker-env)
   docker build -t task-manager-api .
   ```

3. Apply manifests:

   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

4. Expose service:

   ```bash
   kubectl port-forward service/task-manager-service 5000:5000 --address=0.0.0.0
   ```

5. Access API at:

   ```
   http://<your-local-ip>:5000
   ```

---

## 🧪 API Endpoints (Example)

### Auth

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login & get token

### Tasks

* `GET /api/tasks` → Get all tasks
* `POST /api/tasks` → Create new task
* `PUT /api/tasks/:id` → Update task
* `DELETE /api/tasks/:id` → Delete task

---

## 🔄 CI/CD (GitHub Actions)

An example workflow is included in `.github/workflows/ci.yml`:

* Runs `npm install`
* Runs tests 
* Builds Docker image

---

## 📌 To-Do

* [ ] Add Swagger API docs
* [ ] Set up production deployment (AWS/GCP/Azure/DigitalOcean)

---


