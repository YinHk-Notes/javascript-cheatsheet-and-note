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


