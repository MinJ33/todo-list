const inputForm = document.querySelector("#input-form")
// get value from input form
const toDoInput = inputForm.querySelector("input")
const todoLists = document.querySelector("#todo-lists")

function deleteToDo(event){
  const li = event.target.parentElement
  li.remove();
}

// newTodo가 생길때마다 그 text를 array에 push
let toDos = [];

// 이 function의 역할은 toDos array를 localStorage에 집어넣는것
function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos))
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
  // newTodo가 생길때마다 그 text를 array에 push
  toDos.push(newTodo);
  LisitingToDo(newTodo);
  saveToDos();
}

inputForm.addEventListener("submit", handleToDoSubmit)

// String이 된 ToDos 배열을 savedTodos에 저장 
const savedToDos = localStorage.getItem("toDos")
// 만약 ToDos가 localStorage에 존재한다면 
// 그 ToDos들을 JSON.parse(savedTodos)를 통해 객체화시켜서 가져오기 
if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
    
  // parsedToDos는 array여서 forEach를 사용할 수 있음 
  // forEach 는 array의 각각의 item 에 대해 function을 실행해줌
  toDos = parsedToDos;
  parsedToDos.forEach(LisitingToDo);
    
}

