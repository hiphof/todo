import "./styles.css";

let todo_item = [];
let task_list = [];
let tasks_html = "";

function Task(name) {
  this.id = Date.now();
  this.name = name;
  this.status = "default";
}

let createListItemClass = status => {
  let class_name = "li-item";

  if (status === "default") {
    class_name = "li-item-default";
  } else if (status === "done") {
    class_name = "li-item-done";
  } else {
    class_name = "li-item";
  }

  return class_name;
};

let createListItem = item => {
  let class_name = createListItemClass(item.status);

  tasks_html +=
    '<li class="' +
    class_name +
    '" id="' +
    item.id +
    '">' +
    item.name +
    "</li>";
};

let buttonFunction = () => {
  let input_value = document.querySelector("#input1").value;
  if (input_value === "") {
    return;
  } else {
    todo_item = input_value;

    addTask();

    createTasksDiv();
  }
};

let addTask = () => {
  document.querySelector("#input1").value = "";

  task_list.unshift(new Task(todo_item));
};

let openProModal = () => {
  let closeButton = () => {
    document.querySelector("#pro").style.display = "none";
  };

  document.querySelector("#pro").style.display = "block";

  document.querySelector("#close").addEventListener("click", closeButton);
};

let changeTaskStatus = task_status => {
  if (task_status === "default") {
    task_status = "done";
  } else if (task_status === "done") {
    openProModal();
    //task_list[obj_index].status = "default";
  } else {
    console.log("error");
  }
  return task_status;
};

let makeListItemsClickable = () => {
  let todos = document.querySelectorAll(
    ".li-item, .li-item-done, .li-item-default"
  );

  if (todos) {
    // while todos.lenght
    for (let i = 0; i < todos.length; i++) {
      function insideFunction() {
        let obj_index = 0;
        obj_index = task_list.findIndex(obj => obj.id == todos[i].id);

        let task_status = task_list[obj_index].status;

        task_list[obj_index].status = changeTaskStatus(task_status);
        createTasksDiv();
      }

      todos[i].addEventListener("click", insideFunction);
    }
  }
};

let createTasksDiv = () => {
  tasks_html = "";
  task_list.forEach(createListItem);

  document.querySelector("#app").innerHTML =
    `<div class="listclass"><ul id="list">
    ` +
    tasks_html +
    `</ul></div>`;

  makeListItemsClickable();
};

document.querySelector("#button1").innerHTML = `add task`;

document.querySelector("#button1").addEventListener("click", buttonFunction);

createTasksDiv();

document.querySelector("footer").innerHTML =
  'Made with &#9829; in Leipzig by <a href="https://github.com/hiphof">hiphof</a></strong>';
