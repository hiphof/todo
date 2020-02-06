import "./styles.css";

var todolist = [];

var todoitem = [];

function addtodo() {
  todolist.unshift(todoitem);
  numberoftasks = todolist.length;
  var inputvalue = (document.getElementById("input1").value = "");
}

function buttonfunction() {
  var inputvalue = document.getElementById("input1").value;
  todoitem = inputvalue;
  addtodo();

  filldiv();
}

function generate() {
  var outputmessage = "";
  for (var i = 0; i < numberoftasks; i++) {
    outputmessage += "<li>" + todolist[i] + "</li>";
  }
  return outputmessage;
}

document.getElementById("button1").innerHTML = `add`;

document.getElementById("button1").addEventListener("click", buttonfunction);

var numberoftasks = todolist.length;

function filldiv() {
  document.getElementById("app").innerHTML =
    `
<div>
  <ul>
    ` +
    generate() +
    ` 
  </ul>
</div>
`;
}
filldiv();
