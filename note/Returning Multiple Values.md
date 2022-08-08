## Returning Multiple Values from a Function

you can return multiple values by return:
- array
- object

eg:
```js
function getNames() {
  // get names from the database or API
  let firstName = 'John',
      lastName = 'Doe';

  // return values
  return {
    'firstName': firstName,
    'lastName': lastName
  };
}
```

```js
function getNames() {
  // get names from the database or API
  let firstName = 'John',
      lastName  = 'Doe';

  return { firstName, lastName };
}

let { firstName, lastName } = getNames();  //unpack properties from an object, you can use the object destructuring
```
