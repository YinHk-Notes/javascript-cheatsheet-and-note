## Using bind(), call() & apply()
> `call()`, `apply()`, and `bind()` methods to **tie a function into an object**, to bind **"this"** to an object. So that you can invoke the function **with a specified context**.

### Call
```js
fn.call(obj, .....arguments)    //arguments refer to the arguments in fn
```

### Apply
```js
fn.apply(obj, arguments)    //arguments refer to the arguments in fn
```

### Difference between Call() & Applay()
The `Call()` method takes arguments seperately, while the `Apply()` takes arguments as an array

### Bind
```js
fn.bind(obj)   
//or
fn.bind(obj, .....arguments)   
```


### Difference between Call()/Applay() and Bind()
- **call、apply** method return the result after execution the bound function.
- **Bind** method return a bound function(bind "this" to an obj) that can be executed later by calling.
 
### When to use these methods?
 
 
### ref
https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5
