## use strict
"use strict"; Defines that JavaScript code should be executed in "strict mode"

The "use strict" directive was new in ECMAScript version 5.

The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".

### Why strict mode?
Strict mode changes previously accepted **"bad syntax" into real errors**.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

### Not Allowed in Strict Mode
- With strict mode, you can not, for example, use undeclared variables.
  ```js
   'use strict';
    x = 99;
   // Uncaught ReferenceError: auntie is not defined
  ```
  ```js
    (function () {
      'use strict';
      x = 99;
      // Uncaught ReferenceError: auntie is not defined
    })();
  ```
  ```js
    (function () {
      'use strict';
    })();
    x = 99;
    //No error catched
  ```
  ```js
      (function () {
        var x;
       'use strict';  // 無效
       y = 99;
      })();
      // use strict only be effective when on the top
  ```
- Using an object, without declaring it, is not allowed.
  ```js
     "use strict";
     x = {p1:10, p2:20};      // This will cause an error
  ```
- Deleting a variable (or object) is not allowed.
- Deleting a function is not allowed.
- Duplicating a parameter name is not allowed
- Octal numeric literals are not allowed
- Octal escape characters are not allowed
- Writing to a read-only property is not allowed
  ```js
     "use strict";
     const obj = {};
     Object.defineProperty(obj, "x", {value:0, writable:false});
     obj.x = 3.14;            // This will cause an error 
  ```
- Writing to a get-only property is not allowed
  ```js
     "use strict";
     const obj = {get x() {return 0} };
     obj.x = 3.14;            // This will cause an error
  ```
- Deleting an undeletable property is not allowed
- The word eval cannot be used as a variable
- The word arguments cannot be used as a variable
- The with statement is not allowed
- For security reasons, eval() is not allowed to create variables in the scope from which it was called
- The this keyword in functions behaves differently in strict mode. The this keyword refers to the object that called the function. If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window).
  ```js
    "use strict";
    function myFunction() {
      alert(this); // will alert "undefined"
    }
    myFunction();
  ```

     
     
