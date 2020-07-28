class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    // if the queue is empty
    if (this.length == 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++
    return this
  }

  // removes from the front of the queue
  dequeue(value) {
    // if the queue is empty
    if (!this.first) {
      return null
    }
    // if there is only one item, the last pointer is null after dequeue
    if (this.first == this.last) {
      this.last = null
    }
    const dequeuedItem = this.first
    this.first = this.first.next
    this.length--
    return dequeuedItem
  }

  isEmpty() {
    return this.length === 0
  }

  print() {
    let temp = this.first
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
    }
    console.log()
  }
}

const myQueue = new Queue()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.print()
myQueue.peek()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.print()
