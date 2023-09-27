// Proto, Prototype
// let part2 = {
//   age: 30,
// };

// let part1 = {
//   name: "john",
//   __proto__: part2,
// };

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

Object.prototype.sayHi = function () {
  return `Hello from ${this.toString()}`;
};
