## Template literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```jsx
`string text ${expression} string text`

```

Intuitive expression interpolation for single-line and multi-line strings

```jsx
${expression}

```

### multiline string

```jsx
console.log('string text line 1\\n' +'string text line 2')
// "string text line 1
// string text line 2"

//or

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

```

### Raw string

```jsx
//use String.raw  method to create raw strings
String.raw`on${ 2*3+1 }nine`
//output: "on7nine"
```
