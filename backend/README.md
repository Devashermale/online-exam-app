# online-exam-app

🎓 ExamPulse — MERN Stack Online Examination System
ExamPulse is a full-stack online examination platform built on the MERN (MongoDB, Express.js, React, Node.js) architecture. It provides an intuitive interface for students to take timed exams and offers powerful administrative controls for educators to build tests, manage question banks, and auto-evaluate results in real time.

📑 Table of Contents
Features

Tech Stack

Project Architecture & Directory Structure

Quick Start Guide

Prerequisites

Installation & Setup

Environment Variables

Database Models (Mongoose Schemas)

API Endpoints

Scripts

License
✨ Features👨‍🎓 Candidate / Student FeaturesAuthentication: Secure signup & login with JWT.Exam Dashboard: View available tests, duration, and instructions.Interactive Test Runner: Floating timer, auto-save answer states, and instant submission.Instant Score Generation: View marks and result summary upon submission.👩‍🏫 Admin / Educator FeaturesQuestion Bank Management: Add, update, and remove questions with multiple choices.Exam Configuration: Set pass marks, time limits, and assign questions to tests.User Management & Analytics: View student scores and track performance history.🛠️ Tech StackFrontend: React, Vite, Tailwind CSS / CSS Modules, Axios / Fetch APIBackend: Node.js, Express.jsDatabase: MongoDB & MongooseAuthentication: JSON Web Tokens (JWT) & Bcrypt.js🚀 Quick Start & SetupPrerequisitesNode.js >= 18.x installedMongoDB instance running locally (mongodb://localhost:27017) or a MongoDB Atlas connection string.Setup Instructions1. Backend SetupBash# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start Vite development server
npm run dev
The application will now be running at:Frontend Application: http://localhost:5173Backend API Base URL: http://localhost:5000📡 API Architecture OverviewModuleTypical EndpointDescriptionAccessAuthPOST /api/auth/registerRegister new userPublicAuthPOST /api/auth/loginAuthenticate user & get tokenPublicExamsGET /api/examsFetch list of active examsStudent / AdminExamsPOST /api/examsCreate a new testAdmin OnlyQuestionsPOST /api/questionsAdd question to bankAdmin OnlyResultsPOST /api/results/submitSubmit test & auto-gradeStudent📄 LicenseThis project is licensed under the MIT License."""with open("README.md", "w", encoding="utf-8") as f:f.write(readme_content)print("FILE_CREATED: README.md")
```text?code_stdout&code_event_index=1


## 📁 Directory Structure

```text
.
├── backend/
│   ├── Route/            # API Route definitions
│   ├── controller/       # Request handlers & business logic
│   ├── middleware/       # Auth guards, role checks, error handlers
│   ├── model/            # Mongoose Schemas (User, Exam, Question, Result)
│   ├── index.js          # Backend server entry point
│   ├── package.json      # Node.js dependencies & scripts
│   └── .gitignore
│
└── frontend/
    ├── public/           # Static assets
    ├── src/              # React application source (Pages, Components, Context)
    ├── eslint.config.js  # Linter configuration
    ├── index.html        # Vite entry HTML
    ├── vite.config.js    # Vite configuration file
    ├── package.json      # Frontend dependencies & scripts
    └── .gitignore
✨ Features👨‍🎓 Candidate / Student FeaturesAuthentication: Secure signup & login with JWT.Exam Dashboard: View available tests, duration, and instructions.Interactive Test Runner: Floating timer, auto-save answer states, and instant submission.Instant Score Generation: View marks and result summary upon submission.👩‍🏫 Admin / Educator FeaturesQuestion Bank Management: Add, update, and remove questions with multiple choices.Exam Configuration: Set pass marks, time limits, and assign questions to tests.User Management & Analytics: View student scores and track performance history.🛠️ Tech StackFrontend: React, Vite, Tailwind CSS / CSS Modules, AxiosBackend: Node.js, Express.jsDatabase: MongoDB & MongooseAuthentication: JSON Web Tokens (JWT) & Bcrypt.js🚀 Quick Start & SetupPrerequisitesNode.js >= 18.x installedMongoDB instance running locally (mongodb://localhost:27017) or a MongoDB Atlas connection string.Setup Instructions1. Backend SetupBash# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
touch .env
Add the following environment variables to backend/.env:Code snippetPORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/online_exam_db
JWT_SECRET=your_super_secret_jwt_key
Start the backend server:Bashnpm start
# or if you use nodemon:
npm run dev
2. Frontend SetupOpen a new terminal tab/window:Bash# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
The application will now be running at:Frontend Application: http://localhost:5173Backend API Base URL: http://localhost:5000📡 API Architecture OverviewModuleTypical EndpointDescriptionAccessAuthPOST /api/auth/registerRegister new userPublicAuthPOST /api/auth/loginAuthenticate user & get tokenPublicExamsGET /api/examsFetch list of active examsStudent / AdminExamsPOST /api/examsCreate a new testAdmin OnlyQuestionsPOST /api/questionsAdd question to bankAdmin OnlyResultsPOST /api/results/submitSubmit test & auto-gradeStudent📄 LicenseThis project is licensed under the MIT License.
