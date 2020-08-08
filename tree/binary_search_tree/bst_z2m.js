class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode
      return
    } else {
      let curNode = this.root
      while (true) {
        if (value < curNode.value) {
          // left
          if (!curNode.left) {
            curNode.left = newNode
            return
          }
          curNode = curNode.left
        } else {
          // right
          if (!curNode.right) {
            curNode.right = newNode
            return
          }
          curNode = curNode.right
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false
    let curNode = this.root
    while (curNode) {
      if (value < curNode.value) {
        curNode = curNode.left
      } else if (value > curNode.value) {
        curNode = curNode.right
      } else if (curNode.value == value) {
        return curNode
      }
    }
    return false
  }
}

let tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(tree))
