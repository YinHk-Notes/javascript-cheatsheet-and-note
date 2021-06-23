block-scoped functions
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


Global Scope & Local Scope
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
