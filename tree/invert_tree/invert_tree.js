const BST = require('../binary_search_tree/bst')

BST.prototype.invertTree = function (root) {
  if (root == null) return null

  const left = this.invertTree(root.left)
  const right = this.invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

const tree = new BST()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(tree))
tree.invertTree(tree.root)
console.log(JSON.stringify(tree))
