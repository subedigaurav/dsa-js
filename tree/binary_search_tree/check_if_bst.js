const Tree = require('./bst')

//$ check if the binary tree is a valid BST (recursive method)
Tree.prototype.isValidBST = function (
  node,
  lower_limit = Number.MIN_SAFE_INTEGER,
  upper_limit = Number.MAX_SAFE_INTEGER
) {
  //# base condition
  if (node == null) return true

  if (node.value <= lower_limit || node.value >= upper_limit) {
    return false
  }

  return (
    this.isValidBST(node.left, lower_limit, node.value) &&
    this.isValidBST(node.right, node.value, upper_limit)
  )
}

//$ check if the binary tree is a valid BST (in-order method)
Tree.prototype.isValidBSTIn = function () {
  // prev is for tracking the previous inorder value
  let prev = Number.NEGATIVE_INFINITY
  let isValid = true

  // check for validity using inorder traversal
  function inOrder(node) {
    // the base case
    if (node == null) return true

    inOrder(node.left)
    // check for the validity heres
    if (node.value <= prev) isValid = false
    prev = node.value
    inOrder(node.right)
  }

  inOrder(this.root)
  return isValid
}

const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
let isValid = tree.isValidBST(tree.root)
console.log(isValid)
