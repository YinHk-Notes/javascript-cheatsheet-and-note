// find length
arr.length

// create an array
let arr = [a,b,c,...] //or
let arr = new Array(a,b,c,...)        

// assess an array item
let value = arr[index]

// returns the Array constructor
Array[Symbol.species]  //function Array()

// iteration
const iterArr = arr[Symbol.iterator]()
console.log(iterArr.next().value) // a,  iterArr.next(): { value: 'a', done: false }
console.log(iterArr.next().value) // b   iterArr.next(): { value: 'b', done: false }
console.log(iterArr.next().value) // c   iterArr.next(): { value: 'c', done: false }

// returns a new Array Iterator object that contains the keys for each index in the array
const iteratorKeys = arr.keys()

for (const key of iteratorKeys) {
  console.log(key)     //key: 0, 1, 2, ...
}

console.log(iteratorKeys.next())   // { value: 0, done: false }
console.log(iteratorKeys.next())   // { value: 1, done: false }
...

// returns a new array iterator object that contains the values for each index in the array
const iteratorValues = arr.values()

for (const value of iteratorValues) {
  console.log(value)   //value: a, b, c, ... 
}

console.log(iteratorValues.next())   // { value: 'a', done: false }
console.log(iteratorValues.next())   // { value: 'b', done: false }
...

// returns a new Array Iterator object that contains the key/value pairs for each index in the array
const iteratorArr = arr.entries()

for (const [key, value] of iteratorArr)
  console.log(key, value)
// 0 'a'
// 1 'b'
// 2 'c'
// ...

console.log(iteratorArr.next())       // { value: [ 0, 'a' ], done: false }
console.log(iteratorArr.next())       // { value: [ 1, 'b' ], done: false }

// add item to at the end
arr.push(item)              //return length of array after element added
let e = arr.push(item)      //output: new length of arr 

// remove item from the end
arr.pop()                   //return the removed element from the array; undefined if the array is empty
let e = arr.pop()           //output: the remove item

// remove item from beginning
arr.shift()                 //return the removed element from the array; undefined if the array is empty
let e = arr.shift()         //output: the remove item

// add item from beginning
arr.unshift(items)          //return length of array after element added
let e = arr.unshift(items)  //output: new length of arr 

// find index of specific item in array
/* 
    fromIndex The index to start the search at. 
    If the index is greater than or equal to the array's length, -1 is returned, 
    which means the array will not be searched. If the provided index value is a negative number, 
    it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched 
    from front to back.If the provided index is 0,then the whole array will be searched. Default: 0 (entire array is searched). 
  */
arr.indexOf(searchElement, fromIndex)
arr.indexOf(searchElement)

// returns the last index at which a given element can be found in the array,-1 if it is not present.
arr.lastIndexOf(searchElement, fromIndex)// fromIndex is optional

// returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
arr.find((element, index, array) => { } )
/*
   eg: arr = [1,2,3,4,5]
   arr.find(currentValue => currentValue > 3) //return 4
 */

// returns the last element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
arr.findLast((element, index, array) => { } )
/*
   eg: arr = [1,2,3,4,5]
   arr.findLast(currentValue => currentValue > 3) //return 5
 */

// returns the index of the first element in the array that satisfies the testing function
arr.findIndex((element, index, array) => { } )
/*
   eg: arr = [1,2,3,4,5]
   arr.findIndex(currentValue => currentValue > 3) //return 3
 */

// returns the index of the last element in the array that satisfies the testing function
arr.findLastIndex((element, index, array) => { } )
/*
   eg: arr = [1,2,3,4,5]
   arr.findLastIndex(currentValue => currentValue > 3) //return 4
 */

// Joins two or more arrays, and returns a copy of the joined arrays
arr.concat(array2,array3....)
/*
   const array1 = ['a', 'b', 'c']
   const array2 = ['d', 'e', 'f']
   const array3 = array1.concat(array2)  //["a", "b", "c", "d", "e", "f"]
   
   other similar methods: 
              arr1.push.apply(arr1, arr2);
              arr1.push(...arr2);
 */

// copies array elements to another position in the array, overwriting the existing values.This methos changes the original array.
/* 

   target: The index position to copy the elements to (the position start to place all the copies!) 
   If negative, target will be counted from the end.
   
   start: The index position to start copying elements from  (default is 0),If negative, start will be counted from the end.
   
   end: The index position to stop copying elements from (default is array.length),copies up to but not including end
   If negative, start will be counted from the end.
   
 */
arr.copyWithin(target, start, end)
/*
  let array = ['a', 'b', 'c', 'd', 'e'];
  //copy to index 1 all elements from index 3 to the end
  array.copyWithin(1, 3);  //[ 'a', 'd', 'e', 'd', 'e' ]
  
  let arr = [1,2,3,4,5,6]
  arr.copyWithin(2, 0);  //[ 1, 2, 1, 2, 3, 4 ]
  arr.copyWithin(2, 3, 5);  //[ 1, 2, 4, 5, 5, 6 ]
 */

