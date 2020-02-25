import "./styles.css";

let todo_item = [];
let task_list = [];
let tasks_html = "";

function Task(name) {
  this.id = Date.now();
  this.name = name;
  this.status = "default";
}

let handleInput = value => {
  if (value !== "") {
    todo_item = value;

    addTask();

    createTasks();
  }
};

let enterFunction = event => {
  if (event.key === "Enter") {
    let input_value = event.target.value;
    handleInput(input_value);
  }
};

let buttonFunction = event => {
  console.log(event);
  let input_value = document.querySelector("#input1").value;
  handleInput(input_value);
};

let addTask = () => {
  document.querySelector("#input1").value = "";

  task_list.unshift(new Task(todo_item));
};

let createListItem = item => {
  tasks_html +=
    '<li class="li-task ' +
    item.status +
    '" id="' +
    item.id +
    '">' +
    item.name +
    "</li>";
};

let createTasks = () => {
  tasks_html = "";
  task_list.forEach(createListItem);

  document.querySelector("#list").innerHTML = tasks_html;

  makeListItemsClickable();
};

let openProModal = () => {
  let closeButton = () => {
    document.querySelector("#pro").style.display = "none";
  };

  document.querySelector("#pro").style.display = "block";

  document.querySelector("#close").addEventListener("click", closeButton);
};

let changeTaskStatus = (task_status, obj_index) => {
  if (task_status === "default") {
    task_status = "done";
  } else if (task_status === "done") {
    openProModal();
    task_list[obj_index].status = "default";
  } else {
    console.log("error");
  }
  return task_status;
};

let makeListItemsClickable = () => {
  let todos = document.querySelectorAll(".li-task");

  if (todos) {
    function insideFunction(i) {
      let obj_index = 0;
      obj_index = task_list.findIndex(obj => obj.id.toString() === todos[i].id);
      let task_status = task_list[obj_index].status;

      task_list[obj_index].status = changeTaskStatus(task_status, obj_index);
      createTasks();
    }
    // while todos.lenght
    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", () => insideFunction(i));
    }
  }
};

document.querySelector("#button1").addEventListener("click", buttonFunction);
document.querySelector("#input1").addEventListener("keypress", enterFunction);
createTasks();
