## Merge two or more objects
To merge objects into a new one that has all properties of the merged objects, you have two options:

- Use a spread operator ( `...`)
- Use the `Object.assign()` method

```js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...job
};

/* 
   console.log(employee)
   output:
   {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356',
    jobTitle: 'JavaScript Developer',
    location: 'USA'
   }
 */
```


```js
Object.assign(target, sourceObj1, sourceObj2, ...);
```
```js
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee = Object.assign(person, job);
console.log(employee);

```
