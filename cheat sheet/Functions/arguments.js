/* arguments is an Array-like object accessible inside functions that contains the 
   values of the arguments passed to that function */

const argi = arguments[i];    			//get access to the ith argument
arguments.length              			//returns the number of parameter actually passed to the function, include rest parameter

function fn(arg1, arg2, arg3) {
	console.log(arguments);
}
fn('a','b','c');              			//Object { 0: "a", 1: "b", 2: "c" }

/* The arguments object is not an Array. It is similar, but lacks all Array properties except length */


//converted to a real Array
let args = Array.prototype.slice.call(arguments);
//Or using an array literal is shorter than above but allocates an empty array
let args = [].slice.call(arguments);
//or
let args = Array.from(arguments);
// or
let args = [...arguments];

typeof arguments                              //returns data tyope
arguments.callee                              //reference to the currently executing function that the arguments belong to. Forbidden in strict mode
const argIter = arguments[Symbol.iterator]()  //return an iteractor object


