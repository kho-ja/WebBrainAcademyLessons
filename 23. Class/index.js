class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  info() {
    console.log(this.name, this.age);
  }

  static info() {
    console.log("This is created with static function");
  }

  get name() {
    return this.#name;
  }
  set name(n) {
    if (n.length < 30) {
      this.#name = n;
    } else {
      console.log("fail");
    }
  }
  get age() {
    return this.#age;
  }
}

class User extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

let user1 = new User("Aziz", 37);
let user2 = new User();

user1.name =
  "ljkasdhfkal d kjsadhf kdhfklajsdhf kjadhf kajhds fkjahdsfkj hadskj";

user1.info();

console.log(user1.name, user2);
