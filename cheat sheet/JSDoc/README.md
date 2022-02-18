**reference**
| Tag | Description |
| --- | --- |
| @author | Developer's name |
| @constructor | Marks a function as a constructor |
| @deprecated | Marks a method as deprecated |
| @exception | Synonym for @throws |
| @exports | Identifies a member that is exported by the module |
| @param | Documents a method parameter; a datatype indicator can be added between curly braces |
| @private | Signifies that a member is private |
| @returns | Documents a return value |
| @return | Synonym for @returns |
| @see | Documents an association to another object |
| @todo | Documents something that is missing/open |
| @this | Specifies the type of the object to which the keyword this refers within a function |
| @throws | Documents an exception thrown by a method |
| @version | Provides the version number of a library |

**example:**

```jsx
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```

https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
