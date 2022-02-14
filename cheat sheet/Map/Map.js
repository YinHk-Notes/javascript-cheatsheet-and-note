/* Map object holds "key-value pairs" and remembers the original insertion order of the keys 
Any value (both objects and primitive values) may be used as either a key or a value. */ 

let map = new Map();                      //create a Map object
map.size;                                 //returns the number of elements in the Map

map.clear();                              //removes all elements
map.delete(key);                          //removes the specified key from the Map
map.set(key, value);                      //Adds or updates an element with a specified key and a value to the Map
map.get(key);                             //returns a value from a specified key
map.has(key);                             //returns boolean whether containing specified key

//executes a provided function once per each key/value pair in the Map
map.forEach(() => { /* ... */ });
map.forEach((value) => { /* ... */ } );
map.forEach((value, key) => { /* ... */ } );
map.forEach((value, key, map) => { /* ... */ } );

const mapEntry = map.entries();           //returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
const mapIter = map[Symbol.iterator]();   //returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order

const keyIter = map.keys();               //returns a new Iterator object that contains the keys for each element in the Map object in insertion order
const valIter = map.values();             //returns a new Iterator object that contains the values for each element in the Map object in insertion order


