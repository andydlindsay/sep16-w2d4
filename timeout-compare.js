const setTimeoutPromise = require('./set-timeout-promise');

setTimeout(() => {
  console.log('vanilla timeout fired');
}, 2000);

setTimeoutPromise(3000)
  .then(() => {
    console.log('set timeout promise fired');
  })
  .then(() => {
    console.log('did this work as well?');
  })
  .catch((err) => {
    console.error(err);
  });
