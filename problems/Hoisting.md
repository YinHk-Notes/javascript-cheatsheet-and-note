## Hoisting
> **Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current scope. 
> 
> JavaScript Hoisting refers to the process whereby the interpreter appears to move **the declaration of functions, variables or classes** to the top of their scope, prior to execution of the code.

- Hoisting allows functions to be safely used in code before they are declared.
- Function and class declarations are also hoisted.

### Variable hoisting
You can use a variable in code before it is declared and/or initialized.

```js
x = 5; 
y = 7;

console.log(x + y);  //12

var y;
var x;
```

If not declared, it assume `var`
```js
x = 5;
console.log(x);
```
### Hoisting in `let` and `const`
> Variables defined with let and const are hoisted to the top of the block, but not initialized.
The block of code is aware of the variable, but it **cannot be used until it has been declared**. Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

```js
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

Using a let variable before it is declared will result in a ReferenceError.
```js
x = 5;
let x;
//ReferenceError: Cannot access 'x' before initialization

y;
let y = 99;
//ReferenceError: y is not defined
```
Using a const variable before it is declared, is a syntax errror.
```js
x = 5;
const x;
//SyntaxError: Missing initializer in const declaration.

y;
const y = 99;
//ReferenceError: y is not defined
```

```js
var el;

console.log(window.el);  // 3

{
  el = 3;
}
```

> To avoid bugs, always declare all variables at the beginning of every scope. JavaScript in strict mode does not allow variables to be used if they are not declared. Note that doing so can lead to unexpected errors, and is not generally recommended.




