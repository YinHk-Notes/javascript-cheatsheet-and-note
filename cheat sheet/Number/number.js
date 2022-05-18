/* Number is a primitive wrapper object used to represent and manipulate numbers */

//create a number object
const num = new Number(value)


Number.MAX_SAFE_INTEGER                   //2^53 - 1
Number.MAX_VALUE                          //represents the maximum numeric value representable in JavaScript. [ 1.7976931348623157e+308 ]

Number.MIN_SAFE_INTEGER                   //-(2^53 - 1)
Number.MIN_VALUE                          //represents the smallest positive numeric value representable in JavaScript. [ 5e-324 ]

Number.NaN                                //Not-A-Number
Number.NEGATIVE_INFINITY                  //same as the negative value of the global object's Infinity property. [ -Infinity ]
Number.POSITIVE_INFINITY                  //same as the value of the global object's Infinity property. [ Infinity ]


//methods
Number.isFinite(value)                    //determines whether the passed value is a finite number 
Number.isInteger(value)                   //determines whether the passed value is an integer
Number.isNaN(value)                       //determines whether the passed value is NaN and its type is Number
Number.isSafeInteger(testValue)           //determines whether the provided value is a number that is a safe integer
Number.parseFloat(string)                 //parses an argument and returns a floating point number
Number.parseInt(string)                   //parses an argument and returns a integer 
Number.parseInt(string, radix)            //parses a string argument and returns an integer of the specified radix or base
num.toExponential()                       //returns a string representing the Number object in exponential notation
num.toExponential(fractionDigits)         //with number of digit after the decimal point.
num.toFixed(digits)                       //formats a number to exactly digits after the decimal place. 
num.toLocaleString(locales, options)      //returns a string with a language-sensitive representation of this number
num.toPrecision(precision)                //returns a string representing the Number object to the specified precision, precision Optional: an integer specifying the number of significant digits

num.toString()                            //returns a string representing the specified Number object
num.valueOf()                             //returns the wrapped primitive value of a Number object


