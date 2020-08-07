class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    process.stdout.write(`[APPEND ${value}] `);
    const newNode = new Node(value);

    if (this.tail == null) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    process.stdout.write(`[PREPEND ${value}] `);
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  insert(index, value) {
    process.stdout.write(`[INSERT ${value} AT ${index}]: `);
    if (index >= this.length) {
      this.append(value);
      return this.print();
    }

    if (index <= 0 || this.length == 0) {
      this.prepend(value);
      return this.print();
    }

    const newNode = new Node(value);
    const bef = this.traverseToIndex(index - 1);
    const aft = bef.next;

    //* insert the node in between prev and aft
    bef.next = newNode;
    newNode.prev = bef;
    aft.prev = newNode;
    newNode.next = aft;
    this.length++;

    this.print();
  }

  remove(index) {
    process.stdout.write(`[REMOVAL AT ${index}]: `);
    if (index < 0 || index >= this.length || this.head == null) {
      throw new Error("error: invalid index for removal");
    }

    if (index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.print();
    }

    //* removing the last element
    if (index == this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this.print();
    }
    // find the previous of the node to be deleted
    const toDelete = this.traverseToIndex(index);
    const bef = toDelete.prev;
    const aft = toDelete.next;
    bef.next = aft;
    aft.prev = bef;
    this.length--;

    return this.print();
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
    while (temp.next != null) {
      process.stdout.write(temp.value + " ⇆ ");
      temp = temp.next;
    }
    process.stdout.write(temp.value + "\n");
    // process.stdout.write('LENGTH: ' + this.length + '\n');
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(6);
myLinkedList.append(10);
myLinkedList.prepend(1);
myLinkedList.insert(0, 55);
myLinkedList.insert(10, 69);
try {
  myLinkedList.remove(1);
  myLinkedList.remove(1);
  myLinkedList.remove(0);
  myLinkedList.remove(4);
} catch (error) {
  console.log(error.message);
}
