/* A Promise which will be resolved with the value returned by the async function, or rejected with an exception thrown from, 
   or uncaught within, the async function. */

async function myFunction(param1,param2,...paramN) {
   //...
  return expression;   //converted to a resolved Promise
}
//same as
function myFunction() {
  return Promise.resolve(expression);   
}


/* Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an 
   async function's body, you will get a SyntaxError. 
   "async" makes a function return a Promise  
   "await" before a function makes a function wait for a Promise, the await keyword can only be used inside an async function. 
   If the Promise is rejected, the await expression throws the rejected value.
   If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise. */

async function myPromise() {
   let res = await aPromiseObj
   return res;
}
myPromise()
  .then()
  .catch()

//same as
function myPromise() {
  return new Promise((resolve, reject) => {})
}
myPromise()
  .then()
  .catch()
  
//If the Promise is rejected, the rejected value is thrown
async function name() {
  try {
    let response = await Promise.reject(value);
  } catch(e) {
    console.error(e);     //the rejected value
  }
}

//handling rejected promises
let response = await promisedFunction().catch((err) => { console.error(err); });    // response will be undefined if the promise is rejected

//use await in fetching API
let myAsyncFunction = async () => {
  const response = await fetch(URI);
  if (response.status !== 200) {
    throw new Error("error_message");
  }
  let data = await response.json();
  return data;
};

myAsyncFunction()
  .then((data) => { ... })
  .catch((err) => { 
    //handle error 
  });

//example
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('/movies'),
    fetch('/categories')
  ]);
  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();
  return [movies, categories];
}

fetchMoviesAndCategories().then(([movies, categories]) => {
  movies;     // fetched movies
  categories; // fetched categories
}).catch(error => {
  // /movies or /categories request failed
});







