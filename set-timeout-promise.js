const setTimeoutPromise = (wait) => {
  return new Promise((resolve, reject) => {
    if (typeof wait !== 'number') {
      reject('you must supply a valid number');
    }
    setTimeout(resolve, wait);
  });
};

module.exports = setTimeoutPromise;
