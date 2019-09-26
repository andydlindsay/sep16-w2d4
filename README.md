# W2D4 - Promises

### To Do
- [ ] Sequencing of async tasks without the "callback waterfall"
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Parallelizing async things (Promise.race and Promise.all)
- [ ] Creating our own Promises

### Callback Heck

```js
callbackOne((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      callbackFour((dataFour) => {
        // do something
      });
    });
  });
});
```

### Promises
- a contract: somebody says they'll do something for somebody else (and the other person agrees)
- either the promise is fulfilled or the promise fails
- the promise is in limbo until it is fulfilled or it fails
- Object that gets returned immediately from a function
- A promise will be in one 3 states:
  - pending: which means the promise is still in limbo
  - fulfilled: the promise has resolved
  - rejected: the promise has failed in some way
- Interestingly, promises utilize callbacks
- Usually you won't create your own promises, they'll come from an external async library

```js
const newPromise = functionThatReturnsAPromise();
newPromise
  .then((food) => {
    // consume the food
    console.log(data);
  });
```

### Error Handling
```js
callbackOne((err, dataOne) => {
  if (err) {
    throw err;
  }
  callbackTwo((err, dataTwo) => {
    if (err) {
      throw err;
    }
    callbackThree((err, dataThree) => {
      if (err) {
        throw err;
      }
      callbackFour((err, dataFour) => {
        if (err) {
          throw err;
        }
        // do something
      });
    });
  });
});
```

DRY - Don't Repeat Yourself
WET - Write Everything Twice























### Useful Links
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype)
- [Wikipedia: Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises)
