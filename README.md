# 🚀 CareerPilot-AI – AI Job Preparation Platform (Full Stack GenAI)

CareerPilot-AI is a **full-stack AI-powered job preparation platform** that helps users prepare for interviews smarter and faster.
It analyzes resumes, compares them with job descriptions, identifies skill gaps, and generates personalized interview questions along with ATS-optimized resumes.

---

## ✨ Features

* 🔐 Secure Authentication using JWT with Token Blacklisting
* 📄 Resume Parsing & Skill Extraction
* 🤖 AI-powered Interview Question Generation
* 📊 Skill Gap Detection based on Job Description
* 📑 ATS-Optimized Resume Generation
* 🧾 Dynamic PDF Generation using Puppeteer
* 💬 Real-time AI-based feedback system

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* SCSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB

### AI & Integrations

* Google Gemini API – AI processing
* Puppeteer – PDF generation
* JWT – Authentication & security

---

## 🧠 How It Works

1. User uploads resume and job description
2. System extracts skills and analyzes requirements
3. AI identifies missing skills and suggests improvements
4. Generates interview questions and evaluates responses
5. Creates ATS-friendly resume and downloadable PDF

---

## 🚀 Deployment

The application is deployed on **Render**.

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/laksh8553/CarrerPilot-Ai.git
cd CarrerPilot-Ai
```

### Install dependencies

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

### Run the application

```bash
# Backend
cd Backend
npm run dev

# Frontend
cd Frontend
npm run dev
```

---

## 🌍 Environment Variables

Create `.env` file in the **Backend** folder:

```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_key
```

For **Frontend**:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📌 Future Improvements

* 🎤 Voice-based interview simulation
* 🧠 Advanced analytics dashboard
* 📊 Resume scoring system
* 🔁 Multi-round interview simulation

---

## 👨‍💻 Author

**Lakshay Gupta**
Full Stack Developer
Computer Science Engineering student

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
