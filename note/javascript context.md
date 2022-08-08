## Understanding Context in JavaScript & "this" keyword
> **context refers to an object**. Within an object, the keyword `this` refers to that object, when a function is executed, `this` refers to the object that the function is executed in.

In JavaScript, the `this` keyword refers to an **object**.

It refers to different objects depending on how it is used

- In an object method, `this` refers to the object(unless it is manually executed in the context of a different object).
- When a function executes in the **global context**, `this` refers to the **global object or window object**.
- In a function, in **strict mode**, this is `undefined`
- In an event, `this` refers to the element that received the event.
- In constructor function, `this` refers to the instance object created from constructor.
- Methods like `call()`, `apply()`, and `bind()` can refer this to any object.


### ref
https://blog.kevinchisholm.com/javascript/context-object-literals/

