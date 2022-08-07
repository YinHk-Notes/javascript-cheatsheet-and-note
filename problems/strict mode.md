## use strict
"use strict"; Defines that JavaScript code should be executed in "strict mode"

The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".

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
