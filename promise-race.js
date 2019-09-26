const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result of promise one');
  }, Math.floor(Math.random() * 3000));
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise two error');
  }, Math.floor(Math.random() * 3000));
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result of promise three');
  }, Math.floor(Math.random() * 3000));
});

const promises = [promiseTwo, promiseOne, promiseThree];

Promise.race(promises)
  .then((firstResult) => {
    console.log(firstResult);
  })
  .catch((err) => {
    console.error(err);
  });
