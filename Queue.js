//Queue crash course
//Similar to a stack in that its an abstract data structure with two functions, adding and removing
//however instead of LIFO, a Queue is a FIFO. First in First out.

//good for background tasks
//uploading resources
//printing/task processing

//A queue is like using push and shift in tandom in an array or unshift and pop

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

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

/*

Queue Big O Notation

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)

*/
