# 🚀 Smart Issue Tracker — Priority-Driven Issue Management System

**React | Node.js | Express | MongoDB | Java | Data Structures**

A full-stack issue tracking system that dynamically ranks issues using a custom priority engine based on severity, frequency, and user impact.  
Designed to simulate real-world production bug triaging and task prioritization workflows used by engineering teams.

---

## ✨ Highlights (Quick Scan)

- ⚡ Priority-based issue ranking using weighted scoring logic  
- 🧠 Custom priority engine using Java heap & comparator concepts  
- 🔄 Automatic re-prioritization when issues are reported multiple times  
- 📊 RESTful API with MongoDB for fast issue retrieval  
- 🎨 Premium React UI with clean issue cards  
- 🔗 End-to-end frontend ↔ backend integration  
- 📈 Strong focus on system design and algorithmic thinking  

---

## 🧠 How It Works (High Level)

User interacts with React UI  
⬇  
Frontend sends REST API request  
⬇  
Node.js + Express backend processes issue data  
⬇  
Priority score is calculated using weighted logic  
⬇  
Issues are stored and sorted in MongoDB by priority score  
⬇  
Ranked issues are rendered back in the UI

---

## ⚙️ Tech Stack

### Frontend
- React.js  
- Axios  
- CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### Priority Engine
- Java  
- Priority Queue  
- Comparator Logic  
- Heap-based ordering  

### Tools
- Git  
- GitHub  
- MongoDB Compass  
- VS Code  

---

## 🧩 Core Feature — Priority Engine

Each issue is assigned a priority score using a weighted formula:
```
priorityScore = (severity × 5) + (frequency × 3) + (userImpact × 4)
```


### Rationale
- Severity reflects technical risk  
- Frequency reflects urgency and recurrence  
- User Impact reflects business importance  

This mirrors real-world engineering decision-making systems.

---

## 🗂️ Project Structure

```
root/
├── frontend/
│ └── React user interface
│
├── backend/
│ ├── models/Issue.js
│ ├── routes/issues.js
│ └── index.js
│
├── priority-engine-java/
│ ├── Issue.java
│ └── Main.java
│
└── README.md
```

---

## ▶️ How to Run Locally

### 1️⃣ Clone the Repository
```
git clone https://github.com/H-1709/issue-tracker.git

cd issue-tracker
```

---

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017/issue-tracker
```

You can verify using **MongoDB Compass**.

---

### 3️⃣ Run Backend (Node.js + Express)

```
cd backend
npm install
npm start
```

Backend will run at:
```
http://localhost:5000
```

---

### 4️⃣ Run Frontend (React)

Open a new terminal:

```
cd frontend
npm install
npm run dev
```

Frontend will run at:
  ```
http://localhost:5173
```

---

### 5️⃣ (Optional) Run Java Priority Engine

```
cd priority-engine-java
javac Main.java
java Main
```
Used to demonstrate heap-based priority calculation logic.

---

## 🔌 API Endpoints

- **POST /issues**  
  Create a new issue and calculate priority score  

- **GET /issues**  
  Fetch all issues sorted by priority score  

- **PATCH /issues/:id/report**  
  Increment issue frequency and re-calculate priority  

- **PATCH /issues/:id/status**  
  Update issue status  

---

## 🧠 Data Model (Issue)

- title: String  
- description: String  
- severity: Number  
- frequency: Number  
- userImpact: Number  
- priorityScore: Number  
- status: String  
- timestamps  

---

## 📌 Resume Highlights

- Built a full-stack issue tracking system using React, Node.js, and MongoDB  
- Designed a custom priority engine using Java heap and comparator logic  
- Implemented dynamic issue ranking based on severity, frequency, and user impact  
- Applied sorted queries and efficient data modeling for fast issue retrieval  
- Simulated real-world bug triaging workflows used in production systems  

---

## 📚 Learning Outcomes

- Deep understanding of priority queues and weighted scoring systems  
- Hands-on experience with REST API design and MongoDB schemas  
- Clear separation of concerns between UI, API, and business logic  
- Improved system design, debugging, and problem-solving skills  

---

## 🚀 Future Enhancements

- Integrate Java Priority Engine directly with Node.js backend  
- Add authentication and role-based access control  
- Implement analytics dashboard for issue trends  
- Containerize and deploy using Docker and cloud services  

