


## 模組系統是什麼？
當程式碼愈寫愈多，應用程式的規模愈來愈大時，我們需要一個用於組織與管理程式碼的方式，這個需求相當明確，或許不只是應用程式發展到一定程度才會考慮這些，而是應該在開發程式之前的規劃就需要考量進來。

JavaScript語言是一個沒有命名空間設計的程式語言，也沒有支援類似的組織與程式碼分離的設計。有些人認為使用物件定義的字面文字，可以定義出物件的方法與屬性，但如果你看過"物件"、"this"與"原型物件導向"的章節內容，就知道物件中並沒有區分私有、公開成員或方法的特性，這個組織法頂多只是把方法或屬性整理集中而已。



## 模組輸出與輸入(import & export)

- Imported modules are in strict mode whether you declare them as such or not
- a function-like dynamic import(), which does not require scripts of type="module".
- ES6的模組程式碼會自動變成strict-mode(嚴格模式)，不論你有沒有使用"use strict"在程式碼中。
- ES6的模組是一個檔案一個模組
- ES6模組使用export(輸出)與import(輸入)語句來進行模組輸出與輸入。輸出通常位於檔案最後，輸入位於最前面。



## 多個export

```js
export const aString = 'test'

export function aFunction(){...}

export const aObject = {...}

export const aArray = []

export class aClass {
 ...
}
```
對於多個export, 兩種方式可以進行import

```js
import {aString, aObject, aArray, aFunction, aClass} from './location'
```
```js
import  * as myModule from './location'
```

## 單一export
單一的export,通常會加上default關鍵詞
```js
export default moduleName
```
對單一輸出的模組就不需要用花括號，這代表只輸入以default值定義的輸出語句:
```js
import aFunction from './location'
```
## Syntax of export
There are two types of exports:
- Named Exports (Zero or more exports per module)
- Default Exports (One per module)

```js
export var x = 42;                      // export a named variable
export function foo() {};               // export a named function

export default 42;                      // export the default export
export default function foo() {};       // export the default export as a function

export { encrypt };                     // export an existing variable
export { decrypt as dec };              // export a variable as a new name
export { encrypt as en } from 'crypto'; // export an export from another module
export * from 'crypto';                 // export all exports from another module


// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default, … } from …;

```

## Syntax of import
```js
import 'jquery';                        // import a module without any import bindings
import $ from 'jquery';                 // import the default export of a module
import { $ } from 'jquery';             // import a named export of a module
import { $ as jQuery } from 'jquery';   // import a named export to a different name
import * as crypto from 'crypto';    // import an entire module instance object


import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```









