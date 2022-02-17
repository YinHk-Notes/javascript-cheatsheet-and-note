/* The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object
   ,an object of this form: {value: undefined, done: true}. A generator is a process that can be paused and resumed and can yield multiple 
   values. A generator in JavaScript consists of a generator function, which returns an iterable Generator object. */

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
        

/* Iterating Over a Generator
   Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead 
   When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which 
   specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. */

// Call the next method on the Generator object
const generator = generatorFunction()                                      
generator.next()                 //return object { value: ..., done: ... }

//Passing Values in Generators
generator.next(value)                                      

/* yield can pause a generator function and resume a generator function */
function* generatorFunction() {
  yield [expression]
}
//yield* expression is used to delegate to another generator
function* func1() {
  yield 42;
}

function* func2() {
  yield* func1();
} 
                                       
                                       
/* close generator
generator.return()              //returns a value in a generator and finishes the generator
generator.throw()               //throws an error and finishes the generator



/* example of generator */
// Define a generator function that increments by one
function* incrementer() {
  let i = 0

  while (true) {
    yield i++
  }
}
                                     
// Initiate the generator
const counter = incrementer()
// Iterate through the values
counter.next()  //{value: 0, done: false}
counter.next()  //{value: 1, done: false}
counter.next()  //{value: 2, done: false}
counter.next()  //{value: 3, done: false}
                                       

/* Additionally, when used with Promises, generators can mimic the async/await functionality, which allows us to deal with asynchronous code in a more 
   straightforward and readable manner. Although async/await is a more prevalent way to deal with common, simple asynchronous use cases, like fetching 
   data from an API, generators have more advanced features that make learning how to use them worthwhile. */

//fetch api
const getUsers = asyncAlt(function*() {
  const response = yield fetch('https://jsonplaceholder.typicode.com/users')
  const json = yield response.json()

  return json
})

// Invoking the function
getUsers().then(response => console.log(response))
                                       

                                       

