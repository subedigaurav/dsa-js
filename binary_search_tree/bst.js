class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    // if the root is null, create a new node and assign it to the root
    if (this.root == null) {
      this.root = new Node(value)
      return this.root
    }
    // call the recursive insert method
    this.insertR(this.root, value)
  }

  insertR(node, value) {
    if (value < node.value) {
      if (node.left == null) {
        // we reached a leaf node
        node.left = new Node(value)
        return
      } else {
        this.insertR(node.left, value)
      }
    } else {
      if (node.right == null) {
        // we reached a leaf node
        node.right = new Node(value)
        return
      } else {
        this.insertR(node.right, value)
      }
    }
  }

  /**
   * finds if the BST contains a node with given value
   * @param {Number} value value to be searched
   * @return {boolean} contains the value or not
   */
  contains(value) {
    if (!this.root) return false
    let curNode = this.root
    while (curNode) {
      if (value == curNode.value) return true
      if (value < curNode.value) curNode = curNode.left
      if (value > curNode.value) curNode = curNode.right
    }
    return false
  }

  /**
   * find the node in BST having the given value
   * @param {Number} value
   * @returns {Node} reference to the node
   */
  lookup(value) {
    if (!this.root) return null
    let curNode = this.root
    while (curNode) {
      if (value == curNode.value) return curNode
      if (value < curNode.value) curNode = curNode.left
      if (value > curNode.value) curNode = curNode.right
    }
    return null //@ not found
  }

  remove(value) {
    this.removeP(this.root, value)
  }

  //$ function to recursively delete a node from the BST
  removeP(node, value) {
    let parent = null
    let current = node

    // find the parent node and the node to be deleted
    while (current != null && current.value != value) {
      parent = current
      if (value < current.value) current = current.left
      else current = current.right
    }
    if (current == null) return node

    // CASE 1: leaf node i.e. no children
    if (current.left == null && current.right == null) {
      // if the node is root
      if (current == this.root) {
        this.root = null
      } else {
        if (parent.left == curr) parent.left = null
        else parent.right = null
      }
    }
    // CASE 2: the node has two children
    else if (current.right != null && current.left != null) {
      // find the successor of the node i.e inorder successor
      let successor = findMin(curr.right)
      // store the successor value
      let successorVal = successor.value
      // recursively delete the successor
      this.removeP(node, successorVal)
      current.data = successorVal
    }
    // CASE 3: the node has only one child
    else {
      // find the child node
      let child = current.left != null ? current.left : current.right
      // if the root to be deleted is not a root node, set its parent to its child
      if (current != this.root) {
        if (current == parent.left) parent.left = child
        else parent.right = child
      } else {
        this.root = child
      }
    }
  }

  //@ find the node with minimum value of a given subtree
  findMin(node) {
    while (node.left != null) {
      node = node.left
    }
    return node
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(tree))
// console.log(JSON.stringify(tree))
tree.remove(44)
// console.log(JSON.stringify(8))
console.log(JSON.stringify(tree))
