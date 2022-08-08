// returns the type of a variable, object, function or expression
typeof

// return boolean to check if the specified property is in the specified object.
in  
  
// returns boolean to check if the specified object is an instance of the specified object.
instanceof
  
// equal value and equal type
expr1 === expr2

// Logical AND
expr1 && expr2                    //if expr1 true, check for expr2

some_condition && some_action();  //if some_condition is not null/fullfil, then call the function

return expr1 && expr2             // if expr1 true return exp2, else just return expr1

// Logical OR
expr1 || expr2                    // if expr1 false, check for expr2

return exp1 || exp2;              // if expr1 false return expr2, else just return expr1


//Optional chaining (?.)
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)


if ( some_condition )
  some_action();

