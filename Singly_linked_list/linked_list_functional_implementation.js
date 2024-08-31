function createNode(value, next = null) {
  return { value, next };
}

function createLinkedList(value) {
  const newNode = createNode(value);
  return { head: newNode, tail: newNode, length: 1 };
}

function push(list, value) {
  const newNode = createNode(value);
  if (!list.head) return createLinkedList(value);
  const newHead = list.head;
  const newTail = newNode;
  let current = newHead;
  while (current.next) {
    current = current.next;
  }

  current.next = newNode;

  return { head: newHead, tail: newTail, length: list.length + 1 };
}

function pop(list) {
  if (!list.head) return [undefined, list];

  let current = list.head;
  let prev = null;
  while (current.next) {
    prev = current;
    current = current.next;
  }

  if (!prev) return [current, { head: null, tail: null, length: 0 }];

  prev.next = null;
  return [current, { head: list.head, tail: prev, length: list.length - 1 }];
}

function unShift(list, value) {
  const newNode = createNode(value, list.head);
  if (!list.head) return createLinkedList(value);

  return { head: newNode, tail: list.tail, length: list.length + 1 };
}

function shift(list) {
  if (!list.head) return [undefined, list];
  return [
    list.head,
    {
      head: list.head.next,
      tail: list.length === 1 ? null : list.tail,
      length: list.length - 1,
    },
  ];
}
function get(list, index) {
  if (index < 0 || index >= 0) return undefined;

  let current = list.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current;
}

function set(list, index, value) {
  const node = get(list, index);

  if (node) {
    node.value = value;
    return true;
  }
  return false;
}

function insert(list, index, value) {
  if (index === 0) return unShift(value, list);
  if (index < 0 || index > list.length) return false;
  if (index === list.length) return push(value, list);

  const newNode = createNode(value);
  const prev = get(list, index - 1);
  newNode.next = prev.next;
  prev.next = newNode;

  return { head: list.head, tail: list.tail, length: list.length + 1 };
}

function remove(list, index) {
  if (index < 0 || index >= list.length) return [undefined, list];

  if (index === 0) {
    const removedNode = list.head;
    const newHead = list.head.next;
    return [
      removedNode,
      { head: newHead, tail: list.tail, length: list.length - 1 },
    ];
  }

  let current = list.head;
  let prev = null;

  for (let i = 0; i < index; i++) {
    prev = current;
    current = current.next;
  }

  prev.next = current.next;
  current.next = null;

  const newTail = index === list.length - 1 ? prev : list.tail;

  return [current, { head: list.head, tail: newTail, length: list.length - 1 }];
}

function reverse(list) {
  let current = list.head;
  let prev = null;
  let next = null;
  let newTail = list.head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return { head: prev, tail: newTail, length: list.length };
}

function printLinkedList(list) {
  let current = list.head;
  let values = [];

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values.join(" -> ");
}

let myLinkedList = createLinkedList(4);
myLinkedList = push(myLinkedList, 4);
myLinkedList = push(myLinkedList, 6);
myLinkedList = push(myLinkedList, 7);
myLinkedList = push(myLinkedList, 8);
myLinkedList = push(myLinkedList, 9);
myLinkedList = push(myLinkedList, 10);

console.log("Original List:");
console.log(printLinkedList(myLinkedList));

const [removedNode, updatedList] = remove(myLinkedList, 4);
console.log(
  `Removed node value: ${removedNode ? removedNode.value : "undefined"}`
);
console.log("Updated List:");
console.log(printLinkedList(updatedList));

myLinkedList = reverse(myLinkedList);
console.log("Reversed List:");
console.log(printLinkedList(myLinkedList));
