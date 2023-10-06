let input = document.querySelector("input");
// attribute
console.log(input.getAttribute("type"));
console.log(input.setAttribute("type", "password"));
console.log(input.hasAttribute("type"));

// Element creation
const div = document.createElement("div");
console.log(div);

// element adding
document.body.prepend(div);
document.body.append(div);
input.before(div);
input.after(div);

// element cloning
let divClone = div.cloneNode();
console.log(divClone, div);

// styling
div.style.width = "200px";
div.style.height = "200px";
div.style.fontFamily = "sans-serif";
// cssText
div.style.cssText += `
  background-color: orange;
  border-radius: 2rem;
  margin: 1rem;
`;

// ClassList
console.log(input.classList);
console.log(div.classList);
console.log(div.classList.add("orange"));
console.log(div.classList.remove("orange"));
console.log(div.classList.toggle("orange"));

// screen

div.innerText = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, accusantium ullam id corrupti quo ut doloribus, beatae quos totam minima in maxime deserunt sunt neque consequuntur, blanditiis iure dicta pariatur mollitia inventore atque. Unde aliquid, rem quasi inventore doloremque numquam aperiam officia ad deleniti asperiores. Dolorum fuga non porro quaerat veritatis placeat a praesentium aspernatur autem ullam aperiam officiis nihil saepe harum, odio dolore consequuntur libero esse nemo hic rem perferendis? Asperiores eveniet a debitis, corrupti enim, rerum dolore rem accusantium ipsum dolor molestias vero porro officiis repudiandae sequi ipsa fugit nihil doloremque labore pariatur amet fuga deleniti. Autem, dolorem.`;
div.style.overflow = "auto";
console.log(div.clientWidth);
console.log(div.clientHeight);
console.log(div.offsetWidth);
console.log(div.offsetHeight);
console.log(div.scrollWidth);
console.log(div.scrollHeight);
