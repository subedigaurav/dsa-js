class QElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  //* functions to be implemented
  //# adds an element to the queue according to its priority
  enqueue(element, priority) {
    const qElement = new QElement(element, priority)
    let contains = false

    // iterating through the entire item array to add the element at the correct location of the queue
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (qElement.priority > this.items[i].priority) {
        // the correct location is found
        this.items.splice(i + 1, 0, qElement)
        contains = true
        break
      }
    }

    // if the element has the lowest priority, it is added to the end of the queue
    if (!contains) {
      this.items.unshift(qElement)
    }
  }

  //# removes an element from the priority queue
  dequeue() {
    if (this.isEmpty()) return "Underflow"
    return this.items.pop()
  }

  //# returns the front element of the priority queue
  front() {
    if (this.isEmpty()) return "No elements in the queue"
    return this.items[this.items.length - 1]
  }

  //# returns the last element of the priority queue
  rear() {
    if (this.isEmpty()) return "No elements in the queue"
    return this.items[0]
  }

  isEmpty() {
    return this.items.length == 0
  }

  //# prints the priority queue as per the priority from highest to the lowest
  printPQueue() {
    if (this.isEmpty()) {
      console.log("The Queue is empty!")
      return
    }
    let queue = "[FRONT] "
    for (let i = this.items.length - 1; i > 0; i--) {
      queue += this.items[i].element + " | "
    }
    queue += this.items[0].element
    queue += " [REAR]"
    console.log(queue)
  }
}

const myPQueue = new PriorityQueue()

// add elements to the queue
myPQueue.enqueue("Kabish", 6)
myPQueue.enqueue("Hrithik", 4)
myPQueue.enqueue("Gaurav", 10)
myPQueue.enqueue("Neelesh", 5)
myPQueue.enqueue("Bipish", 7)
myPQueue.printPQueue()

// dequeueing items
myPQueue.dequeue()
myPQueue.dequeue()
myPQueue.dequeue()
myPQueue.dequeue()
myPQueue.printPQueue()

// front and rear elements
console.log(myPQueue.front())
console.log(myPQueue.rear())
