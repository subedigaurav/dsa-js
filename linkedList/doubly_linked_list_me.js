class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = this.head;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    //* if the list is empty
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    //* the list is not empty
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    //* if the list is empty
    if (this.length == 0) {
      this.prepend(value);
    }
    //* if the list is not empty
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  insert(index, value) {
    //* checking for the edge cases
    if (index < 0 || index >= this.length) {
      throw new Error('error: index is invalid');
    }
    process.stdout.write(`[INSERT] ${value} AT ${index}: `);
    //* prepend if the index is 0
    if (index == 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let bef = this.findNodeAtIndex(index - 1);
    let aft = bef.next;
    //* update the links between the bef and aft nodes
    bef.next = newNode;
    newNode.prev = bef;
    aft.prev = newNode;
    newNode.next = aft;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error('error: index is invalid');
    }
    process.stdout.write(`[REMOVE] AT ${index}: `);
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (index == this.length - 1) {
      this.tail = this.tail.prev;
      this.length--;
      return;
    }
    let nodeToDelete = this.findNodeAtIndex(index);
    const bef = nodeToDelete.prev;
    const aft = nodeToDelete.next;
    this.length--;
  }

  findNodeAtIndex(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  print() {
    let tmp = this.head;
    while (tmp != this.tail) {
      process.stdout.write(tmp.value + ' ⇆ ');
      tmp = tmp.next;
    }
    process.stdout.write(tmp.value + '\n');
  }
}

let myLinkedList = new DoublyLinkedList();
myLinkedList.prepend(10);
myLinkedList.prepend(20);
myLinkedList.append(33);
try {
  myLinkedList.insert(1, 77);
  myLinkedList.print();
  myLinkedList.remove(0);
  myLinkedList.remove(2);
} catch (error) {
  console.error(error.message);
}
myLinkedList.print();
