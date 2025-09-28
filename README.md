# Data Structures in JavaScript: BSTs, Queues, and Stacks

## Data structures in JavaScript

### Thress data structures

- Binary search trees (BSTs)
- Stacks
- Queues

#### Binary search trees

- Root node
- Parent/child nodes
- Leaf nodes
- Left node value is less than parent value
- Right node value is greater than parent value

#### Binary search trees usages

- Storing data
- Optimized for binary search

### Queues FIFO

- Add element at the end of the queue (enqueue)
- Remove element at the start of the queue (dequeue)
  
### Stacks LIFO

- Add element on top
- Remove element from top

### Remember this data structure

```js
const array = [1, 101, 10];
console.log(array[1]); // 101

array[1] = 100;
console.log(array[1]); // 100å
```

### Deffirence between JavaScript data structure

#### Stack and queue: array

```js
class Stack {
  constructor() {
    this.items = [];
  }
}
```

### Binary trees, stacks and queues

- Queues: media player play lists
- B-Trees: searches
- Stack: browser navigation

## Binary search trees (B-Trees)

### What is DOM

### Trees and nodes

#### Binary Tree

Data structure composed by nodes in parent-child relationship.

#### Binary search tree

Binary tree in which left nodes are smaller than right ones.

#### Ternary tree

Tree with left, middle and right node

#### Nodes

Basic structure

```js
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
```

### Binary search tree functions

```js
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data) {
    const node = this.root;
    if (!node) {
      return (this.root = new Node(data));
    }

    const searchBST = function (node) {
      if (data < node.data) {
        if (!node.left) {
          return (node.left = new Node(data));
        } else if (node.left) {
          return searchBST(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data);
          return;
        } else if (node.right) {
          return searchBST(node.right);
        }
      }
      return null;
    };

    return searchBST(node);
  }

  findMe(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  deleteNode(data) {
    const removeNode = function (node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        var tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  inOrderTraversal() {
    if (!this.root) {
      return null;
    } else {
      var result = new Array();
      function traverseBSTInOrder(node) {
        node.left && traverseBSTInOrder(node.left);
        result.push(node.data);
        node.right && traverseBSTInOrder(node.right);
      }
      traverseBSTInOrder(this.root);
      return result;
    }
  }

  preOrderTraversal() {
    if (!this.root) {
      return null;
    }

    var result = new Array();
    function traversePreOrder(node) {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    traversePreOrder(this.root);

    return result;
  }

  postOrderTraversal() {
    if (!this.root) {
      return null;
    }
    var result = new Array();
    function traverseBSTPostOrder(node) {
      node.left && traverseBSTPostOrder(node.left);
      node.right && traverseBSTPostOrder(node.right);
      result.push(node.data);
    }
    traverseBSTPostOrder(this.root);

    return result;
  }
}
```

### Traversal of BSTs

Iterate or move across trees.

#### In order (Left → Root → Right)

- Traverse the left subtree
- Visit the root node
- Traverse the right subtree.

In-order traversal gives the nodes in sorted ascending order.

#### Pre-order Traversal (Root → Left → Right)

- Visit the root node
- Traverse the left subtree
- Traverse the right subtree

Often used to create a copy of the tree or to serialize it.

#### Post-order Traversal (Left → Right → Root)

- Traverse the left subtree.
- Traverse the right subtree.
- Visit the root node.

Useful for deleting or freeing nodes, because children are handled before the parent.
