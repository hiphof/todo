import "./styles.css";

let todolist = [];

let todoitem = [];

function buttonfunction() {
  let inputvalue = document.querySelector("#input1").value;
  todoitem = inputvalue;

  addtodo();

  filldiv();
}

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  let inputvalue = (document.querySelector("#input1").value = "");
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
  document.querySelector(clickingID).innerHTML =
    'To mark a task complete, <strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">upgrade to the Pro version</a></strong>.';
  //"<li>hier staat nog iets" + todolist[i] + "</li>";
}

function generateList() {
  let outputmessage = "";
  for (let j = 0; j < numberoftasks; j++) {
    outputmessage +=
      '<li id="nr' +
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

//todo
// * change some let into const
