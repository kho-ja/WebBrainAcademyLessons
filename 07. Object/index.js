// //* Object
// let obj = {
//   name: "JS",
//   version: "ES6",
//   year: 2015,
// };

// let obj1 = new Object({
//   name: "JS",
//   version: "ES6",
//   year: 2015,
// });

// console.log(obj === obj1);

// let obj2 = structuredClone(obj);

// obj.name = "JSON";

// console.log(obj, obj2);

// dot notation
// static
// let key = "year";
// console.log(obj.year);
// console.log(obj.key);

// // [] dynamic

// console.log(obj["name"]);
// console.log(obj[key]);

// let secondName = "Azizov";
// let key = "jfalksdhflkjdshj";

// let person = {
//   name: "Aziz",
//   surname: secondName,
//   age: 35,
//   job: "programmer",
//   [key]: 29847293487,
//   salomlash() {
//     console.log(person.name, "Hush kelibsiz");
//   },
// };
// // person.salomlash();
// // person["salomlash"]();

// Object.seal(person);

// person.key = "Kalit";
// person.name = "Abdulaziz";
// delete person[key];

// console.log(person);

// let qism1 = {
//   name: "Abdulla",
// };
// let qism2 = {
//   age: 50,
// };

// let person = {};

// Object.assign(person, qism1, qism2);

// // console.log(person, qism1, qism2);

// // console.log("age" in qism1);
// for (const key in person) {
//   console.log(key, ":", person[key]);
// }
