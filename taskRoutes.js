const express = require("express");
const taskController = require("./taskController");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/complete", taskController.completeTask);

module.exports = router;
