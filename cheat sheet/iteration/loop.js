/*

Looping in array

- double for loop
    - i, j
    - i, j=i+1
- loop from bothside,   i, length-i

*/

//for loop
for(Initialization; Condition; Increment/decrement){  //setting condition for looping, eg some item want to be skipped
  //code  
} 

//eg:
for(let i=0; i<=arr.length-1; i++){  
  //...  
} 

// for...of loop
// iterating over iterable objects (including Array, Map, Set, arguments object, array-liked object and so on)
// for..of is a method, introduced in ES2015, for iterating over "iterable collections". 
// These are objects that have a [Symbol.iterator] property.
// The for..of syntax is essentially a wrapper around the [Symbol.iterator] to create loops.
// The for..of loop doesn't work with Objects because they are not "iterable", 
// and therefore don't have a [Symbol.iterator] property.
// The for..of loop works well with Arrays and Strings, as they are iterable.
for(const item of iterableObject) {
  //... do stuff
  console.log(item)
}

// for...in loop
// iterates a specified variable over all the enumerable properties of an object.
// for..in is a method for iterating over "enumerable" properties of an object.
// We can check if a property is enumerable by calling property.enumerable.
// The indexes are enumerable properties, therefor it works for both array and string.
for(const property in obj) {
  //... do stuff
  console.log(obj[property])
}


/* for...of loop vs for...in loop */
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−------------+
|                    |             for..in            |            for..of          |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−------------+
|    Applies to      |       Enumerable Properties    |     Iterable Collections    |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−------------−−+
|  Use with Objects? |             Yes                |             No              |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−------------−−+
|  Use with Arrays?  |             Yes                |             Yes             |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−------------−−+
|  Use with Strings? |             Yes                |             Yes             |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−------------−−+


//for await...of loop
/*a loop iterating over async iterable objects as well as on sync iterables, for await...of doesn't work 
  with async iterators that are not async iterables. This statement can only be used inside an async function.*/
for await (const variable of iterable) {
  //...
}

//eg:
async function* asyncGenerator(){
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function(){
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2


//while loop
while (condition) {  
  //code 
}  

// infinite loop
while (true) {  
  //...
}  

//do while loop
do {  
  //... 
} while (condition);


