//quick crash course refresher on singly linnked lists

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// let first = new Node('Hi');
// first.next = new Node('There');
// first.next.next = new Node ('How');
// first.next.next.next = new Node ('Are You?');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
