//create an object:
let obj = new Object() //then assign property & value to it
obj.a=99
obj.b='hello'
obj.c=true   //or
let obj = new Object(value)  //value can be any,   or
let obj = { a:99, b:'hello', c:true }


//Merge一個或多個source object內的key & value到target object內 
Object.assign(target, ...sources)
/*
Merge multiple sources:
let obj = Object.assign({a: 0}, {b: 1}, {c: 2});
console.log(obj)  //console: { a: 0, b: 1, c: 2 }

Merge and overwrite equal keys:
let obj = Object.assign({a: 0}, {b: 1}, {c: 2}, {c: 3}, {c: 4}, {d: 5});
console.log(obj)  //console: { a: 0, b: 1, c: 4, d: 5 }
//如果有相同的keys則會merge最新的value,overwrite舊的value

Clone an object:
let obj = {a:99, b:'hello', c:false}
let cloneObj = Object.assign({}, obj)   //cloneObj === obj
*/



//create an array of a given object's own enumerable property names
Object.keys(obj) //output: create an array  ["a", "b", "c"]
/*
simple array:
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));  // console: ['0', '1', '2']

array-like object:
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));  // console: ['0', '1', '2']

array-like object with random key ordering:
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));  // console: ['2', '7', '100']
*/
