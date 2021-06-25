


## 模組系統是什麼？
當程式碼愈寫愈多，應用程式的規模愈來愈大時，我們需要一個用於組織與管理程式碼的方式，這個需求相當明確，或許不只是應用程式發展到一定程度才會考慮這些，而是應該在開發程式之前的規劃就需要考量進來。

JavaScript語言是一個沒有命名空間設計的程式語言，也沒有支援類似的組織與程式碼分離的設計。有些人認為使用物件定義的字面文字，可以定義出物件的方法與屬性，但如果你看過"物件"、"this"與"原型物件導向"的章節內容，就知道物件中並沒有區分私有、公開成員或方法的特性，這個組織法頂多只是把方法或屬性整理集中而已。



## 模組輸出與輸入(Import & Export)

- Imported modules are in strict mode whether you declare them as such or not
- a function-like dynamic import(), which does not require scripts of type="module".
- ES6的模組程式碼會自動變成strict-mode(嚴格模式)，不論你有沒有使用"use strict"在程式碼中。
- ES6的模組是一個檔案一個模組
- ES6模組使用export(輸出)與import(輸入)語句來進行模組輸出與輸入。輸出通常位於檔案最後，輸入位於最前面。



## 多個輸出

```js
export const aString = 'test'

export function aFunction(){...}

export const aObject = {...}

export class aClass {
 ...
}
```
對於多個export, 兩種方式可以進行import

```js
import {aString, aObject, aFunction, aClass} from './location'
```
```js
import  * as myModule from './location'
```





