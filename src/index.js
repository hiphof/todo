import "./styles.css";

let todo_item = [];
let task_list = [];
let tasks_html = "";

function Task(name) {
  this.id = Date.now();
  this.name = name;
  this.status = "default";
}

function generateList(item) {
  let class_name = "li-item";

  if (item.status == "default") {
    class_name = "li-item-default";
  } else if (item.status == "done") {
    class_name = "li-item-done";
  } else {
    class_name = "li-item";
  }

  tasks_html +=
    '<li class="' +
    class_name +
    '" id="' +
    item.id +
    '">' +
    item.name +
    "</li>";
}

function buttonFunction() {
  let input_value = document.querySelector("#input1").value;
  todo_item = input_value;

  addTask();

  fillDiv();
}

function addTask() {
  document.querySelector("#input1").value = "";

  task_list.unshift(new Task(todo_item));
}

function updateEnd() {
  const todos = document.querySelectorAll(
    ".li-item, .li-item-done, .li-item-default"
  );

  if (todos) {
    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", function() {
        let obj_index = 0;
        obj_index = task_list.findIndex(obj => obj.id == todos[i].id);

        let task_status = task_list[obj_index].status;

        if (task_status == "default") {
          task_list[obj_index].status = "done";
        }
        if (task_status == "done") {
          task_list[obj_index].status = "default";
        }

        fillDiv();
      });
    }
  }
}

document.querySelector("#button1").innerHTML = `add task`;

document.querySelector("#button1").addEventListener("click", buttonFunction);

function fillDiv() {
  tasks_html = "";
  task_list.forEach(generateList);

  document.querySelector("#app").innerHTML =
    `
<div class="listclass">
  <ul id="list">
    ` +
    tasks_html +
    ` 
  </ul>
</div>
`;
  updateEnd();
}

fillDiv();

document.querySelector("#notification").innerHTML =
  '<br><br>Like the app? <strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">Donate me.</a></strong>.';

document.querySelector("#footer").innerHTML =
  'Made with &#9829; in Leipzig by <a href="https://github.com/hiphof">hiphof</a></strong>';
