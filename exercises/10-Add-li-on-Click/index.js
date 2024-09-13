let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let list = document.getElementById("myList");
	let newElement = document.createElement("li");
	newElement.innerHTML = "Forth Element";
	list.appendChild(newElement);
});
