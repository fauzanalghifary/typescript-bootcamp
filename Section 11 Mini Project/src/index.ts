interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
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

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();

  input.value = "";
});

function createTodo(todo: Todo) {
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
  list?.append(newLi);
}
