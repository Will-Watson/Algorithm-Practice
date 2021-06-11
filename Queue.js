//Queue crash course
//Similar to a stack in that its an abstract data structure with two functions, adding and removing
//however instead of LIFO, a Queue is a FIFO. First in First out.

//good for background tasks
//uploading resources
//printing/task processing

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
