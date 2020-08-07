//! implementation of queue using stack
// we need two stacks, one for enqueue (stack1) and another for dequeue (stack2)
// we use javascript arrays for stack

class Queue {
  constructor() {
    this.stk1 = [];
    this.stk2 = [];
    this.length = 0;
  }

  peek() {
    // return null if there is no element in the queue
    if (this.stk2.length !== 0) {
      return this.stk2[this.stk2.length - 1];
    } else if (this.stk1.length !== 0) {
      return this.stk1[0];
    }
    return null;
  }

  //* for enqueue operation, just push to stack1
  enqueue(value) {
    this.stk1.push(value);
    this.length++;
  }

  //* for dequeue operation
  dequeue() {
    if (this.stk1.length == 0 && this.stk2.length == 0) {
      return null;
    }

    // if stack 2 is empty, copy from stack1 to stack2
    if (this.stk2.length == 0) {
      //! store the number of elements in a const because once we pop from stk1, the length of stk1 decreases which causes our loop to run only half of the required iterations
      const toTransferItems = this.stk1.length;
      for (let i = 0; i < toTransferItems; i++) {
        this.stk2.push(this.stk1.pop());
      }
    }

    this.length--;
    return this.stk2.pop();
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
