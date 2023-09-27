class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // Check if root is empty
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find the next available spot while comparing vals
    let current = this.root;
    while (current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (current.val < val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // Check if root in empty
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find next available spot while comparing vals
    if (current.val > val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // Check if root is empty
    if (!this.root) return undefined;

    // Otherwise, begin search
    let current = this.root;
    while (current) {
      // Check if found
      if (current.val === val) {
        return current;

        // Check left nodes
      } else if (current.val > val) {
        current = current.left;

        // Check right nodes
      } else {
        current = current.right;
      }
    }
    // If not found, return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (current.val === val) return current;
    if (current.val > val) return this.findRecursively(val, current.left);
    if (current.val < val) return this.findRecursively(val, current.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let current = this.root;
    function traverse(node) {
      arr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      arr.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.val);
    }
    traverse(current);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];
    let queue = [];
    function traverse(node) {
      arr.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      if (queue.length) traverse(queue.pop());
    }
    traverse(this.root);
    return arr;
  }
}

module.exports = BinarySearchTree;
