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
arr.indexOf(searchElement)
/** 
  *@param fromIndex: The index to start the search at. 
  *If the index is greater than or equal to the array's length, -1 is returned, 
  *which means the array will not be searched. If the provided index value is a negative number, 
  *it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. 
  *If the provided index is 0,then the whole array will be searched. Default: 0 (entire array is searched). 
  */
arr.indexOf(searchElement, fromIndex)

// test whether the each item fullfil the test function, or undefined if not found
arr.find((element, index, array) => { ... } )

// returns the index of the first element in the array that satisfies the testing function
arr.findIndex((element, index, array) => { ... } )

// Joins two or more arrays, and returns a copy of the joined arrays
arr.concat(array2,array3....)

// copies array elements to another position in the array, overwriting the existing values.
/** 
  *@param target The index position to copy the elements to, If negative, target will be counted from the end.
  *@param start The index position to start copying elements from  (default is 0),If negative, start will be counted from the end.
  *@param end The index position to stop copying elements from (default is array.length),copies up to but not including end
  *If negative, start will be counted from the end.
  */
arr.copyWithin(target, start, end)








