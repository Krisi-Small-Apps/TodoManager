import { v4 as uuid } from "uuid";

export class TodoManager {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    const newTodo = {
      id: uuid(),
      task: task,
      done: false,
    }
    this.todos.push(newTodo);
  }

  getTodos() {
    return this.todos;
  }

  markAsDone(id) {
    const todo = this.todos.find(t => t.id === id);
    todo.done = true;
  }

  getCompletedTodos() {
    return this.todos.filter(t => t.done === true);
  }

  editTodo(id, task) {
    const todo = this.todos.find(t => t.id === id);
    if (typeof todo === "undefined") {
      throw new Error("Invalid todo id");
    }
    todo.task = task;
  }

  deleteTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error("Invalid todo id");
    }
    this.todos.splice(index, 1);
  }
}
