const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },

    description: { 
      type: String 
    },

    severity: { 
      type: Number, 
      required: true 
    },

    frequency: { 
      type: Number, 
      required: true 
    },

    userImpact: { 
      type: Number, 
      required: true 
    },

    priorityScore: { 
      type: Number, 
      default: 0 
    },

    status: { 
      type: String, 
      required: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", IssueSchema);
