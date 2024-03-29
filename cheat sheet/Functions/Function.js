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
//or use function expression format
const fun = function(param1,param2,...param) {}

//creates a new Function object, args and functionBody are all in string format
const fun1 = new Function(functionBody)
const fun2 = new Function(arg1, ... argN, functionBody)       

//eg:
const greet = new Function('console.log("hello world")');
greet();

(function(args1,args2,...,argsN) {}).length             //returns the number of formal parameters, excludes the 'rest parameter'.
(function(...args) {}).name()                           //returns the function's name

//constructor function
function Ctor() {}                                      //A Function object's prototype property is used when
//instance                                              //the function is used as a constructor with the new operator
const inst = new Ctor();                                // It will become the new object's prototype
Ctor.prototype                                          //define a prototype for its instance
Object.getPrototypeOf(inst) === Ctor.prototype          //true

fun.toString()                                          //returns a string representing the source code of the function

/* cab methods */
function fn() {
   //with "this" key word                               //fn is function with "this" keyword to point to an unknown obj
}

fn.call()                                              //thisArg is not passed. If not in strict mode, then "this" is bound to the global object
fn.call(thisArg)                                       //thisArg is a specific object, where the "this" binds to it when calling fn
fn.call(thisArg, arg1, ... , argN)                     //arg1,...,argN are arguments for fn
 
fn.apply()
fn.apply(thisArg)
fn.apply(thisArg, argsArray)                           //argsArray is an array or an array-like object contains arguments of fn

//both call(), and apply() return the result of executing the bound function
   
//return a bound function for fn, which will be execute later
const boundFun = fn.bind(thisArg)  
boundFun(arg1, ... , argN)                              //execute the bound function
const boundFun = fn.bind(this, arg1, ... , argN)  
boundFun()                                              //execute the bound function

//return a bound function and execute it immediately
fn.bind(thisArg)(arg1, ... , argN)
fn.bind(this, arg1, ... , argN)()


//return 
//you can return any types,  integer, string, bool, object, array or even a callback function etc.
//If you return multiple values, you can an array or an object. Because 
//JavaScript doesn’t support functions that return multiple values. However, you can wrap multiple values into an array or 
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


