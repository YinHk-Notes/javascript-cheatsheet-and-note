## Using bind(), call() & apply()
> `call()`, `apply()`, and `bind()` methods to **tie a function into an object**, or to bind **"this"** to an object. So that you can invoke the function **with a specified context**.

### Call
```js
fn.call(obj, .....arguments)    //arguments refer to the arguments in fn
```
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

```js
var obj = { num: 2 };
function add(a, b){
  return this.num + a + b;
}
console.log(add.call(obj, 3, 5)); //10
```
**If it is not in strict mode, without passing obj or pass null to it, the value of "this" is bound to the global object.**
```js
// var creates a property on the global object
var globProp = 'Wisen';

function display() {
  console.log(`globProp value is ${this.globProp}`);
}
display.call(); // logs "globProp value is Wisen"
```
**Under strict mode, without passing obj or pass null to it, the value of "this" is undefined.**
```js
'use strict';
var globProp = 'Wisen';

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Apply
```js
fn.apply(obj, arguments)    //arguments refer to the arguments in fn
```
```js
function fn(a, b) {
  console.log(a, b);
}

function boundFn() {
  return fn.apply(this, arguments);
}

boundFn(1, 2);     // 1 2
```
```js
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));
```
```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

```

### Difference between Call() & Applay()
The `Call()` method takes arguments seperately, while the `Apply()` takes arguments as an array

### Bind
```js
fn.bind(obj)   
//or
fn.bind(obj, .....arguments)   
```
```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

### Difference between Call()/Applay() and Bind()
- **call、apply** method return the result after execution the bound function.
- **Bind** method return a bound function(bind "this" to an obj) that can be executed later by calling.
 
 
### Once function is bound, it can't update "this" to bind another object
example:
```js
//window = global
window.a = 20;

function fn() {
  console.log(this.a);
}

var fn_bind_window = fn.bind(window);
var obj = { a: 1, func: fn_bind_window };

obj.func();           // 20
obj.func.call(obj);   // 20
obj.func.apply(obj);  // 20
obj.func.bind(obj)(); // 20
```

### When to use these methods?
**Use Call() to Chain Object Constructors**
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
```

**Using call() to invoke a function and specifying the context for 'this'**
```js
function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

**Use Call() to Invoke an Anonymous Function**
```js
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

function assignPrintMethod(i) {
  this.print = function () {
    console.log(`#${i} ${this.species}: ${this.name}`);
  }
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  assignPrintMethod.call(animals[i], i);
}
```

**Use Apply() to Append an Array to Another Array**
```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```
**Use Apply() to Chain Object Constructors**
```js
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.description = `${this.name}, ${this.price}€`;
}

function Car(details) {
  Item.apply(this, details);
  // You can add other car specific fields here
}

function Fruit(details) {
  Item.apply(this, details);
  // You can add other fruit specific fields here
}

const carDetails = ["tesla", 50000]
const bmw = new Car(carDetails);

const fruitDetails = ["Apple", 2.99]
const banana = new Fruit(fruitDetails);
```

**Use Bind() to Make SetTimeout Work**
```js
setTimeout(
      function() {
       //body
      }.bind(this), //bound to specific object
      1000
    );
```
