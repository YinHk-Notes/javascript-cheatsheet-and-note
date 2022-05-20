class Stack { 
  constructor() {
    this.dataStore = [];
    this.top = null;
    this.size = 0;
  }
  
  // add the value to the top
  push(value) {
    this.dataStore.push(value);
    this.top = value;
    this.size++;
  }
  
  // remove the top
  pop() {
    if(this.size > 0) {
      this.size--; 
      this.top = this.dataStore[this.size-1];
      return this.dataStore.pop();
    } else return null;
  }
  
  // returns the top element of the stack
  peek() {
    return this.top;
  }
  
  // check is empty stack
  isEmpty() {
    if(this.size = 0)
      return true;
    else return false;
  }
  
  // display stack
  show() {
    return this.dataStore;
  }

}

