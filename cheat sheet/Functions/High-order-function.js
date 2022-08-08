//HOF

//A Higher-Order Function is a regular function that takes one or more functions as arguments and/or returns a function as a value from it.
//A Higher-Order function is a function that receives a function as an argument or returns the function as output.

/*  
    In mathematics and computer science, a higher-order function (HOF) is a function that does at least one of the following:
    
      1. takes one or more functions as arguments (i.e. a procedural parameter, which is a parameter of a procedure that is itself a procedure),
      2. returns a function as its result.
*/

//eg:
// Define a function that takes a function as an argument.
function getCapture(camera) {
  // Invoke the passed function
  camera();
}

// Invoke the function by passing a function as an argument
getCapture(function(){
  console.log('Canon');
});

// Define a function that returns a function
function returnFunc() {
  return function() {
    console.log('Hi');
  }
}

// Take the returned function in a variable.
const fn = returnFunc();
// Now invoke the returned function.
fn(); // logs 'Hi' in the console

// Alternatively - A bit odd syntax but good to know
returnFunc()(); // logs 'Hi' in the console



//example:

const App = (param1) => (param2) => { 
    console.log("param1:"+ param1);
    console.log("param2:" + param2);
}

App("hello")("world");  // param1:hello, param1:hello
