const tree = require('../../tree/binary_search_tree/bst')
const Queue = require('../../queue/queue_ll')

// instantiate a queue data structure
const queue = new Queue()

function breadthFirstSearch(tree, queue) {
  let curNode = tree.root
  let result = []

  // add the root node to the queue
  queue.enqueue(curNode)

  while (queue.length > 0) {
    // dequeue from the queue and add to the result list
    curNode = queue.dequeue()
    result.push(curNode.value)

    if (curNode.left) {
      queue.enqueue(curNode.left)
    }
    if (curNode.right) {
      queue.enqueue(curNode.right)
    }
  }
  return result
}

let bfs_result = breadthFirstSearch(tree, queue)
console.log(bfs_result)
