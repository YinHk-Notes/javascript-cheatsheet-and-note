/* The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
   A generator is a process that can be paused and resumed and can yield multiple values. A generator in JavaScript consists of a generator 
   function, which returns an iterable Generator object. */

//syntax of Generator function declaration
function* generatorFunction(param1, param2,...param) {
  //...body
}
//or
const generatorFunction = function*() { ... }

//Generators can even be the methods of an object
const generatorObj = {
  *generatorMethod() {},
}
//Generator as the method of a class
class GeneratorClass {
  *generatorMethod() {}
}
        

/* Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead 
   When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which 
   specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. 
   return an object of this form: {value: undefined, done: true} */



/* Additionally, when used with Promises, generators can mimic the async/await functionality, which allows us to deal with asynchronous code in a more 
   straightforward and readable manner. Although async/await is a more prevalent way to deal with common, simple asynchronous use cases, like fetching 
   data from an API, generators have more advanced features that make learning how to use them worthwhile. */


