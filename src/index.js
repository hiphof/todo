import "./styles.css";

var todolist = [];

var todoitem = [];

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  var inputvalue = (document.getElementById("input1").value = "");
}

function completeTodo() {
  document.getElementById("app").innerHTML =
    "<strong>Upgrade to Pro version</strong> to complete a task.";
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
