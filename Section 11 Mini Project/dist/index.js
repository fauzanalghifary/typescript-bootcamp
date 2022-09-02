"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// (<HTMLInputElement>input).value
// btn?.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
// let mystery: unknown = "Hello World";
// const numChars = (mystery as string).length;
// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
// }
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
});
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
