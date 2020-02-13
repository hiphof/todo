import "./styles.css";

let todolist = [];
let tasks_html = "";
let todoitem = [];
let tasklist = [];
function Task(name) {
  this.name = name;
  //this.name = name;
  this.status = "default";
}

//list.unshift(new Task("Wash my car"));
//list.unshift(new Task("Repair my bike"));
//list.unshift(new Task("Eat apple"));
//list.unshift(new Task("go to dentist"));
//list.unshift(new Task("brush teeth"));

function generateList_new(item) {
  console.log(tasks_html + "helloo");
  tasks_html +=
    '<li class="li-item" id="nr' +
    item.id +
    '"><a title="j' +
    item.id +
    '" class="todo-item" id=j' +
    item.id +
    ' href="#">' +
    item.name +
    "</a>" +
    item.status +
    "</li>";
}

function generateList() {
  let outputmessage = "";
  numberoftasks = todolist.length;
  for (let j = 0; j < numberoftasks; j++) {
    outputmessage +=
      '<li class="li-item" id="nr' +
      j +
      '"><a title="j' +
      j +
      '" class="todo-item" id=j' +
      j +
      ' href="#">' +
      todolist[j] +
      "</a></li>";
  }
  return outputmessage;
}

function buttonfunction() {
  let inputvalue = document.querySelector("#input1").value;
  todoitem = inputvalue;

  addtodo();

  filldiv();
  filldiv_new();
}

function addtodo() {
  let inputvalue = (document.querySelector("#input1").value = "");

  //OLD
  todolist.unshift(todoitem);

  //NEW
  tasklist.unshift(new Task(todoitem));
}

function updateEnd() {
  const todos = document.querySelectorAll(".todo-item");
  if (todos) {
    console.log(todos);

    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", function() {
        completeTodo(i);
      });
      //console.log("i=" + i);
    }
  }
}

function completeTodo() {
  let clickingID = "#nr" + arguments[0];
  //console.log(clickingID);
  let selecteditem = document.querySelector(clickingID);
  selecteditem.style.textDecoration = "line-through";
}

document.querySelector("#button1").innerHTML = `add task`;

document.querySelector("#button1").addEventListener("click", buttonfunction);

let numberoftasks = todolist.length;

function filldiv_new() {
  tasks_html = "";
  tasklist.forEach(generateList_new);
  console.log(tasklist + "doegg");

  document.querySelector("#objectdiv").innerHTML =
    `
<div class="listclass">
  <ul id="list">
    ` +
    tasks_html +
    ` 
  </ul>
</div><strong>` +
    numberoftasks +
    ` tasks in total</strong>
`;
  updateEnd();
}

function filldiv() {
  document.querySelector("#app").innerHTML =
    `
<div class="listclass">
  <ul id="list">
    ` +
    generateList() +
    ` 
  </ul>
</div><strong>` +
    numberoftasks +
    ` tasks in total</strong>
`;
  updateEnd();
}

filldiv();
filldiv_new();

document.querySelector("#notification").innerHTML =
  '<br><br>To enable Dark Mode, <strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">upgrade to the Pro version</a></strong>.';

//todo
// * change some let into const
