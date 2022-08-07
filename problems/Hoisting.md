## Hoisting
> **Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current scope


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

```js
x = 5;
console.log(x);
let x;
//ReferenceError: Cannot access 'x' before initialization
```

```js
x = 5;
console.log(x);
const x;
//SyntaxError: Missing initializer in const declaration.
```

```js
var el;

console.log(window.el);  // 3

{
  el = 3;
}
```

> To avoid bugs, always declare all variables at the beginning of every scope. JavaScript in strict mode does not allow variables to be used if they are not declared.



