
/* Promises are used to handle asynchronous operations in JavaScript.
   The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
   A Promise is in one of these states:
    - pending:  initial state, neither fulfilled nor rejected. { <state>: "pending" }
    - fulfilled:  meaning that the operation was completed successfully.  { <state>: "fulfilled", <value>: ... }
    - rejected:   meaning that the operation failed.  { <state>: "rejected" } 
  
   📌 The Promise object supports two properties: state and result.
   📌 While a Promise object is "pending" (working), the result is undefined.
   📌 When a Promise object is "fulfilled", the result is a value.
   📌 When a Promise object is "rejected", the result is an error object.
   
   Callbacks added with then() will never be invoked before the completion of the current run of the JavaScript event loop.
   These callbacks will be invoked even if they were added *after* the success or failure of the asynchronous operation that the promise represents.
 */

//create promise object
/*
   const myPromise = new Promise((resolve, reject) => {
      // do something asynchronous which eventually calls either:
      //
      //   resolve(someValue)        // fulfilled
      // or
      //   reject("failure reason")  // rejected
   });

 */
const myPromise = new Promise( /* executor */ function(resolve, reject) { ... });
myPromise.then(handleResolved, handleRejected)
                                                                        

//executor is function with two parameters: resolve and reject for executing promise
(resolve, reject) => { ... }
//eg:
const myPromise = new Promise((resolve, reject) => {
    if(consition) {
      resolve('Promise resolved');
    } else {
      reject(new Error('Promise rejected'));
    }
});
myPromise.then(handleResolved, handleRejected)                    


//execute when myPromise is resolved
Promise.prototype.then() 
                      
myPromise.then(handleResolved, handleRejected)
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
Promise.prototype.catch()
                      
myPromise.catch((error) => { //...rejection })       
   
//This method returns a Promise object that is resolved with a given value
//if the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, 
//adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Turn a given value to a promise and return its value.
Promise.resolve(value);   

//This method returns a Promise object that is rejected with a given reason
Promise.reject(reason);
        

//he promise is finally either fulfilled or rejected, the specified callback function is executed
Promise.prototype.finally()

//example:
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });

   
function test(number) {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve("Success")
        } else {
            reject("Failed")
        }
    })
}
function main() {
    test(1).then((result) => {
        // result === "Success"
        console.log(result)
    }).catch((error) => {
        // won't be executed, because of success
    })
    test(2).then((result) => {
        // won't be executed, because of failure
        console.log(result)
    }).catch((error) => {
        // error === "Failed"
        console.log(error)
    })
}
   
//promises chain
//return promises
myPromise.then((value) => { return new Promise( (resolve, reject) => {}) })
          .then((value) => { return new Promise( (resolve, reject) => {}) })
           .then((value) => { return new Promise( (resolve, reject) => {}) })
            .then((value) => { return new Promise( (resolve, reject) => {}) })
             .catch((error) => { })

/* 
   If continue followed by .then(), promises chain is formed.
   Processing continues to the next link of the chain even when a .then() lacks a callback function that returns a Promise object. 
   Therefore, a chain can safely omit every rejection callback function until the final .catch().
 */

   
   
   
//takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises   
//This returned promise will resolve when all of the input's promises have resolved, 
//or if the input iterable contains no promises.
// It rejects immediately upon any of the input promises rejecting or non-promises throwing an error
Promise.all([promise1, promise2, promise3,...promise])

//example:
//p1,p2 and p3 are promises
Promise.all([p1,p2,p3]).then(values => {
  console.log(values);     //return an array of values
});
//use async/await
async function P() {
    const [P1,P2,P3] = await Promise.all([p1,p2,p3])
    return [P1,P2,P3]      //return an array of the results of the promises
}
P().then(([P1,P2,P3])=>{
      console.log(P1);
      console.log(P2);
      console.log(P3);
   }).catch()
                        
                        
//takes an iterable of Promise objects whether promises have either fulfilled or rejected, return result array of objects describes the outcome of each promise.
//object: either {  status: "fulfilled", value: val } or { status: 'rejected', reason: error }
Promise.allSettled([p1, p2, p3])
         .then((result) => {
            //...
            console.log(result);       //an array of result objects
           });

//collecting suceesful results in fetching API
const promises = [fetch(url1), fetch(url2)];
const results = await Promise.allSettled(promises);
const successfulPromises = results.filter(p => p.status === 'fulfilled');

//collecting errors in fetching API
const promises = [fetch(url1), fetch(url2)];
const results = await Promise.allSettled(promises);
const errors = results
  .filter(p => p.status === 'rejected')
  .map(p => p.reason);
                        
                        
//get the value of any first fulfilled promise, it returns a single promise that first resolves.
Promise.any([p1,p2,p3]).then((value) => console.log(value));
  
   
//returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise 
//depend on which promise faster, then return this result in promise
Promise.race([p1,p2,p3]).then((value) => console.log(value)).catch((reason) => console.log(reason));
   
     
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
| name               | description                                     |                 |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
| Promise.allSettled | does not short-circuit                          | Added in ES2020 |
| Promise.all        | short-circuits when an input value is rejected  | Added in ES2015 |
| Promise.race       | short-circuits when an input value is settled   | Added in ES2015 |
| Promise.any        | short-circuits when an input value is fulfilled | this proposal   |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
   
