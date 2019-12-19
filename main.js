const button = document.getElementById("addButton");
const input = document.getElementById("input");
const ul = document.querySelector("ul");
const items = document.querySelector("li");
const deleteButton = document.createElement("button");

//Foundational function to create new list item
function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

    //Snippet to create "delete button"
  // deleteButton.appendChild(document.createTextNode("Finished!"));
  // li.appendChild(deleteButton);
  // deleteButton.onclick = removeParent;
};

//Add item after mouse click
function addListAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }
};

//Add item after enter button
function addListAfterEnter(enter) {
  if (input.value.length > 0 && enter.keyCode === 13) {
    createListElement();
  }
};

//Toggle class=complete, which puts line through text
ul.onclick=function(event){
	let complete=event.target;
	complete.classList.toggle("complete");
};

//Listens for click and adds item
button.addEventListener("click", addListAfterClick);

//Listens for enter-keystrike and adds item
input.addEventListener("keyup", addListAfterEnter);
