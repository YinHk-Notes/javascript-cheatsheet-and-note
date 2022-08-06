## Scope
## Global Scope & Local Scope

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

## function scope

Every Functions has its own scope, whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility. **var** exit any inside fuction scope.

```jsx
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined

```

## block scope

The area inside **curly braces{}** is **block scope**. **const** and **let** keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding **block{curly braces}**.

```jsx
function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined

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

## block-scoped variables

### local scope varible

Variables declared inside the functions become Local to the function and are considered in the corresponding local scope.

### global scope variable

There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.
