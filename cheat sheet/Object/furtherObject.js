//determines if two values are the same value.
Object.is(value1, value2)  //return boolean

//determines if an object is extensible (whether it can have new properties added to it).
Object.isExtensible(obj)  //return boolean

//prevents future extensions to the object(prevent new properties being added to an object forever)
Object.preventExtensions(obj)

//determine if an object is frozen.
Object.isFrozen(obj)  //return boolean

//checks if an object exists in another object's prototype chain.(check if it is prototype of other object or not)
obj.isPrototypeOf(newObj)  // return boolean

//whether the specified property is enumerable 
obj.propertyIsEnumerable(propertyName) // propertyName is string name

//seals an object
Object.seal(obj)
/*
- preventing new properties from being added or delete
- marke all existing properties as non-configurable.
- values of present properties can still be changed as long as they are writable.
*/

//determines if an object is sealed.
Object.isSealed(obj) // return boolean

//add a property to an object
obj.newPropertyName = value 

//removes a property from an object
delete obj.propertyName // use delete operator

//change value of property 
obj.propertyName = newValue

//sets the prototype of a specified object to another object
Object.setPrototypeOf(obj, prototype)
/*
obj: object which is to have its prototype set.
prototype: object's new prototype
*/

//create an array of a given object's own enumerable property values,
Object.values(obj)
/*
let obj = { a:99, b:'hello', c:true }
console.log(Object.values(obj)) // console: [99, "hello", true]
*/

//returns a string representing the object.
obj.prototype.toString()

//returns the primitive value of the specified object.
obj.prototype.valueOf()


