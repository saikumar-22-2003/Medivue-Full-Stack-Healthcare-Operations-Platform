<div align="center">

# 🏥 Medivue — Healthcare Appointment & Operations Platform

**A full-stack doctor appointment booking platform built with the MERN stack.**

Medivue connects patients with trusted doctors across multiple specialities — powered by three dedicated apps (patient, doctor, admin), secure role-based authentication, online payments, and a built-in hospital hiring system.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://medivue-client.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/saikumar-22-2003/Medivue-Full-Stack-Healthcare-Operations-Platform)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 👨‍⚕️ Browse doctors by speciality & search
- 📅 Book, view, and cancel appointments
- 🔐 Role-based authentication (Patient / Doctor / Admin)
- 💳 Online payments via **Razorpay** & **Stripe**
- 🩺 Doctor dashboard — manage appointments, profile & availability
- 🛠️ Admin dashboard — onboard doctors, manage appointments, view live stats
- 📝 Careers page with job listings & application form
- 🖼️ Image uploads via **Cloudinary**
- 📱 Fully responsive — mobile & desktop

---

## 🛠️ Tech Stack

**Frontend (Patient & Admin):** React.js · Vite · Tailwind CSS · React Router · Axios · Vercel

**Backend:** Node.js · Express.js · MongoDB Atlas · JWT · Cloudinary · Razorpay · Stripe

---

## 🚀 Getting Started

> ⚠️ Always run the **Backend first**, then **Frontend** and **Admin**.

```bash
git clone https://github.com/saikumar-22-2003/Medivue-Full-Stack-Healthcare-Operations-Platform.git
cd Medivue-Full-Stack-Healthcare-Operations-Platform
```

**Backend:**
```bash
cd backend
npm install
cp .env.example .env   # Fill in your values
npm run server         # Runs at http://localhost:4000
```

**Frontend (Patient app):**
```bash
cd ../frontend
npm install
cp .env.example .env   # Fill in your values
npm run dev            # Runs at http://localhost:5173
```

**Admin panel:**
```bash
cd ../admin
npm install
cp .env.example .env   # Fill in your values
npm run dev            # Runs at http://localhost:5174
```

---

## ⚙️ Environment Variables

> 🔒 Never commit `.env` to GitHub. Use `.env.example` for reference.

**`backend/.env`**
```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**`frontend/.env`**
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_ADMIN_URL=http://localhost:5174
```

**`admin/.env`**
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🌍 Deployment (Vercel)

Deploy **backend**, **frontend**, and **admin** as three separate Vercel projects from the same repo.

1. Import repo → set Root Directory to `backend` → add env vars → Deploy
2. Copy live backend URL → import repo again → set Root Directory to `frontend` → set `VITE_BACKEND_URL` to live backend URL → add `VITE_RAZORPAY_KEY_ID` → Deploy
3. Import repo once more → set Root Directory to `admin` → set `VITE_BACKEND_URL` to the same live backend URL → Deploy
4. Update `VITE_ADMIN_URL` in the frontend project with the live admin URL → redeploy

| Service | URL |
|---|---|
| 🌐 Frontend | [medivue-client.vercel.app](https://medivue-client.vercel.app) |
| 🛠️ Admin Panel | *(Add your live admin URL here)* |
| ⚙️ Backend | *(Add your live backend URL here)* |

---

## 🤝 Contributing

Contributions are welcome! See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for the full guide.

Commit format: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`

---

## 📄 License

Licensed under the [MIT License](LICENSE) — Copyright © 2026 Saikumar.

---

## 👨‍💻 Author

**Saikumar** — [@saikumar-22-2003](https://github.com/saikumar-22-2003)

---

<div align="center">

⭐ If you found this project helpful, please give it a star on GitHub! ⭐

</div>