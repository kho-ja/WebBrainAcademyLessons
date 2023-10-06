let button = document.querySelector("button");

function show(event) {
  alert("clicked");
}

button.addEventListener("click", show);
// button.onclick = show;

// document.body.addEventListener("mousedown", show);
// document.body.addEventListener("mouseup", show);
// document.body.addEventListener("mousemove", show);
// document.body.addEventListener("mouseover", show);
// document.body.addEventListener("mouseout", show);
// document.body.addEventListener("mouseenter", show);
