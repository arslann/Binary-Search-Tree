// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {

    if (!this.root) {
      this.root = new TreeNode(val);
      return
    };


    if (val < currentNode.val) {
      if (!currentNode.left) currentNode.left = new TreeNode(val);
      else this.insert(val, currentNode.left);
    } else if (val > currentNode.val) {
      if (!currentNode.right) currentNode.right = new TreeNode(val);
      else this.insert(val, currentNode.right);
    }

  }

  search(target) {

    let currentNode = this.root;

    while (currentNode !== null) {
      if (target === currentNode.val) return true;

      if (currentNode && target < currentNode.val) currentNode = currentNode.left;

      if (currentNode && target > currentNode.val) currentNode = currentNode.right;
    }

    return false;

  }


  // Breadth First Traversal - Iterative
  breadthFirstTraversal(root = this.root) {

    let queue = [root];

    while (queue.length > 0) {
      let node = queue.shift();

      if (!node) return;

      console.log(node.val);

      queue.push(node.left);
      queue.push(node.right);
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(root = this.root) {

    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

      // Pop a node and print it
      let node = stack.pop();
      if (!node) return;
      console.log(node.val);

      // Put all of the node's children on the top of the stack
      stack.push(node.left);
      stack.push(node.right);
    }

  }

  preOrderTraversal(node = this.root) {

    if (!node) return;

    console.log(node.val);

    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);

  }


  inOrderTraversal(node = this.root) {

    if (!node) return;

    this.inOrderTraversal(node.left);

    console.log(node.val);

    this.inOrderTraversal(node.right);

  }


  postOrderTraversal(node = this.root) {

    if (!node) return;

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);

    console.log(node.val);

  }


}

module.exports = [BinarySearchTree, TreeNode];