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

//The logical OR operator, ||
//if expr1 is truthy, returns expr1; else, returns expr2
expr1 || expr2

//eg:
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
o10 = false || varObject // f || object returns varObject


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
  
  
