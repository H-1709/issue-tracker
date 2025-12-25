const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/issue-tracker")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// import routes
const issueRoutes = require("./routes/issues");

// use routes
app.use("/issues", issueRoutes);

// root test route
app.get("/", (req, res) => {
  res.send("Smart Issue Tracker Backend Running");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
