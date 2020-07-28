//! implementation of stack using linked list

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      // we have at least one element in the stack
      newNode.next = this.top
      this.top = newNode
    }

    this.length++
    return this
  }

  pop() {
    // if there is no item in the stack
    if (!this.top) {
      throw null
    }
    // there is only one item on the list
    if (this.top == this.bottom) {
      this.bottom = null
    }

    const poppedNode = this.top
    this.top = this.top.next
    this.length--

    return poppedNode
  }

  IsEmpty() {
    return this.length === 0
  }

  print() {
    console.log('[STACK]')
    let temp = this.top
    while (temp != null) {
      console.log(temp.value + ' ')
      temp = temp.next
    }
    console.log()
  }
}

const myStack = new Stack()
myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')
myStack.peek()
myStack.print()
myStack.pop()
myStack.print()
myStack.pop()
myStack.print()
myStack.pop()
myStack.print()
console.log(myStack.peek())
