const Graph = require('../../graphs/graphs_mysoln')
const Queue = require('../../queue/queue_ll')

Graph.prototype.bfs = function (root) {
  let visited = new Set()
  var adjacencyList = this.adjacencyList
  let queue = new Queue()
  let result = []
  let curNode = root

  queue.enqueue(root)
  while (!queue.isEmpty()) {
    curNode = queue.dequeue()

    if (visited.has(curNode)) continue

    result.push(curNode)
    visited.add(curNode)

    for (let neighbor of adjacencyList.get(curNode)) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor)
      }
    }
  }

  return result
}

const graph = new Graph()
// add vertices to graph
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
// add edges to graph
graph.addEdge(3, 1)
graph.addEdge(3, 4)
graph.addEdge(4, 2)
graph.addEdge(4, 5)
graph.addEdge(1, 2)
graph.addEdge(1, 0)
graph.addEdge(0, 2)
graph.addEdge(6, 5)
graph.showConnections()
let bfs_result = graph.bfs(0)
console.log('\n[BFS TRAVERSAL]  ' + bfs_result.join(' '))
