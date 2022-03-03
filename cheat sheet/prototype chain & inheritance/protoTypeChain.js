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
const baseObj = { //properties or methods }
const newObj = {}
newObj.__proto__ = baseObj  //newObj inherit properties(or methods) from baseObj, by setting newObj prototype to baseObj

// Note: Object.prototype.__proto__ is deprecated and not a standard.
// Try to use the following methods for get and set instead
Object.getPrototypeOf(obj)                //get method
Object.setPrototypeOf(obj, prototype)     //set method


// .prototype
// .prototype provides a blueprint for constructing an instance/object.
// It is a special property that functions used when it used as a constructor function, use console.dir() can check that property in chrome console. 
// .prototype is an object and it likes a blueprint for constructor function creating a new object which inherit additional properties from that blueprint.
/* .prototype let you add properties (or methods) to the constructor function and the instances will inherit those new features.
   using prototype to add new feature:
   - add new properties(or methods) to all existing objects of a given type
   - add new properties(or methods) to an object constructor */
// eg
function User(name, password) {
    this.name = name
    this.password = password
}
User.prototype.accountInfo = function() { onsole.log("name:" + this.name + " " + "password" + this.password) }
const myAccount = new User('John', 'abc123#')
myAccount.accountInfo()                                             // name:John password:abc123#


// constructor
// A constructor function is like an object factory that creates new objects which are instances of itself.
// It likes a blueprint for creating different instances.
// Any object instances created by a constructor function will inherit the properties of the object at [FunctionName].prototype.
// JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.
// In a constructor function this does not have a value.

// create an object with 'new' keyword, assign value to the constructor function.
// eg
const Android = new Phone('Samsung', 'Galaxy', 3000)             // an object


// prototype chain 
// Prototype is an object
// A prototype chain is a finite chain of objects which is used to implement inheritance and shared properties.
// Almost all objects inherit properties and methods from its prototype object.
// Each object has its own prototype, the prototype object also has its prototype, and so on until prototype points to null, that is so called prototype chain.
// Object is the built-in constructor function that almost all objects in JavaScript are instances of.
// Object.prototype is the most basic prototype, and that all objects have by default, all objects inherit from the object referenced by its.
// Object.prototype is an object at the top and prototype of Object.prototype is null, so it's at the end of the prototype chain.
/*   
     ...-> obj.__proto__ -> Object.prototype -> null 
   
     arr._proto__ -> Array.prototype -> Object.prototype -> null
   
     doSomething.__proto__ -> Function.prototype -> Object.prototype -> null
 */


//example:
function Phone(brand, model, price){                           // constructor function
    this.brand = brand
    this.model = model
    this.price = price
}                                                              
console.dir(Phone)                                             // check with the 'prototype' property in this constructor function
Phone.__proto__                                                // Function.prototype,  ƒ () { [native code] } 
Function.prototype.isPrototypeOf(Phone)                        // true
typeof(Phone)                                                  // 'function'
Phone.prototype                                                // prototype of all instances of the Phone constructor
console.dir(Phone.prototype)                                   // check with the 'constructor' property which points to the constructor function of all instances inherit from this 
Phone.prototype.__proto__                                      // Object.prototype
Object.prototype.isPrototypeOf(Phone.prototype)                // true
Phone.prototype.type = 'mobile'                                // add new property and all instances of its constructor inherit from this
Phone.prototype.type = 'smart phone'                           // change the property and all instances also inherit from this change
typeof(Phone.prototype)                                        // 'object'
Phone.type                                                     // undefined
Phone.hasOwnProperty('type')                                   // false
Phone.__proto__                                                // Object.prototype
const iPhone = new Phone('Apple', 'iPhone13 Pro 128GB', 4500)  // an instance of the Phone contructor
typeof(iPhone)                                                 // 'object'
iPhone.hasOwnProperty('brand')                                 // true
iPhone.hasOwnProperty('model')                                 // true
iPhone.hasOwnProperty('price')                                 // true
iPhone.hasOwnProperty('type')                                  // false
iPhone.type                                                    // smart phone
Phone.isPrototypeOf(iPhone)                                    // false
iPhone.__proto__                                               // Phone.prototype
Phone.prototype.isPrototypeOf(iPhone)                          // true


let arr = [1,2,3]                                              // object, an instance of Array
arr instanceof Array                                           // true
console.dir(Array)                                             // Array is a constructor function with the 'prototype' property, ƒ Array()
typeof(Array)                                                  // 'function'
arr.__proto__                                                  // Array.prototype
Array.prototype                                                // prototype of all arrays 
Array.prototype.isPrototypeOf(arr)                             // true
console.dir(Array.prototype)                                   // check with the 'constructor' property which points to constructor function - Array,  ƒ Array()        
typeof(Array.prototype)                                        // 'object'
Array.prototype.__proto__                                      // Object.prototype
typeof(Array.prototype.__proto__)                              // 'object'    
Object.prototype.isPrototypeOf(Array.prototype)                // true


function doSomething() {}                                      // simple function
console.dir(doSomething)                                       // check with the 'prototype' property in this function
typeof(doSomething.prototype)                                  // 'object'
doSomething.__proto__                                          // Function.prototype, ƒ () { [native code] }
Function.prototype.isPrototypeOf(doSomething)                  // true
typeof(Function)                                               // 'function'
typeof(Function.prototype)                                     // 'object'
Function.prototype.__proto__                                   // Object.prototype
Object.prototype.isPrototypeOf(Function.prototype)             // true


// prototype inheritance <--> ES6 class inheritance 

// prototype inheritance
function Engineer(name, skill) {
  Person.call(this, name)
  this.skill = skill
}
Engineer.prototype = Object.create(Person.prototype)
Engineer.prototype.constructor  = Engineer

let alice = new Engineer('Alice', 'JavaScript')
alice.hello()     // Hello Alice

Person.prototype.hello = function () {       // modify prototype
  console.log(`Bye ${this.name}.`)
}

gary.hello() // Bye Gary
alice.hello() // Bye Alice

// change to ES6 class inheritance
class Person {
  constructor (name){
    this.name = name
  }
  hello() {
    console.log(`Hello ${this.name}.`)
  }
}

class Engineer extends Person {
  constructor (name, skill){
    super(name)            // call Person constructor
    this.skill = skill
  }
   hello() {
    console.log(`Bye ${this.name}.`)
  }
}

let alice = new Engineer('Alice', 'JavaScript')
alice.hello()              // Bye Alice


