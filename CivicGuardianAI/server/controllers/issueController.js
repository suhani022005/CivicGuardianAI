const analyzeImage = require("../gemini/geminiService");
const fs = require("fs");

const Issue = require("../models/Issue");

const createIssue = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const imagePath = req.file.path;

    const aiResult = await analyzeImage(imagePath);

    let analysis;

    try {
      analysis = JSON.parse(aiResult);
    } catch {

      const cleaned = aiResult
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      analysis = JSON.parse(cleaned);
    }

    const issue = await Issue.create({
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,

      category: analysis.category,

      severity: analysis.severity,

      safetyRisk: analysis.safetyRisk,

      description: analysis.description,

      department: analysis.department,

      impactPrediction: analysis.impactPrediction,

      priority: analysis.priority,

      location: req.body.location,

      status: "Pending",
    });

    res.status(201).json({
      success: true,
      issue,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// Get All Issues
const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: issues.length,
      issues,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Issue
const getIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: "Issue Not Found",
      });
    }

    res.status(200).json({
      success: true,
      issue,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Issue Status
const updateStatus = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: "Issue Not Found",
      });
    }

    issue.status = req.body.status;

    await issue.save();

    res.status(200).json({
      success: true,
      message: "Status Updated Successfully",
      issue,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createIssue,
  getIssues,
  getIssue,
  updateStatus,
};