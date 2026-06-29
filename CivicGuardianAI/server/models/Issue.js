const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    safetyRisk: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    impactPrediction: {
      type: String,
      default: "",
    },

    priority: {
      type: Number,
      default: 50,
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Issue", issueSchema);