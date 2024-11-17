const taskController = require("./taskController");

describe("validateTask", () => {
  it("should throw an error for missing required fields", () => {
    const invalidTask = {
      title: "Test Task",
      description: "This is a test task",
      status: "pending",
    };

    expect(() => taskController.validateTask(invalidTask)).toThrow(
      "Missing required field: due_date"
    );
  });

  it("should throw an error for invalid status", () => {
    const invalidTask = {
      title: "Test Task",
      description: "This is a test task",
      due_date: "2023-12-31",
      status: "invalid_status",
    };

    expect(() => taskController.validateTask(invalidTask)).toThrow(
      "Invalid status"
    );
  });

  it("should throw an error for invalid due_date", () => {
    const invalidTask = {
      title: "Test Task",
      description: "This is a test task",
      due_date: "invalid_date",
      status: "pending",
    };

    expect(() => taskController.validateTask(invalidTask)).toThrow(
      "Invalid due_date"
    );
  });

  it("should not throw an error for a valid task", () => {
    const validTask = {
      title: "Test Task",
      description: "This is a test task",
      due_date: "2023-12-31",
      status: "pending",
    };

    expect(() => taskController.validateTask(validTask)).not.toThrow();
  });
});
