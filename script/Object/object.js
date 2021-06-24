//create an object:
let obj = new Object() //then assign property & value to it
obj.a=99
obj.b='hello'
obj.c=true   //or
let obj = new Object(value)  //value can be any,   or
let obj = { a:99, b:'hello', c:true }


//defines new or modifies existing properties in an object
/*
 *@param obj The object on which to define or modify properties.
 *@param propertiesObject An object whose keys represent the names of properties to be defined or modified and whose values are 
 *objects describing those properties.
 *@param propertiesObject An object whose keys represent the names of properties to be defined or modified and 
 *whose values are objects describing those properties
 */
Object.defineProperties(obj,propertiesObject)
/* 
propertiesObject = {
  property1: {...},property2:{...},proerty3:{...},... }
desdcription of properties optionally contain the following keys:
configurable: bool  //default false, determine this property descriptor may be changed and if the property may be deleted from the corresponding object.
enumberable: bool   //default false, determine property shows up during enumeration of the properties on the corresponding object.
value: any          //default undefined
writable: bool      //default false
get: function       //default undefined
set: function       //default undefined
*/




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
let cloneObj = Object.assign({}, obj)   // cloneObj === obj

Assign enumerable properties:
let a = 99
let b = 'javascript'
let c = false
let d = null
let e = undefined
let f = (param)=>param
let g = new Array(123,9999)   
let h = new Object() 
let obj = Object.assign({},a,b,c,d,e,f,g,h)  // target: b, source: g
console.log(obj)  // console: { 0: 123, 1: 9999, 2: "v", 3: "a", 4: "s", 5: "c", 6: "r", 7: "i", 8: "p", 9: "t" }
*/


//creates a new object, using an existing object as the prototype
let newObj = Object.create(obj)  //obj is prototype object
let newObj = Object.create(obj,propertiesObject) // optional: propertyObject
/* 
-the new object inherite the property of prototype object and inherited properties can be overwritten.
-propertiesObject is an object whose keys represent the names of properties to be defined or modified and 
 whose values are objects describing those properties.
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

