//* Homework Masalalar;
console.log("--For1--------------------------------");
// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
let k = 5;
let n = 7;

for (let i = 0; i <= n; i++) {
  console.log(k);
}
console.log("--For2--------------------------------");
// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
let a = 2;
let b = 7;
let itarationNum = 0;
for (let i = a; i <= b; i++) {
  console.log(i);
  itarationNum++;
}
console.log("----");
console.log(itarationNum);

console.log("--For3--------------------------------");
// For3. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
let a1 = 2;
let b1 = 7;
let itarationNum1 = 0;
for (let i = b1 - 1; i > a1; i--) {
  console.log(i);
  itarationNum1++;
}
console.log("----");
console.log(itarationNum1);

console.log("--For4--------------------------------");
// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, ..., 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
console.log("--For5--------------------------------");
// For5. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, ..., 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
console.log("--For6--------------------------------");
// For6. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
let kgnarxi = 10000;
let kg = 5;
console.log(kg * kgnarxi);

console.log("--For7--------------------------------");
// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
let a2 = 2;
let b2 = 7;
let sum = 0;
for (let i = b2 - 1; i > a2; i--) {
  sum += i;
}
console.log(sum);

console.log("--For8--------------------------------");
// For8. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
let a3 = 2;
let b3 = 7;
let sum1 = 1;
for (let i = b3 - 1; i > a3; i--) {
  sum1 *= i;
}
console.log(sum1);

console.log("--For9--------------------------------");
// For9. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
let a4 = 2;
let b4 = 7;
let sum2 = 1;
for (let i = b4 - 1; i > a4; i--) {
  sum2 *= i ** 2;
}
console.log(sum2);

console.log("--For10--------------------------------");
// For10. n butun soni berilgan (n>0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+ +1/n
let n1 = 7;
let sum3 = 1;
for (let i = 1; i < n1; i++) {
  sum3 += 1 / n1;
}
console.log(sum3);

//*Shakllar
console.log("--Kvadrat--------------------------------");

// Kvadrat
// * * * * * * * *
// * * * * * * * *
// * * * * * * * *
// * * * * * * * *
// * * * * * * * *
// * * * * * * * *
let kvadrateni = 10;
for (let i = 0; i < kvadrateni; i++) {
  let str = "";
  for (let j = 0; j < kvadrateni; j++) {
    str += " *";
  }
  console.log(str);
}
console.log("--Diagonal-kvadrat--------------------------------");
// Diagonal kvadrat

let diagonalKvadratEni = 11;
for (let i = 0; i < diagonalKvadratEni; i++) {
  let str = "";
  for (let j = 0; j < diagonalKvadratEni; j++) {
    if (
      i == j ||
      i == 0 ||
      i == diagonalKvadratEni - 1 ||
      j == diagonalKvadratEni - 1 ||
      j == 0
    ) {
      str += " *";
    } else {
      str += "  ";
    }
  }
  console.log(str);
}
console.log("--X-kvadrat--------------------------------");
// X Kvadrat

let XKvadrat = 11;
for (let i = 0; i < XKvadrat; i++) {
  let str = "";
  for (let j = 0; j < XKvadrat; j++) {
    if (
      i == j ||
      i == XKvadrat - j - 1 ||
      i == 0 ||
      i == XKvadrat - 1 ||
      j == XKvadrat - 1 ||
      j == 0
    ) {
      str += " *";
    } else {
      str += "  ";
    }
  }
  console.log(str);
}

console.log("--Peramida--------------------------------");
// Peramida
let peramidaEni = 10;
for (let i = 0; i < peramidaEni; i++) {
  let str = " ";
  for (let j = peramidaEni; j >= 0; j--) {
    if (i >= j) str += " *";
    else str += " ";
  }
  console.log(str);
}

console.log("--Teskari-Peramida--------------------------------");
// Teskari Peramida
let teskariPeramidaEni = 11;
for (let i = 0; i < teskariPeramidaEni; i++) {
  let str = " ";
  for (let j = 0; j < teskariPeramidaEni * 2; j++) {
    if (i >= j || i >= teskariPeramidaEni * 2 - j - 1) str += "*";
    else str += " ";
  }
  console.log(str);
}
