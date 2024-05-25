class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    // Traverse the list to find the last node
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    // Set the tail to the second-to-last node
    this.tail = prev;
    this.tail.next = null;
    // Decrement the length of the list
    this.length--;
    // If the list is now empty, set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the popped node
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {}
}

let myLinkedList = new LinkedList(4);

myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
console.log(myLinkedList.get(-1));

console.log(myLinkedList);
