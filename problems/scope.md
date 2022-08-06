# Scope
## Global Scope & Local Scope

### Global
- A variable declared outside a function and outside any block, becomes **GLOBAL**.
- With JavaScript, the global scope is the **JavaScript environment.**
- Variables declared Globally (outside any function) have Global Scope.
- Global variables can be accessed from anywhere in a JavaScript program.
- Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.

```jsx
//global scope
var fruit = 'apple'
console.log(fruit);      //apple

function getFruit(){
    console.log(fruit);  //fruit is accessible here
}

getFruit();              //apple

```

```jsx
//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}

//global scope

```
### Local
- Variables declared within a JavaScript function, become **LOCAL** to the function.
- Local variables have Function Scope: They can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.

## function scope

Every Functions has its own scope, whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function, variables defined inside a function are not accessible (visible) from outside the function.`var` is the keyword to define variable for a **function-scope** accessibility.`var` exit any inside fuction scope.

```jsx
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined
```

Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

They all have Function Scope:
```js
function myFunction1() {
  var name = "foo";   // Function Scope
}

function myFunction2() {
  let name = "bar";   // Function Scope
}

function myFunction3() {
  const name = "baz";   // Function Scope
}
```

## block scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: `let` and `const`.

These two keywords provide **Block Scope** in JavaScript.

Variables declared inside a **{ } block cannot be accessed from outside the block**:

The area inside **curly braces{}** is **block scope**. **const** and **let** keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding **block{curly braces}**.

```jsx
function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1); //apple
    console.log(fruit2); //error: fruit2 is not defined
    console.log(fruit3); //error: fruit3 is not defined
}
foo();
```

## lexical scope

Lexical scope means the **children scope have the access to the variables defined in the parent scope**. The children functions are lexically bound to the execution context of their parents.

```jsx
function foo1(){
    var fruit1 = 'apple';
    const fruit2 = 'banana';
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry

```

**scope2** and **scope3** inside **scope1**, which means **scope1** include **scope 2&3**, **let** & **const** declare in **scope1** can be assessed in **scope2&3**.

```jsx
{
 //scope1
  {
   //scop2
    {
     //scope3
    }
  }
}

```

## block-scoped functions

```jsx
{
    function foo () { return 1; }
    foo(); //foo() === 1
    {
        function foo () { return 2; }
        foo(); //foo() === 2
    }
    foo(); //foo() === 1
}

```

### block-scoped variables
`let` and `const` are block-scoped variables

### local scope varible

Variables declared inside the functions become Local to the function and are considered in the corresponding local scope.

### global scope variable

- There's only one Global scope in the **JavaScript document**. 
- The area outside all the functions is consider the global scope and the variables** defined inside the global scope can be accessed and altered in any other scopes.**
- In HTML, the global scope is the **window object**.
- Global variables defined with the `var` keyword belong to the **window object**.
  ```js
  var word1 = "far"
  let word2 = "bar";
  const word3 = "baz";

  console.log(window.word1); // 'foo'
  console.log(window.word2); // undefined
  console.log(window.word3); // undefined
  ```
> **Note: Do NOT create global variables unless you intend to. Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.**

**For example:**

The `Window.name` property gets/sets the name of the window's browsing context. If you use `var` to declare **name** with 
assigned value. Then it will override the **window variable**.
```html
<!DOCTYPE html>
<html>
<body>
<p id="origin"></p>         // The window name is iframeResult
<p id="override"></p>       // The altered window name is foo

<script>
document.getElementById("origin").innerHTML = "The window name is " + window.name;

var name = "foo";
document.getElementById("override").innerHTML = "The altered window name is " + window.name;
</script>

</body>
</html>
```
#### Automatically Global
If you assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable.
It will declare a global variable, even if the value is assigned inside a function.

```js
myFunction()

console.log(word);         // foo
console.log(window.word);  // foo

function myFunction() {
  word = 'foo';    //word become a global variable and belong to the window object
}
```
or
```js
function myFunction() {
  word = 'foo';
}

myFunction();

console.log(word);         // foo
console.log(window.word);  // foo
```

The following fail and won't automically become **global variable**
```js
myFunction();

console.log(word1); //undefined
console.log(word2); //undefined
console.log(word3); //undefined

function myFunction() {
  var word1 = 'foo';
  let word2 = 'bar';
  const word3 = 'baz';
}
```


