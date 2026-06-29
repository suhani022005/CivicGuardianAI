🚀 CivicGuardianAI

🧠 AI-Powered Community Issue Reporting & Resolution System

📌 Problem Statement

Communities frequently face issues like potholes, water leaks, garbage dumping, and damaged infrastructure. Reporting these issues is often slow, unstructured, and lacks proper tracking or accountability.

CivicGuardianAI solves this by enabling citizens to **report, classify, prioritize, and track civic issues using AI-powered automation and real-time dashboards.

💡 Solution Overview

CivicGuardianAI is a full-stack AI-powered civic engagement platform that allows users to:

* Report community issues using text and images
* Automatically classify issues using Google Gemini AI
* Predict severity and assign priority
* Track issue status in real time via dashboard
* Improve transparency between citizens and authorities

The system transforms manual complaint reporting into an intelligent, structured, and automated civic workflow.

✨ Key Features

🧾 Smart Issue Reporting

* Users can submit issues with description + image

🧠 AI-Powered Classification (Gemini)

* Automatically detects:

  * Issue category (road, water, waste, etc.)
  * Severity level (Low / Medium / High)
  * Suggested department

📊 Live Dashboard

* Displays:

  * Total issues
  * Pending / Resolved counts
  * High severity alerts
* Interactive issue cards with status tracking

⚡ Intelligent Prioritization

* Issues sorted based on severity and urgency

📍 Issue Tracking System

* Each issue has a unique detail page
* Status updates in real time

🛠️ Tech Stack

 Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

 Backend

* Node.js
* Express.js
* MongoDB (Atlas)

 AI Integration

* Google Gemini API

☁️ Google Technologies Used

* Google Gemini API (AI issue classification & analysis)

⚙️ Installation & Setup

 1. Clone Repository

```bash
git clone https://github.com/your-username/CivicGuardianAI.git
cd CivicGuardianAI
```

 2. Backend Setup

```bash
cd server
npm install
npm start
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_api_key
```

 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

📊 Future Improvements

* AI-based prediction of issue resolution time
* Map-based issue visualization
* Citizen gamification system (badges & rewards)
* Government dashboard integration

🏆 Impact

CivicGuardianAI improves:

* Transparency in civic reporting
* Faster issue resolution
* Citizen engagement
* Data-driven governance

 👨‍💻 Author

Project: CivicGuardianAI
