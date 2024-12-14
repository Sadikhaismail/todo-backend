const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, status, assignee, dueDate } = req.body;

  try {
    const task = new Task({
      title,
      description,
      status: status || "Pending",
      assignee,
      dueDate,
      creationDate: new Date(),
    });

    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