// checks whether all elements in an array pass a test function or not
arr.every((element, index, array) => { } ) //only return boolean
/*
   eg: arr = [1,2,3,4,5]
   arr.every(currentValue => currentValue >= 0) //return true
   arr.every(currentValue => currentValue < 0) //return false
 */

// tests whether at least one element in the array passes the test implemented by the provided function.
arr.some((element, index, array) => {})

// changes all elements in an array to a static value
/* 
   value: the value to be filled
   start: Start index to fill, default 0.
   end: The index to stop filling the array (default is array.length),fill up to but not including the end.
 */
arr.fill(value, start, end)
/*
   const arr = [1, 2, 3, 4];
   arr.fill(0, 2, 4);        // [1, 2, 0, 0]
 */

// create an new array with all elements that pass the test function
arr.filter((element, index, array) => { } )
/* 
   let arr = [1,2,3,4,5]
   arr.filter(value => value>=3)      // [3,4,5]
 */

// creates a new array with specifying how deep a nested array structure should be flattened
arr.flat()
arr.flat(depth) //optional, default depth = 1
/*
  eg: arr=[1,2,[3,4,[5,6]]
  arr.flat()         //output: [1,2,3,4,[5,6]]
  arr.flat(2)        //output: [1,2,3,4,5,6]
  //equals to
  arr.flat().flat()  //output: [1,2,3,4,5,6]
 */
                                       
// returns a new array formed by applying a function to each element of the array, then flattening the result by one level.
arr.flatMap((currentValue, index, array) => {})         // It is identical to a map() followed by a flat() of depth 1

//  determines whether an array contains a specified element
arr.includes(searchElement) //return boolean
arr.includes(searchElement, fromIndex) //optional: fromIndex
     
//  determines whether an object is an array
Array.isArray(arr)          //return boolean
                                        
//  creates and returns a new string by concatenating all of the elements in an array, turn array to a string 
arr.join()                                       
arr.join(separator)         //optional, default separator is comma (,), specified separator string
/* 
   ed: arr=["a","b","c"] 
   arr.join()               //output: "a,b,c" ------------> if not sepecify, use default operator ','
   arr.join('')             //output: "abc"   ------------> this method turns items in array into single string
   arr.join('/')            //output: "a/b/c"
   arr.join('+')            //output: "a+b+c"
 */
                                        
// execute method once for each element in an array in order.
arr.forEach((element, index, array) => { } )           // not create new array
/* 
    arr.forEach(element => console.log(element)) 
 */

//  creates a new array with the results of calling a function for every array element.
arr.map((element) =>  ...  )  // or
arr.map((element) => { return ... })
/*
  The map() method creates a new array with the results of calling a function for every array element.
  The map() method calls the provided function once for each element in an array, in order.
  element in array passed as a parameter/argument in the callback function.
  Note: map() does not execute the function for array elements without values.
  Note: this method does not change the original array.
  Note: If an arrow function body is a block, it doesn’t implicitly return anything,will return array of 'undefined'
  1.make the arrow function body an expression by removing { and } or 2.If you use {} inside an arrow function, you must also use a return statement.
  eg: arr.map((element) =>  {...}) return an array like this [undefined, undefined, ...]
 */

// creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
Array.of(element0, element1, ... , elementN)
/*
   Array.of(1, 2, 3); // [1, 2, 3]
   Array.of(7); // [7]
 */

// creates a new, shallow-copied Array instance from an iterable or array-like object.
// create array from array-like object(eg: string, Array, Map, Set...)                     
Array.from(arrayLikeObj)                      
Array.from(arrayLikeObj, (element) => { /* ... */ } )
Array.from(arrayLikeObj, (element, index) => { /* ... */ } )                      
/*
    arrayLikeObj:  An iterable or array-like object to convert to an array.
    mapFn:         (optional)Map function to call on every element of the array.
 */
/*  
    eg:
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]
    
    Array.from('foo')  //["f", "o", "o"]  --------> one of methods to turn string to array
    Array.from([1, 2, 3], x => x + x)
    // Array [2, 4, 6]
    const copy = Array.from(arr)          --------> make copy to arr
 */

// reverse the elements in array  
arr.reverse() //The first array element becomes the last, and the last array element becomes the first. Change original array
                      
//  returns the selected elements in an array, as a new array object. 
arr.slice(start, end)
/*
  selects the elements starting at the given start argument,  and ends at, but does not include, the given end argument.
 */
/*
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    animals.slice(2, 4) // ["camel", "duck"]
    animals.slice(2)    // ["camel", "duck", "elephant"]
 */
                      
