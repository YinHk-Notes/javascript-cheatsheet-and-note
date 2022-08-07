## Hoisting
> **Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current scope. 
> 
> JavaScript Hoisting refers to the process whereby the interpreter appears to move **the declaration of functions, variables or classes** to the top of their scope, moved to the top of their scope regardless of whether their scope is **global** or **local**, **prior to execution of the code**.

- Hoisting allows functions to be safely used in code **before they are declared**.
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

> Note: JavaScript **only hoists declarations, not initializations**. This means that **initialization doesn't be moved to the top of the scope**, prior to execution of the code.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.

//num is undefined, because only the declaration (var num), not the initialization (=6) is hoisted to the top.
//Because of hoisting, num has been declared before it is used, but because initializations are not hoisted, the value of num is undefined.
```
same as 
```js
var num;  // Declare num
console.log(num);  // num is not initialized
```

### Hoisting in `let` and `const`
> Variables defined with let and const are hoisted to the top of the block, but not initialized.
The block of code is aware of the variable, but it **cannot be used until it has been declared**. Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. **An exception will be thrown if a variable declared with let or const is read before it is initialized.**

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

### Function hoisting
> JavaScript hoisting let you use a function **before you declare** it in your code.

```js
showMessage('World');

function showMessage(message) {
  console.log('Hello '+message);
}
//output: Hello World
```

**Hoisting does not work in arrow function**
```js
showMessage('World');
var showMessage = (message) => console.log('Hello '+message);
//TypeError: showMessage is not a function
```
same as:
```js
var showMessage;
showMessage('World');
```
> The arrow function is not hoisting the main reason that you cannot call them before initialization.
> Because hoisting is the by-default action of moving all the declarations at the top of the scope before the execution of code.

> The other reason is that the arrow function is anonymous or **function expression**.
> In this case the variable declaration is hoisted and **the expression is its initialization**. Therefore **the expressions are not evaluated** until the relevant line is executed.

### Class hoisting
> Classes defined using a **class declaration are hoisted**, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will **throw a ReferenceError**. 

> In class expression, **the expression is its initialization**. So the **expression is not being hoisted**.

### Declare Your Variables At the Top !
> To avoid bugs, always declare all variables at the beginning of every scope. JavaScript in strict mode does not allow variables to be used if they are not declared. Note that doing so can lead to unexpected errors, and is not generally recommended.




