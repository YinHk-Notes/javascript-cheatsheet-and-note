// reverse LinkedList by iterative method

const reverse = function(node) {
    let currNode = node;
    let prevNode = null;
    let nextNode = null;
  
    while(currNode != null) {
       // Store rest of the nodes.
       nextNode = currNode.next;
       
      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;
      
      // iteration.
      prevNode = currNode;
      currNode = nextNode;
    }
    
    // After iteration, all node reversed, asign node(the head) to prevNode(start)
    node = prevNode;
}


