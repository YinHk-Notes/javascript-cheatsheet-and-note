## Objects & instance

### Creating a JavaScript Object

There are different ways to create object:
- Create a single object, using an **object literal**.
- Create a single object, with the keyword `new`.
- Define an **object constructor**(contructor function), and then create objects of the constructed type.
- Create an object using `Object.create()`.


### Using an Object Literal
The easiest way to create a JavaScript Object.

Using an object literal, you can define and create an object in one statement.

An object literal is **a list of name:value pairs inside curly braces {}**.

```js
const obj = {A:"a", B:"b", C:"c"};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const user = {};
user.name = "YinHk";
user.password = 123456;
```

### Using keyword `new`
```js
const person = new Object();
person.firstName = "YinHk";
person.sex = "M";
person.age = 20;
```
This is same to 
```js
const person = {};
person.firstName = "YinHk";
person.sex = "M";
person.age = 20;

```
> But there is no need to use `new Object()`.



### ref
https://www.javascripttutorial.net/es6/object-literal-extensions/
