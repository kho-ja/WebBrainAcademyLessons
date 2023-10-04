// Proxy
let user = {
  login: "User1",
  password: 123456,
};

let proxyUser = new Proxy(user, {
  get(target, key) {
    return key !== "password" ? Reflect.get(target, key) : "Access failed";
  },
  set(target, key, newValue) {
    if (key === "password") {
      throw new Error("You cant change password");
    }
    Reflect.set(tearget, key, newValue);
  },
  deleteProperty(target, key) {
    if (key === "password") {
      throw new Error("You cant delete password");
    }
    Reflect.deleteProperty(target, key);
  },
});
delete proxyUser.login;

console.log(proxyUser);
// console.log();
