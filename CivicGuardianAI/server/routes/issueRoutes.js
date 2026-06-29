const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createIssue,
  getIssues,
  getIssue,
  updateStatus,
} = require("../controllers/issueController");

// Upload image + create issue
router.post("/report", upload.single("image"), createIssue);

// Get all issues
router.get("/", getIssues);

// Get single issue
router.get("/:id", getIssue);

// Update status
router.put("/:id/status", updateStatus);

module.exports = router;