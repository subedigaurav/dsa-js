//! implementation of stack using arrays
class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
    return this
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }
}

const myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
console.log(myStack.peek())
myStack.push('discord')
console.log(myStack)
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)
console.log(myStack.isEmpty())
