"use strict";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todoUL = document.querySelector("#todos");
console.log(todoUL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// - Add new todos to the list
// - Mark todos as complete
//   b. add animation on the checkbox
// - Delete todos from the list
// - Filter by all/active/complete todos
// - Clear all completed todos
// - Toggle light and dark mode

// add todo
function addTodo(todo) {
  let todoInput = input.value;

  if (todo) {
    todoInput = todo.text;
  }

  // display todo
  //create li for each todo input

  if (todoInput) {
    const li = document.createElement("li");
    if (todo && todo.completed) {
      li.classList.add("completed");
    }

    li.innerText = todoInput;
    todoUL.appendChild(li);

    // adds or remove completed to todo
    li.addEventListener("click", () => li.classList.toggle("completed"));

    input.value = "";
  }
  console.log(todoInput);
}
