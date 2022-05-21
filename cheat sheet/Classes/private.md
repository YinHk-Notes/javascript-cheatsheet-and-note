### JavaScript Private Fields
Class fields are public by default, but private class members can be created by using a hash `#` prefix.
> ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the `#` sign.

Private fields are accessible on the class constructor from inside the class declaration itself, you can only access it inside the class.

Private fields are accessible only inside the class, not from outside of the class or subclasses.

Example:
```js
class Circle {
  #radius = 0;
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }
  get radius() {
    return this.#radius;
  }
}
```

### Static private fields

Only the class which defines the private static field can access the field. 
```js
class Circle {
  #radius = 0;
  static #count = 0;
  constructor(radius) {
    this.radius = radius;
    Circle.#count++;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }
  get radius() {
    return this.#radius;
  }
  static hasRadius(circle) {
    return #radius in circle;
  }
  static getCount() {
    return Circle.#count;
  }
}
```

### Private instance methods
Only allow to access private method in the class
```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

