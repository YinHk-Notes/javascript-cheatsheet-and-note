
/* Promises are used to handle asynchronous operations in JavaScript.
   The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
   A Promise is in one of these states:
    - pending:  initial state, neither fulfilled nor rejected.
    - fulfilled:  meaning that the operation was completed successfully.
    - rejected:   meaning that the operation failed.  
   */

//create promise object
const myPromise = new Promise( /* executor */ function(resolve, reject) { ... })      

//executor is function with two parameters: resolve and reject for executing promise
(resolve, reject) => { ... }

//execute when myPromise is resolved
myPromise.then(onFulfilled, onRejected)
myPromise.then( (value) => {}, (reject) => { }) 
/* Once a Promise is fulfilled or rejected, the respective handler function (onFulfilled or onRejected) will be called 
   asynchronously.
   - returns a value, the promise returned by then gets resolved with the returned value as its value.
   - doesn't return anything, the promise returned by then gets resolved with an undefined value.
   - throws an error, the promise returned by then gets rejected with the thrown error as its value.
   - returns an already fulfilled promise, the promise returned by then gets fulfilled with that promise's value as its value.
   - returns an already rejected promise, the promise returned by then gets rejected with that promise's value as its value
   - returns another pending promise object
  */
                           
//execute when myPromise is rejected
myPromise.catch((error) => { //...rejection })                           
                           
//promises chain
myPromise.then((value) => { return new Promise() })
          .then((value) => { return new Promise() })
           .then((value) => { return new Promise() })
            .then((value) => { return new Promise() })
             .catch((error) => { })
             
//takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises   
const [] = Promise.all([
                           
