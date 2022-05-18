/* Immediately-invoked Function Expression 
   It is a way to execute functions immediately, as soon as they are created. 
   IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations. 
   invoke and execute a function immediately after its declaration, creating an anonymous function is the best way. */

// Note: you can also pass the arguments in the function and invoke it too
// An anonymous function is a function without a name. The following shows how to define an anonymous function:

// syntax
(function() {
  // ...
})()

// or arrow function format
(() => {
  // ...
})()

// You could also put the invoking parentheses inside the expression parentheses
(function() {
  // ...
}())

(() => {
  // ...
}())

// An IIFE can also be named regular functions (not arrow functions)
// This does not change the fact that the function does not “leak” to the global scope, 
// and it cannot be invoked again after its execution

(function doSomething() {
  // ...
})()


//Example:

//the following main function declared, but do not to be invoked immediately
let x = 3;

function main() { 
   x=5;
}

console.log(x);   //x=3

//you need to call the function
let x = 3;

function main() { 
   x=5;
}
main();

console.log(x);   //x=5

//similar way you can do it by IIFEs
let x = 3;

(function main() {
    x=5;
})();               //function is invoked immediately after being declared

console.log(x);  //x=5


