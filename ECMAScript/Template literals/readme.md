## Template literals 
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
```js
`string text ${expression} string text`
```
Intuitive expression interpolation for single-line and multi-line strings
```
${expression}
```

### multiline string
```js
console.log('string text line 1\n' +'string text line 2')
// "string text line 1
// string text line 2"

//or 

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```
