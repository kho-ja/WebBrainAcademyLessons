// Advanced
// let user = {
//   name: "John",
//   age: 25,
//   job: "FullStack Developer",
// };

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "name", {
//   value: "Aziz",
//   configurable: false,
//   writable: false,
//   enumerable: false,
// });

// delete user.name;

// user.name = "John";

// for (const key in user) {
//   console.log(key);
// }

// console.log(user);

// Object.preventExtensions(user);
// user.year = 2000;

// console.log(user);

//! getter, setter

// let user = {
//   name: "John",
//   _year: 1994,
//   job: "FullStack Developer",
//   get age() {
//     return new Date().getFullYear() - this.year;
//   },
//   set year(y) {
//     this._year = y;
//   },
// };

// user.year = 2000;

// console.log(user);
