import "./styles.css";

var todolist = [];

var todoitem = [];

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  var inputvalue = (document.querySelector("#input1").value = "");
}

/*
const node = document.getElementsByClassName(".inputclass")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      console.log("hoi")  
      // Do work
    }
});
*/

function completeTodo() {
  console.log("clicked ");
  //console.log(i);

  document.querySelector("#app").innerHTML =
    '<br>To mark a task complete, <strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">upgrade to the Pro version</a></strong>.';
}

function buttonfunction() {
  var inputvalue = document.querySelector("#input1").value;
  todoitem = inputvalue;
  addtodo();

  filldiv();
}

function generateList() {
  var outputmessage = "";
  for (var j = 0; j < numberoftasks; j++) {
    outputmessage +=
      '<li><a title="j' +
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

var numberoftasks = todolist.length;

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

function updateEnd() {
  const todos = document.querySelectorAll(".todo-item");
  if (todos) {
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", completeTodo);
      console.log("i=" + i);
    }
  }
}
