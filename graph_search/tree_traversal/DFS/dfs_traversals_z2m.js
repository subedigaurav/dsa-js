const Tree = require('../../tree/binary_search_tree/bst_z2m')

Tree.prototype.DFSInOrder = function () {
  return traverseInOrder(this.root, [])
}

Tree.prototype.DFSPreOrder = function () {
  return traversePreOrder(this.root, [])
}

Tree.prototype.DFSPostOrder = function () {
  return traversePostOrder(this.root, [])
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }

  return list
}

function traversePreOrder(node, list) {
  list.push(node.value)

  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }

  return list
}

function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list)
  if (node.right) traversePostOrder(node.right, list)
  list.push(node.value)

  return list
}

let tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
let inorder_result = tree.DFSInOrder()
console.log('[INORDER]    ' + inorder_result.join(' -> '))
let preorder_result = tree.DFSPreOrder()
console.log('[PREORDER]   ' + preorder_result.join(' -> '))
let postorder_result = tree.DFSPostOrder()
console.log('[POSTORDER]  ' + postorder_result.join(' -> '))
