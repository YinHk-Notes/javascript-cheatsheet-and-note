/* Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value 
   or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique property keys 
   to an object that won’t collide with keys any other code might add to the object, and which are hidden 
   from any mechanisms other code will typically use to access the object. */

//create a new primitive Symbol
let sym = Symbol()
let sym2 = Symbol(description)

//convert symbol to an object
let sym = Symbol('foo')
typeof sym      // "symbol"
let symObj = Object(sym)
typeof symObj   // "object"


//Finding Symbol properties on objects
Object.getOwnPropertySymbols(obj)         //returns an array of all symbol properties found directly upon a given object

Symbol.asyncIterator       //returns the default AsyncIterator for an object
Symbol.hasInstance         //determine if a constructor object recognizes an object as its instance
Symbol.isConcatSpreadable  //a Boolean value indicating if an object should be flattened to its array elements
Symbol.iterator            //returning the default iterator for an object
Symbol.match               //method that matches against a string, also used to determine if an object may be used as a regular expression
Symbol.matchAll            //returns an iterator, that yields matches of the regular expression against a string
Symbol.replace             //replaces matched substrings of a string
Symbol.search              //returns the index within a string that matches the regular expression
Symbol.split               //splits a string at the indices that match a regular expression
Symbol.species             //constructor function that is used to create derived objects
Symbol.toPrimitive         //converting an object to a primitive value
Symbol.toStringTag         //string value used for the default description of an object

//method

Symbol.for(key)            //returns existing symbol with the given key if found, otherwise, a new symbol is created and returned
Symbol.keyFor(sym)         //retrieves a shared symbol key from the global symbol registry for the given symbol

sym.toString()             //returns a string representing the specified Symbol object
sym.valueOf()              //returns the primitive value of a Symbol object
sym[Symbol.toPrimitive]()  //method converts a Symbol object to a primitive value


