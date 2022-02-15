/* Error objects are thrown when runtime errors occur. 
   The Error object can also be used as a base object for user-defined exceptions
 */

var e = new Error()
var e = new Error(message)
var e = new new Error(message, options)               //options is object with 'cause' as property


e.message                                             //a human-readable description of the error
e.name                                                //a name for the type of error, default name is 'Error'
/* By default, Error instances are given the name "Error". The name property, in addition to 
the message property, is used by the Error.prototype.toString() method to create a string representation 
of the error */

//eg:
var err = new Error('Malformed input'); // e.name is 'Error'
err.name = 'ParseError';
throw err;
// err.toString() would return 'ParseError: Malformed input'

e.toString()                                          //returns a string: `e.name: e.message`

//eg:
var e = new Error('new error message')
e.name = 'custom error'
console.log(e.toString()) //custom error: new error message


//throw error
try {
  //...
} catch(err) {
  throw new Error(message, options)
}


//eg:
try {
   //...
} catch(err) {
    throw new Error('New error message', { cause: err })
}


//other error type object
var e = new EvalError(message, fileName, lineNumber)
var e = new RangeError(message, fileName, lineNumber)
var e = new ReferenceError(message, fileName, lineNumber)
var e = new SyntaxError(message, fileName, lineNumber)
var e = new TypeError(message, fileName, lineNumber)
var e = new URIError(message, fileName, lineNumber)










