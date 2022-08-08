const inputForm = document.querySelector("#input-form")
// get value from input form
const toDoInput = inputForm.querySelector("input")
const todoLists = document.querySelector("#todo-lists")

function handleToDoSubmit(event){
  event.preventDefault()
  // copying current value of the input to the new variable
  const newTodo = toDoInput.value;
  // empty the input form after submitting To Do
  toDoInput.value = "";
}

inputForm.addEventListener("submit", handleToDoSubmit)