const { v4: uuidv4 } = require("uuid");

class TaskStore {
  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(taskData) {
    const task = {
      id: uuidv4(),
      ...taskData,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id, taskData) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...taskData,
      updated_at: new Date(),
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return false;

    this.tasks.splice(taskIndex, 1);
    return true;
  }

  completeTask(id) {
    const task = this.getTaskById(id);
    if (!task) return null;

    task.status = "completed";
    task.updated_at = new Date();
    return task;
  }
}

module.exports = new TaskStore();
