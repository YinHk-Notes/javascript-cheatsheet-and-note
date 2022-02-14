//for loop
for(Initialization; Condition; Increment/decrement){  
  //code  
} 

//eg:
for(let i=0; i<=arr.length-1; i++){  
  //...  
} 

//for...of loop
for(const element of array) {
  //...
}

//for...in loop
for(const property in object) {
  //...
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

