const addButton = document.getElementById("addbtn");
const inputBox = document.getElementById("inputbox");
const container = document.getElementById("taskcontainer");
const taskArr=[];

// function consoleArr(){
//   console.log(taskArr);
// }

function setTask(){
  localStorage.setItem("tasks",JSON.stringify(taskArr));
}

function getTask(){
  let tasks=localStorage.getItem("tasks");
  if(!tasks){
    return;
  }
  tasks=JSON.parse(tasks);
  // console.log(tasks);
  for(index in tasks)
  {
    createTask(tasks[index]);
  }
}
getTask();

function createTask(userInput){
  const outBtn = document.createElement("div");
  outBtn.innerText = userInput;
  outBtn.setAttribute("class", "mybtn");
  outBtn.addEventListener("click", handlesubmit);
  outBtn.addEventListener("dblclick",handleRemove);
  container.append(outBtn);
  
}

addButton.addEventListener("click", () => {
  const userInput = inputBox.value;
  const length = userInput.length;
  if (length === 0) {
    return alert("please Enter valid");
  };
  taskArr.push(userInput); 
  setTask();
  createTask(userInput);
  inputBox.value="";
});

function handlesubmit() {
  this.classList.toggle("completed");
}
 
function handleRemove() {
 this.remove();
}
