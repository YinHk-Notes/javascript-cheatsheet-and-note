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


//seals an object
Object.seal(obj)
/*
- preventing new properties from being added.
- marke all existing properties as non-configurable.
- values of present properties can still be changed as long as they are writable.
*/

//determines if an object is sealed.
Object.isSealed(obj) // return boolean



//removes a property from an object
delete obj.propertyName // use delete operator


