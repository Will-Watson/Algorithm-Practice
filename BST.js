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
  //TREE TRAVERSALS
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      //node.left && traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
      //node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
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

//------------------------Tree Traversal------------------------------
//visit every node once
//Breadth-First Search
//Depth-First Search

//Breadth-First Search works across the tree. Horizontally.

//Dept-First Search works down the tree. Vertically. 3 Specific types of DFS.
//PreOrder, PostOrder, InOrder

//--------------------------BFS VS DFS?-------------------------------
//time complexity is about the same for both search types
//essentially if we're talking about a wide tree, DFS is better as it takes up less space.
