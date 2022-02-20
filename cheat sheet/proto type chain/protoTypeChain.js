/* Prototypes are the mechanism by which JavaScript objects inherit features from one another.
   All JavaScript objects inherit properties and methods from a prototype, all browsers use "__proto__" to represent proto type */

/* using prototype to add new feature:
   - add new properties (or methods) to all existing objects of a given type
   - add new properties (or methods) to an object constructor */

//eg:
function Person(name, age) {
  this.name = name;
  this.age = age;
}




//get prototype
const 
