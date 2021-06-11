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
    this.size++;
    return this.size;
  }

  pop() {
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

//push and pop here are adding and removing from the beginning of the list
//the reason for this is as we know that push and pop traditionally pull fromt the end of the list
//here we save time doing it from the front as we dont have to traverse the entire 'LL' to get to the end

/*

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)

*/
