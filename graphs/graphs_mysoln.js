//# create a graph using adjacency list
class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  addVertex(node) {
    this.adjacencyList.set(node, [])
  }

  addEdge(node1, node2) {
    // undirected graph
    this.adjacencyList.get(node1).push(node2)
    this.adjacencyList.get(node2).push(node1)
  }

  showConnections() {
    console.log("\n[ADJACENCY LIST]")
    for (let node of this.adjacencyList.keys()) {
      console.log(node + " -> " + this.adjacencyList.get(node))
    }
  }
}

const myGraph = new Graph()
myGraph.addVertex(0)
myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)
console.log(myGraph)
myGraph.addEdge(3, 1)
myGraph.addEdge(3, 4)
myGraph.addEdge(4, 2)
myGraph.addEdge(4, 5)
myGraph.addEdge(1, 2)
myGraph.addEdge(1, 0)
myGraph.addEdge(0, 2)
myGraph.addEdge(6, 5)
console.log(myGraph)
myGraph.showConnections()
