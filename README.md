# issue-tracker

project:
  name: Smart Issue Tracker with Priority Engine
  description: >
    A full-stack issue tracking system that dynamically prioritizes issues
    based on severity, frequency, and user impact.
    Built using the MERN stack with a Java-based priority engine
    to demonstrate algorithmic and system-level thinking.

features:
  - Dynamic priority calculation using weighted scoring
  - Automatic sorting of issues by priority score
  - Schema-level validation using Mongoose
  - Clean, card-based React UI
  - Independent Java implementation of priority logic

priority_engine:
  formula: "priorityScore = severity * 3 + frequency * 2 + userImpact"
  implemented_in:
    - Node.js (real-time backend calculation)
    - Java (algorithm validation)

tech_stack:
  frontend: React
  backend: Node.js, Express
  database: MongoDB with Mongoose
  logic_engine: Java
  tools:
    - Postman
    - MongoDB Compass
    - VS Code

project_structure:
  root:
    - frontend:
        description: React user interface
    - backend:
        description: Node.js and Express API
        files:
          - models/Issue.js
          - index.js
    - priority-engine-java:
        description: Java-based priority calculation
        files:
          - Issue.java
          - Main.java
    - README.yaml

setup:
  clone_repository:
    command: "git clone https://github.com/H-1709/issue-tracker.git"
  backend:
    steps:
      - cd backend
      - npm install
      - node index.js
    runs_on: "http://localhost:5000"
  frontend:
    steps:
      - cd frontend
      - npm install
      - npm start
    runs_on: "http://localhost:3000"
  java_engine:
    steps:
      - cd priority-engine-java
      - javac *.java
      - java Main

api_endpoints:
  get_issues:
    method: GET
    endpoint: /issues
    description: Returns all issues sorted by priorityScore (descending)
  create_issue:
    method: POST
    endpoint: /issues
    body_example:
      title: Payment crash
      description: Crash on payment screen
      severity: 5
      frequency: 10
      userImpact: 9
      status: OPEN

development_notes:
  - React StrictMode disabled to avoid duplicate API calls in development
  - Backend prevents duplicate issue creation
  - Older MongoDB records migrated to include priorityScore
  - MongoDB schema enforces required fields

future_improvements:
  - Issue status workflow (OPEN, IN_PROGRESS, CLOSED)
  - Filtering and sorting controls
  - User authentication
  - Deployment on cloud platforms

author:
  name: Rajyaguru Hir
  github: https://github.com/H-1709

license:
  type: Educational
  note: Project created for learning and demonstration purposes
