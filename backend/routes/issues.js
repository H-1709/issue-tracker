const express = require("express");
const Issue = require("../models/Issue");
const calculatePriority = require("../utils/priorityEngine");

const router = express.Router();

/**
 * CREATE ISSUE
 */
router.post("/", async (req, res) => {
  try {
    const issueData = req.body;

    issueData.frequency = 1;
    issueData.priorityScore = calculatePriority(issueData);

    const issue = await Issue.create(issueData);
    res.status(201).json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * GET ALL ISSUES (SORTED BY PRIORITY)
 */
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find().sort({ priorityScore: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * REPORT ISSUE AGAIN (frequency++)
 */
router.patch("/:id/report", async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ error: "Issue not found" });

    issue.frequency += 1;
    issue.priorityScore = calculatePriority(issue);

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * UPDATE ISSUE STATUS
 */
router.patch("/:id/status", async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ error: "Issue not found" });

    issue.status = req.body.status;
    await issue.save();

    res.json(issue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

app.delete("/cleanup", async (req, res) => {
  const Issue = require("./models/Issue");
  await Issue.deleteMany({});
  res.send("All issues deleted");
});
