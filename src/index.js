import "./styles.css";

var todolist = [];

var todoitem = [];

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  var inputvalue = (document.getElementById("input1").value = "");
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
  document.getElementById("app").innerHTML =
    '<br><strong><a href="https://bunq.me/open-request/t/472e6a4e-4c53-4522-aef2-ea38daa1ebaf">Upgrade to Pro version</a></strong> to complete a task.';
}

function buttonfunction() {
  var inputvalue = document.getElementById("input1").value;
  todoitem = inputvalue;
  addtodo();

  filldiv();
}

function generateList() {
  var outputmessage = "";
  for (var i = 0; i < numberoftasks; i++) {
    outputmessage += '<li><a href="#">' + todolist[i] + "</a></li>";
  }
  return outputmessage;
}

document.getElementById("button1").innerHTML = `add task`;

document.getElementById("button1").addEventListener("click", buttonfunction);

var numberoftasks = todolist.length;

function filldiv() {
  document.getElementById("app").innerHTML =
    `
<div>
  <ul>
    ` +
    generateList() +
    ` 
  </ul>
</div>
`;
}
filldiv();

document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "a") {
    // do your action on your 'li' or whatever it is you're listening for
    completeTodo();
  }
});
