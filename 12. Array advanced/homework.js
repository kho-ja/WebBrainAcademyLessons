function stringSuffix(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let slice = s.slice(i);
    for (let j = 0; j < slice.length; j++) {
      let newSlice = slice.slice(0, slice.length - j);
      if (s.startsWith(newSlice)) {
        sum += newSlice.length;
        break;
      }
    }
  }
  return sum;
}

function findMultiples(integer, limit) {
  return new Array(Math.floor(limit / integer))
    .fill(integer)
    .map((v, i) => v * (i + 1));
}

function dropCap(n) {
  return n
    .split(" ")
    .map((v) =>
      v.length > 2 ? v[0].toUpperCase() + v.slice(1).toLowerCase() : v
    )
    .join(" ");
}

function solve(arr) {
  let expecting = [];
  arr.forEach((v, i) => {
    let index = expecting.findIndex((e) => e === v);
    if (index > -1) {
      expecting.splice(index, 1);
    } else {
      expecting.push(-v);
    }
  });
  return -expecting[0];
}

function getMean(arr, x, y) {
  if (!(x > 1 && x <= arr.length && y > 1 && y <= arr.length)) return -1;
  return (
    (arr.slice(0, x).reduce((c, v) => c + v) / x +
      arr.slice(arr.length - y).reduce((c, v) => c + v) / y) /
    2
  );
}
