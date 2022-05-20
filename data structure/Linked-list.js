/* class of node */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


/* Linked-list */
class LinkedList{
  constructor() {
    this.head = null;
    this.size 0;
  }
  
  
  // add data to the end 
  add(data) {
    // create a node object using the data passed in
    let node = new Node(data);
    let current;
    
    // if we don't have a head, we make one
    if (!this.head) {
      this.head = node;
    } else {
        // if there is already a head, then we add a node to our list
        current = this.head;
        // loop until the end of our linked list (the node with no next value)
        while (current.next) {
          current = current.next;
        }
        // set the next value to be the current node
        current.next = node;
    }
    this.size++;
  }
  
  
  // insert data into specific index
  insert(data, index) {
    // create a node object using the data passed in
    let node = new Node(data);
    let current, previous;
   
    if(index === 0) {
     if(!this.head)
       this.head = node;
     else {
       current = this.head;
       node.next = current;
       this.head = node;
     }
    } else {
       let count = 1;
       current = this.head;
       // check if index is a positive number and index isn't too large
       if(index > 0 && index <= this.size) {
          while(count < index) {
            count++;
            current = current.next;
            previous = current;
          }
          node.next = current;
          previous.next = node;
       }
    
    }
    this.size++;
  }
  
  
  // dalete all specific nodes
  delete(data) {
    let current = this.head;
    
    if(!this.head) {
      return null;
    }
    let deletedNode = null;
    
    while(current.next != null){
      if(current.next.data == data){
        deletedNode = current.next;
        current.next = current.next.next;
        this.size--;
      } else current = current.next;
    }
    return deletedNode;
  }
  
  
  // remove node at specific index
  removeAt(data, index) {
    let current = this.head;
    let count = 0;
    let deletedNode = null;
    // keep a reference to the previous node
    let previous = null;
    
    // check if index is a positive number and index isn't too large
    if (index < 0 || index > this.size) {
      return null;
    }
    
    if(!this.head) {
      return null;
    }
    
    if(index === 0) {
      deletedNode = this.head;
      this.head = null;
      this.size = 0;
    } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next; 
        }
        if(count == index && current.data == data) {
           deletedNode = current;
           previous.next = current.next;
           this.size--;
        }
    }
    return deletedNode;
  }
  
  
  
}







