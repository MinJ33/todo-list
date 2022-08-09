const inputForm = document.querySelector("#input-form")
// get value from input form
const toDoInput = inputForm.querySelector("input")
const todoLists = document.querySelector("#todo-lists")

function deleteToDo(event){
  const li = event.target.parentElement
  li.remove();
}

function LisitingToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "🔥"
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  todoLists.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault()
  // copying current value of the input to the new variable
  const newTodo = toDoInput.value;
  // empty the input form after submitting To Do
  toDoInput.value = "";
  LisitingToDo(newTodo);
}

inputForm.addEventListener("submit", handleToDoSubmit)