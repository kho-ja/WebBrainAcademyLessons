// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url) {
  return url
    .split("https://")
    .at(-1)
    .split("http://")
    .at(-1)
    .split("www.")
    .at(-1)
    .split(".")
    .at(0);
}

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
  return new Array(number <= 0 ? 1 : number - 1)
    .fill(1)
    .map((v, i) => i + 1)
    .filter((v) => v % 3 == 0 || v % 5 == 0)
    .reduce((c, v) => c + v, 0);
}

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
function validBraces(braces) {
  let bracesObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let expecting = [];
  for (let i = 0; i < braces.length; i++) {
    let brace = bracesObj[braces[i]];
    if (brace) {
      expecting.push(brace);
    } else {
      let index = expecting.indexOf(braces[i]);
      if (index > -1) {
        expecting.pop();
      } else {
        return false;
      }
    }
  }
  return !expecting.length;
}
