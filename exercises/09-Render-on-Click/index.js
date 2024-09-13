let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newElement = document.createElement("div");
	newElement.style.backgroundColor = "yellow";
	newElement.innerHTML = "Hello World";
	document.body.appendChild(newElement);
});
