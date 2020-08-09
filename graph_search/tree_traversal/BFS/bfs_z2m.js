const Tree = require('../../tree/binary_search_tree/bst_z2m')

// add a new breadth-first-search method to the tree
//$ this is iterative implementation of breadth-first-search algorithm
Tree.prototype.breadthFirstSearch = function () {
  let currentNode = this.root
  let list = []
  let queue = []

  queue.push(currentNode)

  while (queue.length > 0) {
    currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return list
}

//$ recursive implementation of breadth-first-search algorithm
Tree.prototype.breadthFirstSearchR = function (queue, list) {
  if (!queue.length) return list

  const currentNode = queue.shift()
  list.push(currentNode.value)
  if (currentNode.left) queue.push(currentNode.left)
  if (currentNode.right) queue.push(currentNode.right)

  return this.breadthFirstSearchR(queue, list)
}

let tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
let bfs_result = tree.breadthFirstSearch()
console.log('[BFS_ITERATIVE]    ' + bfs_result.join(' -> '))
//# here, the first argument is the queue and the second argument is the resultant list
let bfsr_result = tree.breadthFirstSearchR([tree.root], [])
console.log('[BFS_RECURSIVE]    ' + bfsr_result.join(' -> '))
