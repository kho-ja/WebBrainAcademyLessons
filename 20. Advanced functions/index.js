function sayHi() {
  console.log(this);
}
// sayHi();

// let user = {
//   name: "Aziz",
//   age: 30,
//   sayHi() {
//     console.log(`${this.name}`);
//   },
// sayHello: () => {
//   console.log(this);
// },
// };

// user.sayHi();

// user.sayHello();
// let users = [
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique5", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
//   { name: "unique", age: 30 },
// ];

// ! bind
// let sayHiFrom5 = sayHi.bind(users[5]);
// ! call
// sayHi.call(users[5], 1, 2, 2);
// ! apply
// sayHi.apply(users[5], [1, 2, 3]);
