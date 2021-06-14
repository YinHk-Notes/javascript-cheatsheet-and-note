// find length
arr.length

// create an array
let arr = []

// assess an array item
let value = arr[index]

// add item to at the end
arr.push(item) 
let e = arr.push(item) //output: new length of arr 

// remove item from the end
arr.pop() 
let e = arr.pop() //output: the remove item

// remove item from beginning
arr.shift()
let e = arr.shift() //output: the remove item

// add item from beginning
arr.unshift() 
let e = arr.unshift() //output: new length of arr 

// find index of specific item in array
/** 
  *@param fromIndex The index to start the search at. 
  *If the index is greater than or equal to the array's length, -1 is returned, 
  *which means the array will not be searched. If the provided index value is a negative number, 
  *it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. 
  *If the provided index is 0,then the whole array will be searched. Default: 0 (entire array is searched). 
  */
arr.indexOf(searchElement, fromIndex)

// test whether the first item fullfil the test function, or undefined if not found
arr.find((element, index, array) => { ... } )
/*eg: arr = [1,2,3,4,5]
arr.find(currentValue => currentValue >= 3) //return 4
*/

// returns the index of the first element in the array that satisfies the testing function
arr.findIndex((element, index, array) => { ... } )

// Joins two or more arrays, and returns a copy of the joined arrays
arr.concat(array2,array3....)

// copies array elements to another position in the array, overwriting the existing values.
/** 
  *@param target The index position to copy the elements to (the position start to place all the copies!) 
  *If negative, target will be counted from the end.
  *@param start The index position to start copying elements from  (default is 0),If negative, start will be counted from the end.
  *@param end The index position to stop copying elements from (default is array.length),copies up to but not including end
  *If negative, start will be counted from the end.
  */
arr.copyWithin(target, start, end)

// checks whether all elements in an array pass a test function or not
arr.every((element, index, array) => { ... } ) //only return boolean
/*eg: arr = [1,2,3,4,5]
arr.every(currentValue => currentValue >= 0) //return true
arr.every(currentValue => currentValue < 0) //return false
*/

//  changes all elements in an array to a static value
/** 
  *@param value the value to be filled
  *@param start Start index to fill, default 0.
  *@param end The index to stop filling the array (default is array.length),fill up to but not including the end.
  */
arr.fill(value, start, end)

// create an new array with all elements that pass the test function
arr.filter((element, index, array) => { ... } )

// creates a new array with specifying how deep a nested array structure should be flattened
arr.flat()
arr.flat(depth) //optional, default depth = 1
/*eg: arr=[1,2,[3,4,[5,6]]
arr.flat() //output: [1,2,3,4,[5,6]]
arr.flat(2) ////output: [1,2,3,4,5,6]
*/
                                       
// create a new array by applying map(), and then flattening the result by one level.
arr.flatmap() // It is identical to a map() followed by a flat() of depth 1

// execute method once for each element in an array in order.
arr.forEach((element, index, array) => { ... } ) // not create new array

//  determines whether an array contains a specified element
arr.includes(searchElement) //return boolean
arr.includes(searchElement, fromIndex) //optional: fromIndex
     
//  determines whether an object is an array
arr.isArray() //return boolean
                                        
//  creates and returns a new string by concatenating all of the elements in an array 
arr.join()                                       
arr.join(separator) //optional, default separator is comma (,), specified separator string
/* ed: arr=["a","b","c"] 
arr.join() //output: "a,b,c"
arr.join('/') //output: "a/b/c"
arr.join('+') //output: "a+b+c"
*/
                                        
// eturns the last index at which a given element can be found in the array,-1 if it is not present.
arr.lastIndexOf(searchElement, fromIndex)// fromIndex is optional
                                       
//  creates a new array with the results of calling a function for every array element.
/*The map() method creates a new array with the results of calling a function for every array element.
 *The map() method calls the provided function once for each element in an array, in order.
 *element in array passed as a parameter/argument in the callback function.
 *Note: map() does not execute the function for array elements without values.
 *Note: this method does not change the original array.
 */
arr.map((element) => { ... } )                                      

// creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
arr.of(element0, element1, ... , elementN)

// reverse the elements in array  
arr.reverse() //The first array element becomes the last, and the last array element becomes the first.
                      
//  returns the selected elements in an array, as a new array object. 
/**
  *selects the elements starting at the given start argument, 
  *and ends at, but does not include, the given end argument.
  */
arr.slice(start, end)




















