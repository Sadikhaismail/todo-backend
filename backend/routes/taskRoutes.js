const express = require("express");
const { createTask,editTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a task - protected route
router.post("/", authMiddleware, createTask);
router.put("/:taskId", authMiddleware, editTask);

module.exports = router;
