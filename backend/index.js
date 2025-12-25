const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/issuetracker");

const Issue = require("./models/Issue");

app.get("/issues", async (req, res) => {
  try {
    const issues = await Issue.find().sort({ priorityScore: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/issues", async (req, res) => {
  try {
    const { severity, frequency, userImpact } = req.body;

    const priorityScore =
      severity * 3 +
      frequency * 2 +
      userImpact;

    const issue = new Issue({
      ...req.body,
      priorityScore
    });

    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
