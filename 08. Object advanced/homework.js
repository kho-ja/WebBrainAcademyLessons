// * screenshot
// #1
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref);
// #2
let calulator = {
  read() {
    this.a = prompt("a?");
    this.b = prompt("b?");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