// sorts the elements of an array
arr.sort() //functionless, change original array, it sort by the first letter/first digit only
arr.sort((firstElement, secondElement) => { ... }) //optional: with compare function 
arr.sort(function compareFn(a, b) { /* ... */ })   //optional: with compare function 
/* 
   sort() method:
   When sorting alphabetic, no need compareFunction, by default, the sort() method sorts the values as strings in 
   alphabetical and ascending order. If descending order, use sort().reverse(). 
   Alphabet is sorted by comparing first alphabetical chracter.
   compareFunction: 
   Defines an alternative sort order, compareFunction is used when sorting numbers. The function should return 
   a negative, zero, or positive value, depending on the two arguments, 
   eg: function(a, b){return a-b}, function(a, b){return b-a}, function(a, b){return a-b*b},...
   The sort() method compares two values, it sends the values to the compare function, and sorts the values according to the 
   returned (negative, zero, positive) value. when result<0, sort first element before second element, 
   result>0, sort second element before first element.
   ascending order: function(a, b){return a-b}, eg: (a-b) => a-b
   decending order: function(a, b){return b-a}, eg: (b-a) => b-a
 */
                      
// insert or replace element in specific position
/*
  This method changes the original array, and return an array with the removed items.
  
  start: The position(index) to add/remove items, Use negative values to specify the position from the end of the array.
  If greater than the length of the array, no element will be deleted but the method will behave as an adding function, 
  adding as many element as item[n*] provided.
  
  deleteCount[Optional]: number of items at the start from left to right in array to be removed. 
  If set to 0, no items will be removed. If omitted, this method will remove all other elements in the array.
  
  param (item1, item2,...) Optional, the new item(s) to be added to the array  beginning from index, 
  If you do not specify any elements, it only remove elements from the array.
 */
arr.splice(start, deleteCount, item1, item2,...itemN)
/*
  insert item:
  arr.splice(start, 0, item1,item2,...itemN)
  
  replace item:
  arr.splice(start, 1, item)                           //replace one item on start
  arr.splice(start, N, item1,item2,...itemN)           //replace the following N items starting from start 
  
  remove item:
  arr.splice(start, N)                                 //remove the following N items starting from start
  arr.splice(start) / arr.splice(start, arr.length)    //remove all the following items starting from start 
  arr.splice(0)                                        //remove all elments and empty the original array
 */
                                           
// executes a user-supplied "reducer" callback function on each element of the array, from left-to-right
// in order, passing in the return value from the calculation on the preceding element.
// If initialValue is specified, that also causes currentValue to be initialized to the first value in the array.
// If initialValue is not specified, previousValue is initialized to the first value in the array, 
// and currentValue is initialized to the second value in the array. 
/*
    - previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
    - currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
    - currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
 */
arr.reduce(reducer)
arr.reduce((previousValue, currentValue) => {})
arr.reduce((previousValue, currentValue, currentIndex)=>{}, initialValue)    
/* 
      const array = [1, 2, 3, 4]
      const initialValue = 0;
      const sum = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)   //10
 */                                          

// reduceRight is similar to resuce method, but from right-to-left                                        
arr.reduceRight(reducer)
arr.reduceRight((previousValue, currentValue) => {})
arr.reduceRight((previousValue, currentValue, currentIndex)=>{}, initialValue)                                            
                                           
// groups the elements of the calling array according to the values returned by a provided testing function
/* The returned object has separate properties for each group, containing arrays with the elements in the group. 
   Note that the returned object references the same elements as the original array (not deep copies).
   The groupBy() method executes the callbackFn function once for each index of the array, returning a string 
   (or value that can be coerced to a string) indicating the group of the element. 

   element:
    - The value of the current element in the array.
   index Optional:
    - The index (position) of the current element in the array.
   array Optional:
    - The array that groupBy() was called on.
   
   The object returned from the callback indicates the group of the current element. It must be possible to coerce 
   this returned callback value into a string (which will then be used as a property name in the final returned object). 
  */                                           
let result = arr.groupBy((element, index, array) => { })                                           
//eg:
const products = [
  { name: 'apples', category: 'fruits' },
  { name: 'oranges', category: 'fruits' },
  { name: 'potatoes', category: 'vegetables' } ]

const groupByCategory = products.groupBy(product => {
  return product.category;
});
console.log(groupByCategory); 
// {
//   'fruits': [
//     { name: 'apples', category: 'fruits' }, 
//     { name: 'oranges', category: 'fruits' },
//   ],
//   'vegetables': [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// }
                                           
let result = arr.groupBy((element, index, array) => { })                                           
//eg:
const groupByCategory = products.groupByToMap(product => {
  return product.category;
});
console.log(groupByCategory); 
// Map([
//   ['fruits', [
//     { name: 'apples', category: 'fruits' }, 
//     { name: 'oranges', category: 'fruits' },
//   ]],
//   ['vegetables', [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// ])

// returns a string with all the array values, separated by commas.
arr.toString()
                                           

