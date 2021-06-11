//stack crash course
//abstract data structure
//collection of data that needs to abide by a LIFO principle which is last in first out

const stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop();

//example of a LIFO stack, push and pop in tandum

const stack2 = [];

stack.unshift('create new file');
stack.unshift('reszied file');
stack.unshift('cloned out wrinkle');

stack.shift();

//another example.. but obviously push and pop is better for big O notation as its faster

//stack implementation using a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
}
