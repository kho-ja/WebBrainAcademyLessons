let box = document.querySelector("#box");

box.addEventListener("scroll", (e) => {
  // console.log(box.scrollBy(0, 10));
  // console.log(box.scrollTo(0, 10));
  console.log(box.scrollTop);
});
