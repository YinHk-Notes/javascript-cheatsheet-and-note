## Class

- class is not an object.
- class are a blueprint for creating objects.

```js
class className {
  
  constructor() { ... } //Mandatory Class method
  
  method1() { ... }  //class method1
  method2() { ... }  //class method2
  ...
  
}
```
  
### constructor
The constructor method is a special method for creating and initializing an object created with a class. 

### static
The static keyword defines a static method or property for a class
- Static members (properties and methods) are called **without instantiating their class and cannot be called through a class instance**.
- Static methods are often used to create utility functions for an application
- Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
- You cannot call a static method on an object, only on an object class.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Instance

- The constructor method is called automatically when a new object is created.
- Create instance by calling the constructor with the new keyword and initialize it.

```js
class Mobile {
  constructor(model) {
    this.name = model;
  }
   //...
}
let mbl = new Mobile("iPhone"); // an instance created
```

### inheritance

- use `extends` keyword for class inheritance
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

### Call super class with `super`
- The super keyword is used to call corresponding methods of super class

**Call parent constructor inside constructor**
```js
super([arguments]); // calls the parent constructor.(only inside the constructor)
```

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
```

**Call parent method**
```js
super.parentMethod(arguments);  // calls a parent method
```

```js
class A {
  //...
  method1() {
    console.log('method 1');
  }
}

class B extends A {
 //...
  method2() {
    super.method1();  // calling parent class
  }
}
```


