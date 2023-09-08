//* CodeWars
// #1
function initials(n) {
  let str = "";
  let lastI = 0;
  for (let i in n) {
    if (i == 0) {
      str += n[0].toUpperCase();
    }
    if (n[i] === " ") {
      str += "." + n[+i + 1].toUpperCase();
      lastI = i;
    }
  }
  str += n.slice(+lastI + 2);
  return str;
}

// #2
function reverseMessage(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i == str.length - 1 || str[i + 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

// #3
function solution(fullText, searchText) {
  let i = "",
    n = 0;
  while (i > -1) {
    i = fullText.indexOf(searchText, i !== "" ? i + 1 : 0);
    if (i > -1) ++n;
  }
  return n;
}
// #4
function removeChar(str) {
  return str.slice(1, -1);
}

// #5
function validParentheses(parenStr) {
  let expecting = 0;
  for (let i in parenStr) {
    if (parenStr[i] == "(") {
      expecting++;
    } else {
      if (expecting == 0) {
        return false;
      } else expecting--;
    }
  }
  return !expecting;
}
