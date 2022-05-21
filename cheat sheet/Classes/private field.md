### JavaScript Private Fields
> ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the `#` sign.

Example:
```js
class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}
```
