## Understanding Context in JavaScript & "this" keyword
> **context refers to an object**. Within an object, the keyword `this` refers to that object, when a function is executed, `this` refers to the object that the function is executed in.

In JavaScript, the `this` keyword refers to an **object**.

It refers to different objects depending on how it is used

- In an object method, `this` refers to the object (unless it is manually executed in the context of a different object).
- When a function executes in the **global context**, `this` refers to the **global object or window object**.
- In a function, in **strict mode**, this is `undefined`
- In an event, `this` refers to the element that received the event.
- In constructor function, `this` refers to the **instance object** created from constructor.
- Methods like `call()`, `apply()`, and `bind()` can refer this to **any object**.

**Examples:**
```js
x = 'foo';  //global variable

var obj = {
    x: "bar",
    getX: function(){
        return x;
    }    
};
console.log( obj.getX() );  //foo
```
```js
'use strict';
x = 'foo';     //ReferenceError: x is not defined, in strict mode prompt this error

var obj = {
    x: "bar",
    getX: function(){
        return x;
    }    
};
console.log( obj.getX() );  
```
```js
'use strict';
var x = 'foo'; 

var obj = {
    x: "bar",
    getX: function(){
        return x;
    }    
};
console.log( obj.getX() );   // 'foo'
```
```js
'use strict';
var x = 'foo'; 

var obj = {
    x: "bar",
    getX: function(){
        return this.x;
    }    
};
console.log( obj.getX() );   // 'bar'
```
```js
var drink = 'wine';

var foo = {};

foo.drink = "beer";

foo.getDrink = function(){
        return this.drink; // 'this' refers to the object "foo"
    };

console.log( foo.getDrink() ); // beer
```
```js
var drink = 'wine';

var foo = {};

foo.drink = "beer";

foo.getDrink = function(){
        return this.drink; // 'this' refers to the object "foo"
    };

foo.under21 = {};

foo.under21.drink = 'soda';

foo.under21.getDrink = function(){
        return this.drink; // 'this' refers to the object "foo.under21"
    };

console.log( foo.getDrink() ); // beer

console.log( foo.under21.getDrink() ); // soda
```
```js
var foo = {};
 
foo.drink = "beer";
 
foo.getDrink = function(){      
        return this.drink; // 'this' refers to the object "foo"
    };
 
foo.under21 = {};
 
foo.under21.drink = 'soda';
 
foo.under21.getDrink = function(){
       return foo.getDrink.call(); // execute foo.getDrink()                
    };
 
console.log( foo.getDrink() ); // beer
 
console.log( foo.under21.getDrink() ); // wine
```
```js
drink = 'wine';

var foo = {};

foo.drink = "beer";

foo.getDrink = function(){      
        return this.drink; // 'this' refers to the object "foo"
    };

foo.under21 = {};

foo.under21.drink = 'soda';

foo.under21.getDrink = function(){
       return foo.getDrink.call(this); // execute foo.getDrink()                
    };

console.log( foo.getDrink() ); // beer

console.log( foo.under21.getDrink() ); // soda
```
