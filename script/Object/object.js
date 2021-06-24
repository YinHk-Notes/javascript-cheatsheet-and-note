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
Object.defineProperty(obj,propertiesObject) 
Object.defineProperties(obj,propertiesObject) //for more than one
/* 
propertiesObject = {
  property1: {...},property2:{...},proerty3:{...},... }
each property has descriptor, which is desdcription of properties optionally contain the following keys:
configurable: bool  //default false, determine this property descriptor may be changed and if the property may be deleted from the corresponding object.
enumberable: bool   //default false, determine property shows up during enumeration of the properties on the corresponding object.
value: any          //default undefined
writable: bool      //default false, determine associated with the property may be changed with an assignment operator.
get: function       //default undefined, return value will be used as the value of the property.
set: function       //default undefined, receive as its only argument the new value being assigned to the property.
*/


// returns an object describing the configuration of a specific property on a given object 
Object.getOwnPropertyDescriptor(obj, propertyName) // propertyName is string form
/*
let obj = { a:99, b:'hello', c:true }
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a')
console.log(descriptor) // console: { value: 99, writable: true, enumerable: true, configurable: true }
*/

//returns all own property descriptors of a given object.
Object.getOwnPropertyDescriptors(obj)


//returns an array of all properties name(string)
Object.getOwnPropertyNames(obj)


//freezes an object. A frozen object can no longer be changed
Object.freeze(obj) // can not change values and change/add/remove properties in frozen object


//create an array of a given object's own enumerable string-keyed property [key, value], list of key-value pairs.
Object.entries(obj) 
/*
return an array like [ ["key1","value1"], ["key2","value2"],... ]
eg:
let obj = { a:99, b:'hello', c:true }
console.log( Object.entries(obj) )  // console: [ ["a",99], ["b","hello"], ["c",true] ]
*/


//transforms a list of key-value pairs into an object.
/* 
 *performs the reverse of Object.entries().
 *@param iterable An iterable such as Array or Map or other objects implementing the iterable protocol.
 */
Object.fromEntries(iterable)
/*
let obj = Object.fromEntries([ ["a",99], ["b","hello"], ["c",true] ])
console.log(obj)  // console: { a:99, b:'hello', c:true }
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












