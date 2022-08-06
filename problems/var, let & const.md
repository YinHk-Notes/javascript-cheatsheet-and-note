## var, let & const 

### decalre let & const 
```js
let variable_name;
let variable_name = initialization;
const variable_name = initialization;
```

> **Note: after declaration, you can't modify or update the initial value in `const`, so it must be initialized in the same line with decalaration** 

### declare multiple variables in the same line
example:
```js
var x
    ,y
    ,z;
let x=value1
    ,y=value2
    ,z=value3;
const x=value1
    ,y=value2
    ,z=value3;
```

### var, let, and const – What's the Difference?
```
👉🏼  var: can be re-declared and updated + global scope / global scope.
```
```
👉🏼  let: can be updated but not re-declared + blocked scope.
```
```
👉🏼  const: cannot be updated or re-declared + blocked scope 
    + must be initialized at the time of declaration (read-only).
```

- **var** declarations are **globally scoped** or **function scoped** while **let** and **const** are **block scoped**.
- **var** variables can be **updated** and **re-declared** within its scope;  **let** variables can be updated but not **re-declared**;   **const** variables can neither be **updated** nor **re-declared.**
- They are all hoisted to the top of their scope. But while **var** variables are initialized with undefined, **let** and **const** variables are not initialized.
- While **var** and **let** can be **declared** without being initialized,  **const** **must be** initialized during **declaration**.
- However, you can **change/add** the **properties** of a **constant/let** object
