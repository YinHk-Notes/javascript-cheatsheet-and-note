## this
- In a method, this refers to the owner object
- Alone, this refers to the global object.
- In a function, this refers to the global object
- this within classes always refers to the class instance
- In an event, this refers to the DOM element that received the event

## static
**Static member** (method or property) is defined on a class. 

**Static member cannot be called on instance.**
### JavaScript Static Methods

Static class methods are defined on the **class itself. Static methods are associated with a class, not the instances of that class.** Thus**, static methods** are useful for defining helper or utility methods. It is often utility functions, such as functions to create or clone objects.

> `static` method define on class (ES6)
> 

> The `static` method are called via the class name, not the instances of the class.
> 

> JavaScript `static` method are shared among instances of a class. Thus, they are associated with the **class**, not any particular instance of that class.
> 

```jsx
class Name {
	constructor() {
		...
  }
	static *methodName* ( ) { ... }
}
```

eg:

```jsx
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

### **Appropriate way to call a static method**

- **by class name:**
    
    ```jsx
    className.staticMethodName();
    ```
    
- **from the class constructor:**
    
    ```jsx
    this.constructor.staticMethodName();
    ```
    

> Use the **className.staticMethodName()** or **this.constructor.staticMethodName()** to call a static method in a class constructor or an instance method.
> 

### JavaScript static properties

Static properties can be accessed only inside the class in which they are defined. They are invisible to instances of that class. If you try to access static property from class instance, JavaScript will return undefined.  

Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```jsx

class Name {
	constructor() {
		...
  }
	static propertyName = value;
}
```

> **Static properties** and **methods** are not visible for class instances and they can’t access them.
> 

> Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
> 

```jsx
class Person {
  static name = 'Peter';
}
let person = new Person();
console.log(person.name); //name is undefined
```

### Accessing static properties

```jsx
className.STATIC_PROPERTY_NAME;
```

or 

```jsx
this.constructor.STATIC_PROPERTY_NAME;
```

**Accessing static properties from methods in the same class. (use the this keyword to access)**

```jsx
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

### Static properties and methods in class inheritance

Class inheritance concept in JavaScript use **prototypal inheritance,** inheriting properties and methods with the **prototype chain**. 

When a subclass inherit from a parent class/super class, **static properties and methods** in parent class/super class can be accessible on the subclass, by using **subclass name:**

```jsx
subClassName.STATIC_PROPERTY_NAME;//access static property in itself or prototype class
subClassName.staticMethodName();//access static method in itself or prototype class
```

example:

```jsx
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
> 

```jsx
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

```jsx
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

```jsx
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

### new
- `new` keyword is use to create a instance of class

### delete
- delete operator removes a property from an object
- if no more references to the same property are held, it is eventually released automatically.

```js
delete object.property
delete object['property']
```

### yield
- `yield` keyword is used to pause and resume a generator function.
-  simply helps to pause and resume a function in any time asynchronously

> You can think multiple yields are **the breakpoints in a javascript debugger within a single function**.  Until you tell to navigate next breakpoint it wont execute the code block

eg:
```js
function* countAppleSales () {
  let saleList = [3, 7, 5]
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i]
  }
}
```

```js
let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }
```


### getter and setter
In JavaScript, there are two kinds of object properties:
- Data properties
- Accessor properties

> **get** and **set** are special properties in object to get access and modify the data properties in object.

getter methods are used to access the properties of an object.
```js
const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
```

setter methods are used to change the values of an object. 
```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';
console.log(language.log);  // ["EN", "FA"]
```
```js
const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah

```

