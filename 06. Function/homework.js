// 1. Uchburchak yuzi
console.log("==Uchburchak-yuzi==============================");
let uchburchakYuzi = (a, h) => (a * h) / 2;
console.log(uchburchakYuzi(5, 6));

// 2. Aylana uzunligi
console.log("==Aylana-uzunligi==============================");
let aylanaUzunligi = (R) => 2 * Math.PI * R;
console.log(aylanaUzunligi(1));

// 3. Doira yuzini topish
console.log("==Doira-Yuzi==============================");
let doiraYuzi = (R) => Math.PI * R * R;
console.log(doiraYuzi(1));

// 4. Sonni palindromlikka tekshirish (121 => 121)
console.log("==Palindrommi==============================");
let palindrommi = (n) => {
  // num = reverse n
  let num = 0;
  let replace = n;
  while (replace !== 0) {
    if (num === 0) num = replace % 10;
    else num = num * 10 + (replace % 10);
    replace /= 10;
    replace = parseInt(replace);
  }
  return num === n;
};
console.log(palindrommi(1));

// 5. Sonni murakkablikka tekshirish (131)
console.log("==Murakkabmi==============================");
let isComposite = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!(n % i)) count++;
    if (count > 2) return true;
  }
  return false;
};
console.log(isComposite(6));

// 6. FizzBuzz
console.log("==FizzBuzz==============================");
let FizzBuzz = (n) => {
  if (!(n % 5) && !(n % 3)) {
    return "FizzBuzz";
  } else if (!(n % 3)) {
    return "Fizz";
  } else if (!(n % 5)) {
    return "Buzz";
  }
};
console.log(FizzBuzz(15));
