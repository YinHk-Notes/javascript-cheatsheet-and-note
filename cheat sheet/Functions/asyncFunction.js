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
   async function's body, you will get a SyntaxError. If a Promise is passed to an await expression, it waits for the Promise 
   to be fulfilled and returns the fulfilled value.
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


//handling rejected promises
let response = await promisedFunction().catch((err) => { console.error(err); });    // response will be undefined if the promise is rejected

//If the Promise is rejected, the rejected value is thrown
async function name() {
  try {
    let response = await Promise.reject(value);
  } catch(e) {
    console.error(e);     //the rejected value
  }
}

//dynamic dependency pathing
const strings = await import(`/i18n/${navigator.language}`);   //allows for Modules to use runtime values in order to determine dependencies

//use await in module
export default await module         //any modules that include this will wait for this module
//eg:
const colors = fetch('../data/colors.json')     // fetch request
  .then(response => response.json());
export default await colors;


//use await in fetching API
let myAsyncFunction = async () => {
  const response = await axios(URI);
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
    axios('/movies'),
    axios('/categories')
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


//nest
async function a(){
  await b();
  .....       //wait to execute after b() finish
  await c();
  .....       //wait to execute after c() finish
  await new Promise(resolve=>{
    .....
  });
  .....       //execute after finish the promise above
}
a();
a().then(()=>{
  .....       //wait to execute after a() finish
}).catch();


