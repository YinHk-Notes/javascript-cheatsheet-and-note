## Associative arrays
Associative arrays are **basically objects in JavaScript where indexes are replaced by user-defined keys**. They do not have a length property 
like a normal array and cannot be traversed using a normal for loop.


```js
var arr = {key1:'value1', key2:'value2'}
```

```js
var arr = { "Company Name": ‘Flexiple’, "ID": 123}; 
```

```js
Object.size = function(arr) {
    var size = 0;
    for (var key in arr) {
        if (arr.hasOwnProperty(key)) size++;
    }
    return size;
};
```

```js
+ Object.keys(arr).length   // return the length
```

