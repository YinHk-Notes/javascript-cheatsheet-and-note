class Queue {
  constructor() {
    this.dataStore = [];
    this.size = 0;
  }
  
  // add value to the end of the queue
  enqueue(value) {
    this.dataStore.push(value);
    this.size++;
  }
  
  // delete first value from the queue
  dequeue() {
    if(this.size > 0) {
      this.dataStore.shift();
    }
    this.size--;
  }
 
}


