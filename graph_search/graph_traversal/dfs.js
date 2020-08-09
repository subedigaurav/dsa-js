const Graph = require('../../graphs/graphs_mysoln')

Graph.prototype.dfs = function (root) {
  let visited = new Set()
  let adjacencyList = this.adjacencyList

  let result = []
  dfsR(root, visited)

  function dfsR(root, visited) {
    result.push(root)
    visited.add(root)
    for (let node of adjacencyList.get(root)) {
      if (!visited.has(node)) {
        dfsR(node, visited)
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
let dfs_result = graph.dfs(0)
console.log('\n[DFS TRAVERSAL]  ' + dfs_result.join(' '))
