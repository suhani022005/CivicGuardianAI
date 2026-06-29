const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const issueRoutes = require("./routes/issueRoutes");
const geminiRoutes = require("./routes/geminiRoutes");

// Connect Database
connectDB();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 CivicGuardian AI Backend Running");
});

app.use("/api/issues", issueRoutes);
app.use("/api/gemini", geminiRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});