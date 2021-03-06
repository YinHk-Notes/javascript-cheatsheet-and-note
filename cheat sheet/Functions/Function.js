/* Every JavaScript function is actually a Function object.
   This can be seen with the code (function(){}).constructor === Function, which returns true */

/*
   The code inside a function is not executed when the function is defined.
   The code inside a function is executed when the function is invoked.
 */

//declare a function
function Name(param1,param2,...param) {
   //body
}
//or
const fun = function(param1,param2,...param) {}

//creates a new Function object, args and functionBody are all in string format
const fun1 = new Function(functionBody)
const fun2 = new Function(arg1, ... argN, functionBody)       

//eg:
const greet = new Function('console.log("hello world")');
greet();

(function(args1,args2,...,argsN) {}).length             //returns the number of formal parameters, excludes the 'rest parameter'.
(function(...args) {}).name()                           //returns the function's name

(function(...args) {}).apply(argsArray)                 //calls a function with a given this value, and arguments provided as an array (or an array-like object)
(function(...args) {}).apply(thisArg, argsArray)

const boundFun = fun.bind(this)                         //creates a new bound function that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function
const boundFun = fun.bind(this, arg1, ... , argN)      

fun.call()                                              //allows for a function/method belonging to one object to be assigned and called for a different object
fun.call(this)                                          //With the call() method, you can write a method that can be used on different objects.
fun.call(this, arg1, ... , argN)

fun.toString()                                          //returns a string representing the source code of the function

//return 
//you can return any types,  integer, string, bool, object, array or even a callback function etc.
//If you return multiple values, you can an array or an object. Because 
//JavaScript doesn???t support functions that return multiple values. However, you can wrap multiple values into an array or 
//an object and return the array or the object. 
//Use destructuring assignment syntax to unpack values from the array, or properties from objects.

//return an array
function App() {
    // function body

    // return as an array
    return [value1, value2,...];
}

//using destructuring assignment syntax to unpack values from an array to get each of them
const [value1, value2,...] = App();

//return an object
function App() {
    // function body

    // return as an object
    return {property1, property2,...};
}

//using destructuring assignment to unpack properties from an object to get each of them
const {property1, property2,...} = App();


