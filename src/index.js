import { TodoManager } from "./TodoManager.js"; // Файла с имплементацията на TodoManager

// Създаване на нова инстанция на TodoManager
const manager = new TodoManager();

// Добавяне на нови задачи
manager.addTodo("Buy groceries");
manager.addTodo("Read a book");
manager.addTodo("Go for a run");

// Извеждане на списъка с всички задачи
console.log("All todos:");
console.log(manager.getTodos());

// Отбелязване на първата задача като приключена
const todos = manager.getTodos();
manager.markAsDone(todos[0].id);

// Редактиране на втората задача
manager.editTodo(todos[1].id, "Read two books");

// Извеждане на списъка със завършените задачи
console.log("Completed todos:");
console.log(manager.getCompletedTodos());

// Изтриване на третата задача
manager.deleteTodo(todos[2].id);

// Извеждане на обновения списък със всички задачи
console.log("Remaining todos:");
console.log(manager.getTodos());
