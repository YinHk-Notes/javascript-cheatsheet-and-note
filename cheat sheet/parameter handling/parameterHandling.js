// default paramter values
// parameter can define default values in function, eg:
function Add (x=1, y=2, z=3){
  return x+y+z
}
Add() //output:6
Add(4,5,6) //output:15


/* Spread Operator */

// Rest parameter
/*  
  A variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments.
    - rest parameter canbe any type,JavaScript does not care about the type in rest parameter.
    - A function definition can have only one ...restParam.
    - The rest parameter must be the last parameter in the function
    - The rest parameter is an indefinite number of arguments as an array
 */
//example1:
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(3, 2));    // 5
console.log(sum());        // 0

//example2:
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => {
    return multiplier * element
  })
}
let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]

//syntax
function f(a, b, ...theArgs) {
  // code
}


// spreading elements of array/string
// spread the elements in array or even a string into both literal elements.

var params = [ "three", "four", 5, true ];
var other = [ 1, 2, ...params ] // [1, 2, "three", "four", 5, true]

var params = [ "three", "four", [5, 6] ];
var other = [ 1, 2, ...params ] // [1, 2, "three", "four", Array [5, 6]]

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]


