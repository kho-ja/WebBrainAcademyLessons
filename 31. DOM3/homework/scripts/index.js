let dropdown = document.querySelector(".dropdown");
function open() {
  dropdown.classList.toggle("open");
}
dropdown.firstElementChild.addEventListener("click", open);

let secitonContent = document.querySelector("section.content");

displayContent();

function removeContent(id) {
  content = content.filter((v) => v.id !== id);
  displayContent();
}

function displayContent() {
  secitonContent.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    let wrapper = document.createElement("div");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    wrapper.classList.add("section");
    btn.innerText = "x";
    btn.onclick = () => removeContent(content[i].id);
    p.innerText = content[i].text;
    wrapper.append(btn);
    wrapper.append(p);
    secitonContent.append(wrapper);
  }
}

let carusel = document.querySelector(".carusel");
let imagesDiv = document.querySelector(".images");
let active = 2;
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let radioBtns = document.querySelector(".radiobtns");
displayImages();

function displayImages() {
  imagesDiv.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i].src;
    if (images[i].id === (active ? active : 0)) img.classList.add("active");
    imagesDiv.prepend(img);
  }
  displayRadioBtns();
}

function displayRadioBtns() {
  radioBtns.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carusel";
    radio.onclick = () => {
      active = images[i].id;
      displayImages();
    };
    if (images[i].id === (active ? active : 0)) radio.checked = true;
    radioBtns.append(radio);
  }
}

prev.onclick = () => {
  active = active <= 1 ? images.at(-1).id : active - 1;
  displayImages();
};
next.onclick = () => {
  active = active > images.length - 1 ? images.at(0).id : active + 1;
  displayImages();
};

let field = document.querySelector("#field");
let football = document.querySelector("#football");

field.onclick = (e) => {
  football.style.top = `${(e.offsetY / field.height) * 100}%`;
  football.style.left = `${(e.offsetX / field.width) * 100}%`;
};
