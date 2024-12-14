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


// Edit Task
exports.editTask = async (req, res) => {
  const { taskId } = req.params; // Get task ID from the URL
  const { title, description, status, assignee, dueDate } = req.body; // Get updated fields from request body

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        status,
        assignee,
        dueDate,
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure data validation
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

