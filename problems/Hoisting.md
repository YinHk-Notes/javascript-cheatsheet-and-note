## Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top.


```js
x = 5; 
y = 7;

console.log(x + y);  //12

var y;
var x;
```

```js
var el;

console.log(window.el);  // 3

{
  el = 3;
}
```

> To avoid bugs, always declare all variables at the beginning of every scope. JavaScript in strict mode does not allow variables to be used if they are not declared.



