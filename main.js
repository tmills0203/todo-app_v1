"use strict";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todoUL = document.querySelector("#todos");

const todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos);

// localstorage
if (todos) {
  for (let i = 0; i < todos.length; i++) {
    addTodo(todos[i]);
  }
  // todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

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
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      updateLS();
    });

    // remove li by clicking on the right mouse button
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      li.remove();
      updateLS();
    });

    input.value = "";

    updateLS();
  }
}

// put todos in local storage
function updateLS() {
  const li = document.querySelectorAll("li");
  const todos = [];

  li.forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
