const express = require("express");
const { createTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a task - protected route
router.post("/", authMiddleware, createTask);

module.exports = router;
