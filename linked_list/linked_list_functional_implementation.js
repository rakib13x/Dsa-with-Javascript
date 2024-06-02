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
      lenght: list.length - 1,
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
  if (index === 0) return unshift(value, list);
  if (index < 0 || index > list.length) return false;
  if (index === list.length) return pop(value, list);

  const newNode = createNode(value);
  const prev = get(list, index - 1);
  prev.next = newNode.next;
  newNode.next = prev;

  return { head: list.head, tail: list.tail, length: list.length + 1 };
}

function remove(list, index) {
  if (index === 0) return shift(list);
  if (index < 0 || index >= list.length) return [undefined, list];
  if (index === list.length - 1) return pop(list);

  const prev = get(list, index - 1);
  if (prev === null || prev.next === null) return [undefined, list];

  const nodeToRemove = prev.next;
  prev.next = nodeToRemove.next;

  if (index === list.length - 1) {
    list.tail = prev;
  }

  list.length--;

  return [
    nodeToRemove,
    { head: list.head, tail: list.tail, length: list.length },
  ];
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

let myLinkedList = createLinkedList(4);
myLinkedList = push(myLinkedList, 4);
myLinkedList = push(myLinkedList, 6);
myLinkedList = push(myLinkedList, 7);
myLinkedList = push(myLinkedList, 8);
myLinkedList = push(myLinkedList, 9);
myLinkedList = push(myLinkedList, 10);
const [removedNode, updatedList] = remove(myLinkedList, 4);
console.log(
  `Removed node value: ${removedNode ? removedNode.val : "undefined"}`
);
console.log(printLinkedList(updatedList));
myLinkedList = reverse(myLinkedList);

console.log(myLinkedList);
