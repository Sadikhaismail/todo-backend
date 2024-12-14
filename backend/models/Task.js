const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "All"], 
    default: "Pending",
  },
  assignee: {
    type: String, 
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);