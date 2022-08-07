## null & undefined

`null`

- is an assigned value. It means nothing
- `null` is a variable that is defined **but is missing a value**
- `null` is an object
  ```js
   typeof null //'object'
  ```

`undefined`

- means a variable has been declared but not defined yet
- `undefined` is a variable that refers to something that **doesn't exist**, and the **variable isn't defined to be anything**
-  **It's not assigned to anything**, and **don't know what it really is**
- `undefined` is of type undefined
   ```js
   typeof undefined //'undefined'
  ```

> `null !== undefined` but `null == undefined`.

```js
console.log(null == undefined)   //true
console.log(null === undefined); // false
console.log(null !== undefined)  //true
```


```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```
