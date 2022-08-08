## null & undefined

`null`

- is an assignment value. It means nothing.
- `null` is a variable that is defined **but is missing a value**
- `null` is an object
  ```js
   typeof null //'object'
  ```

`undefined`

- means a variable has been declared but not defined yet
- `undefined` is a variable that **refers to something that doesn't exist** (doesn't refer to anything), and the **variable isn't defined to be anything**
-  **It's not assigned to anything**, and **don't know what it really is**
-  variable has been **declared** but has **not yet been assigned a value**
-  or  variable **has not been declared** at all
- `undefined` is of type undefined
   ```js
   typeof undefined //'undefined'
  ```

> `null !== undefined` but `null == undefined`.

```js
console.log(null == undefined)   //true
console.log(null === undefined); //false
console.log(null !== undefined)  //true
```


```js
var a;
console.log(a); // undefined

var b = null;
console.log(b); // null
```
```js
console.log(x); //ReferenceError: x is not defined
```

| null | undefined |
| --- | --- |
| It is an assignment value. It can be assigned to a variable which indicates that a variable does not point any object | It is not an assignment value. It means a variable has been declared but has not yet been assigned a value. |
| type is an object. | type is undefined. |
| The null value is a primitive value which represents the null, empty, or non-existent referenc | The undefined value is a primitive value, which is used when a variable has not been assigned a value. |
| Null indicates the absence of a value for a variable. | Undefined indicates the absence of the variable itself. |
| Null is converted to zero (0) while performing primitive operations. | Undefined is converted to NaN while performing primitive operations. |


