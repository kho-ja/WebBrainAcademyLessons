function* generatorFunc() {
  let i = 0;
  while (i < 100) {
    yield i;
    i++;
  }
}

let gn = generatorFunc();

console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());

for (const iterator of gn) {
  console.log(iterator);
}
