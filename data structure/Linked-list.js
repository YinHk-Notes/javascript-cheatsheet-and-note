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
  
  
  // dalete specific node
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
      } else current = current.next;
    }
    
     return deletedNode;
  }
  
  
  
  
}







