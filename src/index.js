import "./styles.css";

let todolist = [];

let todoitem = [];
let list = [];
let newtask = [];
function Task(name) {
  //  this.name = name + "(manually created)";
  this.name = name;
  this.status = "default";
}

let task1 = new Task("Wash my car");
let task2 = new Task("Repair my bike");
let task3 = new Task("Eat apple");
list.unshift(new Task("go to dentist (todo in object instead of array"));
list.unshift(new Task("brush teeth"));

createListInConsoleLog();

function createListInConsoleLog() {
  list.forEach(item => console.log(item));
}

//createList();
function createList() {
  let itemhtml = "";
  list.forEach(item => (itemhtml += list(item).status));
  console.log(itemhtml);
  //itemhtml += "<li>" + list[item].name + "</li>";
}

document.querySelector("#objectdiv").innerHTML =
  "<li>" + list[1].name + "</li>";

console.log(task2.status);

function buttonfunction() {
  let inputvalue = document.querySelector("#input1").value;
  todoitem = inputvalue;
  let newtask = { id: 5, name: inputvalue, status: "default" };
  console.log(newtask);
  addtodo();

  filldiv();
}

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  let inputvalue = (document.querySelector("#input1").value = "");
  //tasks.unshift(newtask);
  //console.log(tasks);
}

/*
const node = document.querySelector(".inputclass")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      console.log("hoi")  
      // Do work
    }
});
*/

function updateEnd() {
  const todos = document.querySelectorAll(".todo-item");
  if (todos) {
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", function() {
        completeTodo(i);
      });
      console.log("i=" + i);
    }
  }
}

function completeTodo() {
  let clickingID = "#nr" + arguments[0];
  //console.log(clickingID);
  let selecteditem = document.querySelector(clickingID);
  selecteditem.style.textDecoration = "line-through";
}

function generateList() {
  let outputmessage = "";
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

document.querySelector("#button1").innerHTML = `add task`;

document.querySelector("#button1").addEventListener("click", buttonfunction);

let numberoftasks = todolist.length;

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

document.querySelector("#notification").innerHTML =
  '<br><br>To enable Dark Mode, <strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">upgrade to the Pro version</a></strong>.';

//todo
// * change some let into const
