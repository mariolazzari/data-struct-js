export class BinarySearchTree {
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
