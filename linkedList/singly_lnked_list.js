class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    process.stdout.write('[APPEND] ');
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    process.stdout.write('[PREPEND] ');
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  insert(index, value) {
    process.stdout.write(`[INSERTION AT ${index}]: `);
    if (index >= this.length) {
      this.append(value);
      return this.print();
    }

    if (index == 0 || this.length == 0) {
      this.prepend(value);
      return this.print();
    }

    const newNode = new Node(value);
    const bef = this.traverseToIndex(index - 1);
    const aft = bef.next;

    //* insert the node in between prev and aft
    bef.next = newNode;
    newNode.next = aft;
    this.length++;

    this.print();
  }

  remove(index) {
    process.stdout.write(`[REMOVAL AT ${index}]: `);
    if (index < 0 || index > this.length || this.head == null) {
      throw new Error('error: invalid index for removal');
    }

    let temp = this.head;

    if (index == 0) {
      this.head = temp.next;
      this.length--;
      return this.print();
    }

    // find the previous of the node to be deleted
    const prev = this.traverseToIndex(index - 1);
    temp = prev.next;
    // if the index is the last element in the list
    if (temp.next == null) {
      this.tail = prev;
      prev.next = null;
      this.length--;
      return this.print();
    }
    prev.next = temp.next;
    this.length--;

    return this.print();
  }

  reverse() {
    // if no element or a single element, do nothing
    if (!this.head.next) {
      return this;
    }

    let prev = null;
    let cur = this.head;
    // make the tail point to the first element
    this.tail = cur;
    while (cur != null) {
      let nxt = cur.next;
      // this is where the actual link reversal happens
      cur.next = prev;
      prev = cur;
      cur = nxt;
    }
    // make the end point to the head (prev stores the end value here)
    this.head = prev;
  }

  traverseToIndex(index) {
    // check index here
    let counter = 0;
    let curNode = this.head;
    while (counter != index) {
      curNode = curNode.next;
      counter++;
    }
    return curNode;
  }

  //! PRINT THE WHOLE LIST
  print() {
    let temp = this.head;
    while (temp != this.tail) {
      process.stdout.write(temp.value + ' -> ');
      temp = temp.next;
    }
    process.stdout.write(temp.value + '\n');
    // process.stdout.write('LENGTH: ' + this.length + '\n');
  }
}

function testList() {
  const myLinkedList = new LinkedList();
  myLinkedList.append(6);
  myLinkedList.append(10);
  myLinkedList.append(15);
  myLinkedList.prepend(1);
  myLinkedList.prepend(22);
  myLinkedList.prepend(44);
  myLinkedList.insert(2, 4);
  myLinkedList.insert(0, 55);
  myLinkedList.insert(10, 69);
  try {
    myLinkedList.remove(1);
    myLinkedList.remove(1);
    myLinkedList.remove(0);
    myLinkedList.remove(4);
  } catch (error) {
    console.log(error);
    // console.log(error.message);
  }
  myLinkedList.reverse();
  myLinkedList.print();
}

export { LinkedList };
