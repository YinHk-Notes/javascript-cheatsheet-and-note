## JavaScript Closures
> In JavaScript, a closure is **the combination of a function bundled together (enclosed) with references to its surrounding state** (**the lexical environment**). 

> A closure is **the combination of a function and the lexical environment** within which that function was declared. 

> Closure provides a **function a access to the parent scope**, even after the parent function has closed.

> The closure is that inner function can **captures variables** from the **lexical scope**.

> Closure is a function **combined with its outer state or lexical environment**.

- a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
- This environment consists of any local variables that were in-scope at the time the closure was created. 
- functions in JavaScript form closures.

```js
function outer() {
  
  let state = 'world';  //outer state(lexical environment) for inner()
  
  function inner() {
    return `Hello ${state}`;
  }
  
  return inner;
}

outer();
```



```js
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3
```
```js
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
  //Inside the innerFunc() scope, the variable outerVar is accessed from the lexical scope.
    console.log(outerVar); 
  }
  innerFunc();
}
outerFunc();  //console: "I am outside!"
```
```js
// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    const name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
```
> **Note: that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, greet().**

> `g1` is a reference to the instance of the function displayName that is created when `greet()` is run. The instance of displayName **maintains a reference to its lexical environment**, within which the variable name exists. For this reason, when `greet()` is invoked, the variable name remains available for use, and name is passed to `displayName()`.

### Closure scope chain
Every closure has three scopes:

1. Local scope (Own scope)
2. Enclosing scope (can be block, function, or module scope)
3. Global scope

> A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. 

```js
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20
```

You can also write without anonymous functions:
```js
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); //log 20
```

> all of which have access to the outer functions' scope. In this context, we can say that **closures have access to all outer function scopes.**

**Closures can capture variables in block scopes and function scopes as well.**
```js
function outer() {
  const x = 5;
  if (Math.random() > 0.5) {
    const y = 6;
    return () => console.log(x, y);
  }
}

outer()(); // logs 5 6


```

```js
// closure example

function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8
```
same as:
```js
function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

console.log(calculate(6)(3)); // 18
console.log(calculate(2)(4)); // 8
```





### Note
- Closures are useful because they let you **associate data (the lexical environment) with a function** that operates on that data.
- Consequently, you can use a closure anywhere that you might normally use an object with only a single method.





