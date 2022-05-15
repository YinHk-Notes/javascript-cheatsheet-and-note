//The computed property names feature was introduced in ECMAScript 2015(ES6) that allows you to dynamically compute the 
//names of the object properties in JavaScript object literal notation.


const key = 'name';
const value = 'Atta';

const user = {
    [key]: value
};

console.log(user.name); // Atta


//The key can be any expression as long as it is wrapped in brackets []:
const key = 'name';
const value = 'Atta';

const user = {
    [key + '34']: value
};

console.log(user.name34); // Atta


//you can also use template literals (string interpolation) as an expression for the computed property names:
const key = 'name';
const value = 'Atta';

const user = {
    [`${key}34`]: value
};

console.log(user.name34); // Atta

