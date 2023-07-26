const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("list");

function addGoal() {
  const enteredValue = inputEl;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listItemEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
