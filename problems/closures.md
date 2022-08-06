## JavaScript Closures
In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

```js
// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

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


