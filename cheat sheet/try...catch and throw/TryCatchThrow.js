//marks a block of statements to try and specifies a response should an exception be thrown.

try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}

/* 
try_statements:    statements to be executed.
catch_statements:    Statement that is executed if an exception is thrown in the try-block.
exception_var:       Optional identifier to hold an exception object for the associated catch-block.
finally_statements:   Statements that are executed after the try statement completes. These statements execute regardless of 
whether an exception was thrown or caught.


3 forms for the try statement:

try...catch
try...finally
try...catch...finally

Remarks:   cannot present try only, at least one catch-block, or a finally-block, must be present.
*/


//throw statement throws a user-defined exception.
throw expression
/*
expression:  The expression to throw.
remarks: 
- Execution of the current function will stop (the statements after throw won't be executed)
- control will be passed to the first catch block 
-  If no catch block exists among caller functions, the program will terminate.
*/

// throw an exception, expression specifies the value of the exception. eg:

throw 'Error2'; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
throw new Error('Required');  // generates an error object with the message of Required


