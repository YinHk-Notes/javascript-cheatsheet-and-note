## var, let & const 
Always declare JavaScript variables with `var`, `let`, or `const`.

The `var` keyword is used in all JavaScript code from 1995 to 2015.

The `let` and `const` keywords were added to JavaScript in 2015.

If you want your code to run in older browser, you must use `var`.

The `var` statement declares a **function-scoped / locally scoped** or **globally-scoped** variable, **optionally initializing it to a value**.
because its global scope and function scope, it can be used inside the function body everywhere or inside the block everywhere.

The scope is global when a `var` variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

`var` is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

In order to limit the use of variable to specific scope and protect the variable, `let` and `const` exist

```js
function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
```
```js
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2

```
```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError: `y` is not defined
}

foo();
```


### When to use let or const?
If you want a general rule: always declare variables with `const`.

If you think the value of the variable can change, use `let`.

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
