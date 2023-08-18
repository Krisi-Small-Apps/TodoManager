const assert = require("assert");
const { TodoManager } = require("../src/TodoManager");

describe("TodoManager", () => {
  it("should add a new todo", () => {
    const manager = new TodoManager();
    manager.addTodo("Buy groceries");
    assert.strictEqual(manager.getTodos().length, 1);
  });

  it("should mark a todo as done", () => {
    const manager = new TodoManager();
    manager.addTodo("Read a book");
    const todos = manager.getTodos();
    manager.markAsDone(todos[0].id);
    assert.strictEqual(todos[0].done, true);
  });

  it("should edit a todo", () => {
    const manager = new TodoManager();
    manager.addTodo("Go for a run");
    const todos = manager.getTodos();
    manager.editTodo(todos[0].id, "Go for a long run");
    assert.strictEqual(todos[0].task, "Go for a long run");
  });

  it("should delete a todo", () => {
    const manager = new TodoManager();
    manager.addTodo("Clean the garage");
    let todos = manager.getTodos();
    manager.deleteTodo(todos[0].id);
    todos = manager.getTodos();
    assert.strictEqual(todos.length, 0);
  });

  it("should not mark a non-existent todo as done", () => {
    const manager = new TodoManager();
    assert.throws(() => {
      manager.markAsDone("nonExistentId");
    }, Error);
  });

  it("should not edit a non-existent todo", () => {
    const manager = new TodoManager();
    assert.throws(() => {
      manager.editTodo("nonExistentId", "New task description");
    }, Error);
  });

  it("should not delete a non-existent todo", () => {
    const manager = new TodoManager();
    assert.throws(() => {
      manager.deleteTodo("nonExistentId");
    }, Error);
  });

  it("should return a list of completed todos", () => {
    const manager = new TodoManager();
    manager.addTodo("Task 1");
    manager.addTodo("Task 2");
    const todos = manager.getTodos();
    manager.markAsDone(todos[0].id);
    const completedTodos = manager.getCompletedTodos();
    assert.strictEqual(completedTodos.length, 1);
    assert.strictEqual(completedTodos[0].task, "Task 1");
  });
});
