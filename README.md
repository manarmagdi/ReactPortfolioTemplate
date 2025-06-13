
# 🚀 Manar's React Portfolio – Customized Version

This is a **customized fork** of the original [React Portfolio Template](https://github.com/safak/react-portfolio) with my own enhancements in styling, CI/CD, and deployment.

---

## ✨ What's New in This Version

### 🔧 UI/UX Customizations
- Redesigned navigation bar with centered **M&M initials** as a brand logo.
- Enhanced styling using SCSS with new gradients, hover effects, and layout tweaks.

### 🧠 Technical Improvements
- Added responsive design tweaks for better mobile experience.
- Updated component structure for better readability and reuse.

### ⚙️ DevOps & CI/CD Integration
- **GitHub Actions** set up for Continuous Integration (CI):
  - Auto-build and validate when key files like `src/`, `public/`, or `package.json` are modified.

- **Argo CD** setup for Continuous Deployment (CD):
  - Automatically deploys updates to a Kubernetes cluster using GitOps practices.
  - Application manifests stored in the `kubernetes/` directory.
  - Ingress and Service configurations included.

---

## 🚀 Deployment Overview

This project is deployed using:

- **Docker**: Containerizing the app
- **Kubernetes**: Running on a remote cluster
- **Argo CD**: Handling automated sync from GitHub to Kubernetes
- **GitHub Actions**: Triggers builds and updates based on commits

---

## 🗂 Folder Structure Highlights

```bash
.
├── kubernetes/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── src/
├── public/
├── .github/workflows/
│   └── ci.yml
├── README.md
└── package.json
```

---

## 📦 Getting Started Locally

```bash
# Install dependencies
npm install

# Start the app
npm start
```

---

## 🌐 Live Deployment

This app is live and continuously deployed via Argo CD. Reach out if you'd like to see a demo or the live link.

---

