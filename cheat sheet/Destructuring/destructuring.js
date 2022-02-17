/* Array destructuring */

//Basic
const [a, b, c] = [1, 2, 3] //a=1, b=2, c=3

//Declare and assign a value
let a, b
[a, b] = [1, 2]

//Skip some value
const [a, , b] = [1, 2, 3] // a=1, b=3

//Rest parameter
const [a, ...b] = [1, 2, 3] //a=1, b=[2,3]

//Fail-safe
const [, , , a, b] = [1, 2, 3] // a=undefined, b=undefined

//Swap value
const a = 1, b = 2;
[b, a] = [a, b] //a=2, b=1

//Multi-dimensional array
const [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]

//String
const str = "hello";
const [a, b, c, d, e] = str //a='h',b='e',c='l',d='l',e='o'


function f() {
  return [1, 2, 3];
}
[,,] = f(); //ignore all returned values


/* Object destructuring */

//Basic
const { user: x } = { user: 5 } // x=5

//Fail-safe
const { user: x } = { user2: 5 } //x=undefined

//Assign to new variable name
const { prop: x, prop2: y } = { prop: 5, prop2: 10 } // x=5, y=10

//Value of property
const { prop: prop, prop2: prop2 } = { prop: 5, prop2: 10 } //prop = 5, prop2=10

//Short-hand syntax
const { prop, prop2 } = { prop: 5, prop2: 10 } //prop = 5, prop2=10

//Object Rest/Spread Properties
const {a, b, ...rest} = {a:1, b:2, c:3, d:4} //a=1, b=2, rest={c:3, d:4}


/* Order of variable is regardless in object destructuring */

let props = {a: 1, b: 2, c:3};
const {c, a, b} = props; a=1, b=2, c=3


/* Default values */

let props = {a: 1, b: 2, c:3};
const {a, b, d=4} = props; // a=1, b=2, c not defined, d=4
const {a, b, d} = props; // a=1, b=2, c not defined, d undefined
const {c, a, b} = props; // a=1, b=2, c=3, d undefined


/* Combined Array and Object Destructuring */

const props = [
  { A: 1, a: 'one' },
  { B: 2, b: 'two' },
  { C: 3, c: 'three' }];
const [ ,{ B,b },{c}] = props; 
//A,a undefined, B=2,b='two', C undefined, c='three'


/* Deconstructing an object in prototype chain */

let obj = {a: 1, b: 2};
obj.__proto__.c = 3;
const {a: A, b: B, c: C} = obj;
// A = 1, B=2
// C=3 (Access to the prototype chain)


