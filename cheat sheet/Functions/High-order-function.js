//HOF

//A Higher-Order Function is a regular function that takes one or more functions as arguments and/or returns 
//a function as a value from it.

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
