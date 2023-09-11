// num string range
function num_string_range(start = "a", finish = "z", n = 1) {
  let startCharCode = start.charCodeAt();
  let finishCharCode = finish.charCodeAt();
  let arr = [];

  for (let i = startCharCode; i <= finishCharCode; i += n) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

let range = num_string_range();

console.log(range);

// tidy num
function tidyNumber(n) {
  let str = n.toString();
  let last = 0;
  for (let e of str) {
    if (last > e) return false;
    last = e;
  }
  return true;
}

var capitals = function (word) {
  let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = [];
  for (let i in word) {
    if (cap.includes(word[i])) arr.push(+i);
  }
  return arr;
};

function fakeBin(x) {
  let str = "";
  for (let el of x) {
    str += el < 5 ? 0 : 1;
  }
  return str;
}

function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    let matchArr = games[i].split(":");
    if (matchArr[0] > matchArr[1]) {
      sum += 3;
    } else if (matchArr[0] === matchArr[1]) {
      sum += 1;
    }
  }
  return sum;
}

function insertDash(num) {
  let str = num.toString();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (str[i] % 2 && str[i + 1] % 2) newStr += "-";
  }
  return newStr;
}
