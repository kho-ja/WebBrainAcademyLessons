let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (target[prop] ?? false) {
        return target[prop];
      } else throw ReferenceError(`Property doesn't exists: ${prop}`);
    },
  });
}

user = wrap(user);
console.log(user.name);
// console.log(user.age);
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    prop = Number(prop);
    return target[prop < 0 ? target.length + prop : prop];
  },
});

console.log(array[-1]);
console.log(array[-2]);
console.log(array[-3]);
// console.log(array[4]);
