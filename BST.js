//Binary Search Tree crash course and review

//root is the top node in a tree
//child is a node directly connected to another node when moving away from the root
//parent, is the converse notion of a child
//siblings are groups of nodes with the same parent
//a leaf is a node with no children but also a child of another node
//edge, the connection between two nodes
//HTML hierarchy is a good example of a tree's structure. <body> has <div> children

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  //explicit statements here. A lot of redundant else.
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
        //return true;
      }
    }
    if (!found) return false;
    return current;
    //return false;
  }
}

let tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

//example of inputting raw data ^^

/*

Big O Notation of BST

Insertion - O(log n)
Searching - O(log n)

not guaranteed. Average or Best^

if the tree is completely one sided.. every node inserted is greater than the previous one
we're talking O(n);

*/
