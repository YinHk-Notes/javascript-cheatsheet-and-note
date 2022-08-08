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
- `static` method define on class (ES6)
- The `static` method are called via the class name, not the instances of the class.
- JavaScript `static` method are shared among instances of a class. Thus, they are associated with the **class**, not any particular instance of that class

```js
class Name {
	constructor() {
		...
  }
	static methodName ( ) { ... }
}
```

example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  static getName() {
    return this.name;
  }
}
let person = new Person('Peter');
person.getName(); //raise an error when calling it on an object/instance
```
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
#### **Appropriate way to call a static method**

- **by class name:**
    
    ```js
    className.staticMethodName();
    ```
    
- **from the class constructor:**
    
    ```js
    this.constructor.staticMethodName();
    ```
    

> Use the **className.staticMethodName()** or **this.constructor.staticMethodName()** to call a static method in a class constructor or an instance method.

#### JavaScript static properties

**Static properties** can be accessed only inside the class in which they are defined. They are invisible to instances of that class. If you try to access static property from class instance, JavaScript will return undefined.  

**Static properties** are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```js

class Name {
	constructor() {
		...
  }
	static propertyName = value;
}
```

> **Static properties** and **methods** are not visible for class instances and they can’t access them.

> Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.


```js
class Person {
  static name = 'Peter';
}
let person = new Person();
console.log(person.name); //name is undefined
```

#### Accessing static properties

```jsx
className.STATIC_PROPERTY_NAME;
```

or 

```js
this.constructor.STATIC_PROPERTY_NAME;
```

**Accessing static properties from methods in the same class. (use the this keyword to access)**

```js
class Name {
	constructor() {
		...
  }
	static propertyName = value;
  methodName() {
		this.propertyName;
	}
}
```

#### Static properties and methods in class inheritance

Class inheritance concept in JavaScript use **prototypal inheritance,** inheriting properties and methods with the **prototype chain**. 

When a subclass inherit from a parent class/super class, **static properties and methods** in parent class/super class can be accessible on the subclass, by using **subclass name:**

```js
subClassName.STATIC_PROPERTY_NAME;//access static property in itself or prototype class
subClassName.staticMethodName();//access static method in itself or prototype class
```

example:
```js
class MyClass {
  static staticProperty = 'static property';
  static staticMethod() { return 'static method'};
}

class A extends MyClass {

}
console.log( A.staticProperty ); //console: static property
console.log( A.staticMethod() ); //console: static method
```

> When you try to access some property or method in a subclass, JavaScript will first look for that property or method in that subclass. If it finds the property or method on the subclass it will access it. If not, JavaScript will travel along the prototype chain to  search any connected superclass. If it also doesn’t exist it will search other chains connected to other superclass until find it out.  Search ends up if found on the chain. If finally no such  property or method, it will return undefined for property search and not a function for method search.


```js
class MyClass {
  static staticProperty = 'static property';
  static staticMethod() { return 'static method'};
}

class A extends MyClass {
	static staticProperty = 'static property in classA';
  static staticMethod() { return 'static method in classA'};
}
console.log( A.staticProperty ); //console: static property in classA
console.log( A.staticMethod() ); //console: static method in classA
```

```js
class MyClass {
  static staticProperty = 'static property';
  static staticMethod() { return 'static method'};
}

class A extends MyClass {}
class B extends A {}
class C extends B {}
class D extends C {}

// The prototypal chain looks like:
// D -> C -> B -> A -> MyClass

console.log( D.staticProperty ); //console: static property
console.log( D.staticMethod() ); //console: static method
```

```js
class MyClass {
  static staticProperty = 'static property';
  static staticMethod() { return 'static method'};
}

class A extends MyClass {}
class B extends A {
  static staticProperty = 'static property in classB';
  static staticMethod() { return 'static method in classB'};
}
class C extends B {}
class D extends C {}

// The search path in prototype chain:
// D -> C -> B 

console.log( D.staticProperty ); //console: static property in classB
console.log( D.staticMethod() ); //console: static method in classB
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

### Class expressions
A class expression is another way to define a class. **Class expressions can be named or unnamed.**.

eg:
```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```




