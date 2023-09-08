//? Homework
//! Random generator
const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
// console.log(randomGenerator(50, 70));

//! Math methodlarini yozib kelish => (sign, sqrt, cbrt, pow, abs, round, floor, ceil, trunc)
const mySqrt = (number) => number ** (1 / 2);
const mySign = (number) => (number > 0 ? 1 : number === 0 ? 0 : -1);
// console.log(mySign(0));
// console.log(mySign(-0));
// console.log(mySign(465));
// console.log(mySign(-564654));
const myCbrt = (number) => number * (1 / 3);
const myPow = (n, p) => n ** p;
const myAbs = (number) => (number === 0 ? 0 : number > 0 ? number : -number);
const myAbs2 = (number) => mySign(number) * number;
const myRound = (number) => +number.toFixed(0);
// console.log(myRound(9.665));
// console.log(Math.round(9.665));
const myFloor = (number) => parseInt(number.toString());
// console.log(myFloor(654.6254));
const myCeil = (number) => parseInt(number.toString()) + 1;
// console.log(myCeil(654.6254));
const myTrunc = (number) => parseInt(number.toString());
// console.log(myTrunc(654.6254));

// ! CodeWars
// #1
// Is it even?
function testEven(n) {
  return !(n % 2);
}
// #2 Determine the logarithm base
function determineBase(logFunc) {
  return Math.E ** (1 / logFunc(Math.E));
}

// logx n = v
// x^v = n
// x = n ^ (1 / v)

// #3 Two numbers are positive
function twoArePositive(a, b, c) {
  let sum = 0;
  if (Math.sign(a) === 1) {
    sum++;
  }
  if (Math.sign(b) === 1) {
    sum++;
  }
  if (Math.sign(c) === 1) {
    sum++;
  }
  return sum == 2;
}
