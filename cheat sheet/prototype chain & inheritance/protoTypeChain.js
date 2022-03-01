/* JavaScript is prototype-base-oriented language, there is no class inheritance in JavaScript.
   Prototypes are the mechanism by which JavaScript objects inherit features from one another.
   All JavaScript objects inherit properties and methods from its prototype. */


// [[Prototype]] 
// This is a special hidden property that exists on every object in JavaScript, it holds a reference to the object’s prototype.
// The value of this property is always either null or name of another object.
// [[Prototype]] is null it means that the object doesn’t inherit from any other object.
// Objects have a private property called [[Prototype]] that points to that object’s prototype.
// The value is a name of another object it means that the object’s prototype references another object.
// You only read it from this hidden property, and not allow to modify the value from this property.
// Use console.dir() to check this hidden property in console in chrome.


// __proto__ 
// It is a default property added to every object. This property points to the prototype of an object.
// It is a method that exposes the hidden [[Prototype]] property and allows you to modify it.
// It is not the same thing to [[Prototype]], __proto__ is a setter and getter for [[Prototype]] property.
// You can use them to change the prototype of an object.
// __proto__ is in all object in JavaScript and must point to its prototype(constructor/the property of object it inherits form). 
// The value of .__proto__ must be a prototype.

// get the prototype of object
let obj = {}
obj.__proto__              //Object.prototype
obj.__proto__.__proto__    //null

// set prototype to another object for inheritance 
const baseObj = {}
const newObj = {}
newObj.__proto__ = baseObj  //newObj inherit from baseObj, by setting newObj prototype to baseObj

// Note: Object.prototype.__proto__ is deprecated and not a standard.
// Try to use the following methods for get and set instead
Object.getPrototypeOf(obj)                //get method
Object.setPrototypeOf(obj, prototype)     //set method


// .prototype
// .prototype provides a blueprint for constructing an instance.
// It is a special property that functions used when it used as a constructor function.
// .prototype point to the constructor itself.
/* .prototype let you add properties (or methods) to the constructor function and the instances will inherit those new features.
   using prototype to add new feature:
   - add new properties (or methods) to all existing objects of a given type
   - add new properties (or methods) to an object constructor */

// 
// eg:
function Phone(brand, model, price){
    this.brand = brand
    this.model = model
    this.price = price 
}
console.dir(Phone)     // prototype: {constructor: ƒ}


// constructor
// A constructor function is like an object factory that creates new objects which are instances of itself.
// It likes a blueprint for creating different instances.
// Any object instances created by a constructor function will inherit the properties of the object at [FunctionName].prototype.



// prototype chain
// Almost all objects inherit properties and methods from their prototypes.
// 


//example:
function Phone(brand, model, price){                           // constructor function
    this.brand = brand
    this.model = model
    this.price = price
}                                                              
console.dir(Phone)                                             // with the 'prototype' property in this constructor function
Phone.__proto__                                                // Function.prototype,  ƒ () { [native code] } 
Function.prototype.isPrototypeOf(Phone)                        // true
typeOf(Phone)                                                  // 'function'
Phone.prototype                                                // prototype of all instances of the Phone constructor
console.dir(Phone.prototype)                                   // with the 'constructor' property points to the constructor function of all instances inherit from this 
Phone.prototype.__proto__                                      // Object.prototype
Object.prototype.isPrototypeOf(Phone.prototype)                // true
Phone.prototype.type = 'mobile'                                // add new property and all instances of its constructor inherit from this
Phone.prototype.type = 'smart phone'                           // change the property and all instances also inherit from this change
typeOf(Phone.prototype)                                        // 'object'
Phone.type                                                     // undefined
Phone.hasOwnProperty('type')                                   // false
Phone.__proto__                                                // Object.prototype
const iPhone = new Phone('Apple', 'iPhone13 Pro 128GB', 4500)  // an instance of the Phone contructor
typeOf(iPhone)                                                 // 'object'
iPhone.hasOwnProperty('brand')                                 // true
iPhone.hasOwnProperty('model')                                 // true
iPhone.hasOwnProperty('price')                                 // true
iPhone.hasOwnProperty('type')                                  // false
iPhone.type                                                    // smart phone
Phone.isPrototypeOf(iPhone)                                    // false
iPhone.__proto__                                               // Phone.prototype
Phone.prototype.isPrototypeOf(iPhone)                          // true


