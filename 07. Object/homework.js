console.log("==Rectangle==============================");
let rectangle = {
  width: 100,
  height: 300,
  getPerimeter() {
    return (rectangle.width + rectangle.height) * 2;
  },
  getArea() {
    return rectangle.width * rectangle.height;
  },
};

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

console.log("==Circle==============================");
let circle = {
  radius: 900,
  getCircumference() {
    return 2 * circle.radius * Math.PI;
  },
  getArea() {
    return circle.radius ** 2 * Math.PI;
  },
};

console.log(circle.getCircumference());
console.log(circle.getArea());

//* Screenshots

// * 1)
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2)
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// 3)
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") obj[key] *= 2;
  }
}

console.log(menu);
