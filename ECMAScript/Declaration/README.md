## var, let and const
### var, let, and const – What's the Difference?
1. **var** :   can be re-declared and updated
2. **let** :  can be updated but not re-declared + blocked scope.
3. **const**:   cannot be updated or re-declared + blocked scope + must be initialized at the time of declaration(read-only).



- var declarations are globally scoped or function scoped while let and const are block scoped.
- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.
- You can change/add the properties of a constant/let object


### Ref
**https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/**
**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let**
**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const**
