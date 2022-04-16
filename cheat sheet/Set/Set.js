/* Set objects are collections of values. You can iterate through the elements of a set in insertion order
   It likes an array, but cannot has duplicated value. A value in the Set may only occur once; it is unique 
   in the Set's collection. Set object lets you store unique values of any type, whether primitive values or object references */

const set = new Set();                          //creates a new Set object
set.size;                                       //returns the number of (unique) elements in a Set

set.add(value);                                 //add value
set.clear();                                    //removes all elements 
set.delete(value);                              //removes a specified value
set.has(value);                                 //returns a boolean indicating whether an element with the specified value exists

//executes a provided function once for each value in the Set object, in insertion order
set.forEach(() => { /* ... */ } );
set.forEach((value) => { /* ... */ } );
set.forEach((value, key) => { /* ... */ } );
set.forEach((value, key, set) => { /* ... */ } );

const setIter = set1[Symbol.iterator]();        //returns a new Iterator object that contains the values for each element in the Set object in insertion order
const valIter = set.values();                   //returns a new Iterator object that contains the values for each element in the Set object in insertion order
const entryIter = set.entries();                //returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order


