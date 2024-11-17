const taskStore = require("./taskStore");

function validateTask(task) {
  const requiredFields = ["title", "description", "due_date", "status"];
  const validStatuses = ["pending", "in_progress", "completed"];

  for (const field of requiredFields) {
    if (!task[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (!validStatuses.includes(task.status)) {
    throw new Error("Invalid status");
  }

  if (isNaN(Date.parse(task.due_date))) {
    throw new Error("Invalid due_date");
  }
}

exports.getAllTasks = (req, res) => {
  const tasks = taskStore.getAllTasks();
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = taskStore.getTaskById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

exports.createTask = (req, res) => {
  try {
    validateTask(req.body);
    const task = taskStore.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = (req, res) => {
  try {
    validateTask(req.body);
    const updatedTask = taskStore.updateTask(req.params.id, req.body);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = (req, res) => {
  const deleted = taskStore.deleteTask(req.params.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

exports.completeTask = (req, res) => {
  const completedTask = taskStore.completeTask(req.params.id);
  if (completedTask) {
    res.json(completedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};
