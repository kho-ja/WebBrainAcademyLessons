// Array functions
// Array.filter()
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.filter((v) => v > 5);

// console.log(arr, newArr);

// Array.sort()
// let arr = [9, 7, 5, 8, 4, 3, 6, 17, 1, 2, 0];
// let arrStr = ["asdf", "afsdf", "lorem", "olma", "maksdj", "Aziz", "Ziyo"];
// let newStrArr = structuredClone(arrStr);
// arrStr.sort((a, b) => a.localeCompare(b));
// arr.sort((a, b) => b - a);

// console.log(arr);
// console.log(arrStr, newStrArr);

// Array.find(), Array.findIndex(), Array.findLastIndex()
let arr = [9, 7, 5, 8, 4, 3, 6, 17, 1, 2, 0];

// let findValue = arr.find((v) => v % 2 === 0);
// let findIndex = arr.findIndex((v) => v % 2 === 0);

// console.log(arr, findValue, findIndex);

// Array.forEach()
// let sum = 0;
// arr.forEach((v) => (sum += v));
// console.log(sum);

// Array.map()
// let newArr = arr.map((v) => v ** 2);

// console.log(newArr, arr);

// Array.every(), Array.some()
// let bool = arr.every((v) => {
//   console.log(v);
//   return v % 2;
// });

// let someBool = arr.some((v) => {
//   console.log(v);
//   return v % 2;
// });

// console.log(bool, someBool);

// Array.fill()
// let newArr = new Array(9).fill(5);
// arr.fill(1, 3);

// console.log(newArr);
// let newArr = arr.copyWithin(3, 0, 3);

// console.log(arr, newArr);

// Array.flat()
// let arr1 = [[1, 2], [3, 4], 5, [[6, 7], 8], 9];

// let newArr = arr1.flat(2);

// console.log(newArr);

// Array.from()
// let str = "123456789";
// let newArr = Array.from(str, (v) => +v);

// console.log(newArr);

// Array.reduce((c, v) => {

// }, 3)

// let newValue = arr.reduce((c, v) => c + v, 0);

// console.log(newValue);
