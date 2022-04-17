// The WeakSet object lets you store weakly held objects in a collection
// WeakSet objects are collections of objects. Just as with Sets, each object in a WeakSet may occur 
// only once; all objects in a WeakSet's collection are unique

/* differences between the Set and weakset object are:
    - WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as Sets can
    - The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object 
      stored in the WeakSet exist, those objects can be garbage collected
  */

const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained
