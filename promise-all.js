const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result of promise one');
  }, 5000);
});
const promiseTwo = new Promise((resolve, reject) => {
  resolve('result of promise two');
});
const promiseThree = new Promise((resolve, reject) => {
  resolve('result of promise three');
});

const promises = [promiseTwo, promiseOne, promiseThree];

Promise.all(promises)
  .then((arrayOfResults) => {
    // console.log(arrayOfResults.join(', '));
    console.log(arrayOfResults);
  });
