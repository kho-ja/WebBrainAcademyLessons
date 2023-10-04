// Curry
function outer(first) {
  return function (second) {
    return first + second;
  };
}
console.log(outer(5)(9));
