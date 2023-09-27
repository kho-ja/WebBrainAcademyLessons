// 3
String.prototype.removeDuplicates = function () {
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    if (!newStr.includes(this[i])) newStr += this[i];
  }
  return newStr;
};

console.log("Webbbraaaiiinnn  accademy".removeDuplicates());

// 7
String.prototype.charNumber = function (str) {
  return this.split("").sort().join("") === str.split("").sort().join("");
};

console.log("nums".charNumber("sumn"));

// 6
String.prototype.isPalindrome = function () {
  return this.valueOf() === this.split("").reverse().join("");
};

console.log("non".isPalindrome());

// 5
String.prototype.twiceChar = function () {
  return this.split("")
    .map((v) => v + v)
    .join("");
};

console.log("Webbrain".twiceChar());

// 4
String.prototype.findNumbers = function () {
  return this.split("")
    .map((v) => parseInt(v))
    .filter((v) => !isNaN(v));
};

console.log("We66bra1n Acad4my".findNumbers());

// 2
String.prototype.replaceToA = function () {
  return Array.from(this, (v) => (v === "@" ? "a" : v)).join("");
};

console.log("Webbr@in Ac@demy".replaceToA());

// 1
String.prototype.letterInfo = function () {
  let upperCase = Array(26)
    .fill(1)
    .map((v, i) => String.fromCharCode(v * (i + 65)));
  let lowerCase = upperCase.map((v) => v.toLowerCase());

  let upCount = 0;
  let lowCount = 0;

  this.split("").forEach((v) => {
    if (upperCase.includes(v)) {
      upCount++;
    } else if (lowerCase.includes(v)) {
      lowCount++;
    }
  });

  return [upCount, lowCount];
};

console.log("Webbrain Academy".letterInfo());

// 2
let obj = {
  name: "Palonchi",
  age: 50,
  child: {
    name: "Pistonchi",
    age: 25,
    child: {
      name: "Pismadonchi",
      age: 15,
    },
  },
};

Object.prototype.ageSum = function (next = "child", prop = "age") {
  let sum = 0;
  let current = this;
  while (current) {
    sum += current[prop];
    current = current[next];
  }
  return sum;
};

console.log(obj.ageSum());

// 3
let obj1 = {
  id: 1,
  name: "Webbrain Academy",
  offline: true,
  online: false,
  individual: true,
};

Object.prototype.boolKeys = function () {
  newObj = {};
  for (let key in this) {
    if (typeof this[key] === "boolean") {
      newObj[key] = this[key];
    }
  }
  return newObj;
};

console.log(obj1.boolKeys());

// 9
String.prototype.zip = function () {
  let count = 1;
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i + 1]) {
      newStr += this[i];
      if (count > 1) {
        newStr += count;
        count = 1;
      }
    } else count++;
  }
  return newStr;
};

console.log("Webbraaiiin".zip());

// 1
Array.prototype.removeDuplicates = function () {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!newArr.includes(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

console.log([1, 5, 7, 5, 1, 2, 2, 3, 3, 4, 4].removeDuplicates());

// 2
Array.prototype.checkArr = function (arr) {
  return !this.filter((v, i) => v !== arr[i]).length;
};

console.log([1, 2, 3].checkArr([1, 2, 3]));
// console.log(checkArr([1, 2, 3], [1, 2, 4]));

// 3
Array.prototype.twoRoom = function () {
  return this.filter((v) => Math.floor(Math.log10(v)) === 1);
};

console.log([12, 1, 120, 15].twoRoom());
