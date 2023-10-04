// Error handling
// try {
//   console.log(a);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("finished");
// }
// console.log(1);
// console.log(2);

// Asinxron
// 1. CallBack
// console.log(1);
// setTimeout(() => getData(func), 1000);
// function func() {
//   console.log(3);
// }

function getData() {
  return null;
  // func();
}
// 2. Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let val = getData();
    if (val) {
      resolve(val);
    } else {
      reject(val);
    }
  }, 1000);
});
// console.log(1);
// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))
//   .finally(() => console.log(3));
// 3. Async-await
async function asyncFunc() {
  try {
    res = await promise;
    console.log(res);
  } catch {
    console.log("error");
  } finally {
    console.log(3);
  }
}
console.log(1);
asyncFunc();
