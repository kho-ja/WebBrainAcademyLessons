// 3
function removeDuplicates(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) newStr += str[i];
  }
  return newStr;
}
console.log(removeDuplicates("Webbbraaaiiinnn  accademy"));

// 7
function charNumber(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(charNumber("nums", "sumn"));

// 6
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("non"));

// 5
function twiceChar(str) {
  return str
    .split("")
    .map((v) => v + v)
    .join("");
}

console.log(twiceChar("Webbrain"));

// 4
function findNumbers(str) {
  return str
    .split("")
    .map((v) => parseInt(v))
    .filter((v) => !isNaN(v));
}

console.log(findNumbers("We66bra1n Acad4my"));

// 2
function replaceToA(str) {
  return Array.from(str, (v) => (v === "@" ? "a" : v)).join("");
}

console.log(replaceToA("Webbr@in Ac@demy"));

// 1
function letterInfo(str) {
  let upperCase = Array(26)
    .fill(1)
    .map((v, i) => String.fromCharCode(v * (i + 65)));
  let lowerCase = upperCase.map((v) => v.toLowerCase());

  let upCount = 0;
  let lowCount = 0;

  str.split("").forEach((v) => {
    if (upperCase.includes(v)) {
      upCount++;
    } else if (lowerCase.includes(v)) {
      lowCount++;
    }
  });

  return [upCount, lowCount];
}

console.log(letterInfo("Webbrain Academy"));

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

function ageSum(obj, next = "child", prop = "age") {
  let sum = 0;
  while (obj) {
    sum += obj[prop];
    obj = obj[next];
  }
  return sum;
}

console.log(ageSum(obj));

// 3
let obj1 = {
  id: 1,
  name: "Webbrain Academy",
  offline: true,
  online: false,
  individual: true,
};

function boolKeys(obj) {
  newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "boolean") {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(boolKeys(obj1));

// 9
function zip(str) {
  let count = 1;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      newStr += str[i];
      if (count > 1) {
        newStr += count;
        count = 1;
      }
    } else count++;
  }
  return newStr;
}

console.log(zip("Webbraaiiin"));

// 1
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(removeDuplicates([1, 5, 7, 5, 1, 2, 2, 3, 3, 4, 4]));

// 2
function checkArr(arr1, arr2) {
  return !arr1.filter((v, i) => v !== arr2[i]).length;
}

console.log(checkArr([1, 2, 3], [1, 2, 3]));
// console.log(checkArr([1, 2, 3], [1, 2, 4]));

// 3
function twoRoom(arr) {
  return arr.filter((v) => Math.floor(Math.log10(v)) === 1);
}

console.log(twoRoom([12, 1, 120, 15]));
