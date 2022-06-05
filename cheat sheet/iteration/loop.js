//for loop
for(Initialization; Condition; Increment/decrement){  
  //code  
} 

//eg:
for(let i=0; i<=arr.length-1; i++){  
  //...  
} 

// for...of loop
// iterating over iterable objects (including Array, Map, Set, arguments object and so on)
// for..of is a method, introduced in ES2015, for iterating over "iterable collections". 
// These are objects that have a [Symbol.iterator] property.
for(const item of iterableObject) {
  //... do stuff
}

// for...in loop
// iterates a specified variable over all the enumerable properties of an object.
// for..in is a method for iterating over "enumerable" properties of an object.
// We can check if a property is enumerable by calling property.enumerable,
for(const property in obj) {
  //... do stuff
  console.log(obj[property])
}

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

//eg:
while (true) {  
  //...
}  

//do while loop
do {  
  //... 
} while (condition);


