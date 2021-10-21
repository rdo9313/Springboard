const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#todo");
let todoElements = [];

window.onload = function() {
  todoElements = JSON.parse(localStorage.getItem("todo-elements"));
  displayElements();
}

function displayElements() {
  todoList.innerHTML = "";
  const elements = JSON.parse(localStorage.getItem("todo-elements"));

  for (let el of elements) {
    const newElement = document.createElement("li");
    const finishBtn = document.createElement("input");
    const removeBtn = document.createElement("i");

    finishBtn.setAttribute("type", "checkbox");
    finishBtn.setAttribute("class", "checked");
    removeBtn.setAttribute("class", "fas fa-trash");

    newElement.innerText = el;
    newElement.appendChild(finishBtn);
    newElement.appendChild(removeBtn);
    console.log(newElement);
    todoList.appendChild(newElement);
  }
}

function updateElements() {
  if (JSON.stringify(todoElements) !== localStorage.getItem("todo-elements")) {
    localStorage.setItem("todo-elements", JSON.stringify(todoElements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(todoElements));
  }
}

todoList.addEventListener("click", e => {
  if (e.target.tagName === "INPUT") {
    e.target.parentElement.classList.toggle("linethrough");
  }

  if (e.target.tagName === "I") {
    todoElements = todoElements.filter(el => el !== e.target.parentElement.innerText);
    e.target.parentElement.remove();
    updateElements();
  }
})

form.addEventListener("submit", e => {
  e.preventDefault();
  todoElements.push(input.value);
  input.value = "";
  updateElements();
  displayElements();
})