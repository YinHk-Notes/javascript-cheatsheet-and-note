## Global Scope & Local Scope
```js
//global scope
var fruit = 'apple'
console.log(fruit);      //apple

function getFruit(){
    console.log(fruit);  //fruit is accessible here
}

getFruit();              //apple
```
```js
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

## function scope
Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

```js
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined 
```

## block-scoped functions
```js
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

## block-scoped variables

### local scope varible
Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. Every Functions has its own scope.

### global scope variable
There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.


ref

https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11
