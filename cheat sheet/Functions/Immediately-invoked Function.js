/* Immediately-invoked Function Expression 
   It is a way to execute functions immediately, as soon as they are created. 
   IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations. 
   invoke and execute a function immediately after its declaration, creating an anonymous function is the best way. */

// Note: you can also pass the arguments in the function and invoke it too

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


