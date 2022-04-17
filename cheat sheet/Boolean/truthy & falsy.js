//Falsy
//falsy values in JavaScript:
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")

//The logical AND operator, &&
// If the first object is falsy, it returns that object
  
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0


//Truthy
//truthy values in JavaScript 
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
  
//The logical AND operator, &&
//If the first object is truthy, the logical AND operator returns the second operand
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
  
  
