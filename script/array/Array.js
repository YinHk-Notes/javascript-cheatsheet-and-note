//array method

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
/** @fromIndex: The index to start the search at. 
  *If the index is greater than or equal to the array's length, -1 is returned, 
  *which means the array will not be searched. If the provided index value is a negative number, 
  *it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, 
  *then the whole array will be searched. Default: 0 (entire array is searched). */
arr.indexOf(searchElement, fromIndex)

// test whether the each item fullfil the test function
find(callbackFunction)
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )













