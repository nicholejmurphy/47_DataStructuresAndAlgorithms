/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    // Check if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      // Adds newNode to the end, and sets tail to newNode
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    // Check id list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      // Make head now second item by duplicating
      // Set head to newNode
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return new Error("Invalid: empty list");
    }
    let currNode = this.head;
    while (currNode) {
      if (!currNode.next.next) {
        const popped = this.tail;
        this.tail.next = currNode;
        this.tail = currNode;
        this.length -= 1;
        return popped.val;
      }
      currNode = currNode.next;
    }
  }

  // /** shift(): return & remove first item. */

  // shift() {
  //   if (!this.head) {
  //     return new Error("Invalid: empty list");
  //   }
  //   const popped = this.head;
  //   this.head = this.head.next;
  //   this.length -= 1;
  //   return popped.val;
  // }

  // /** getAt(idx): get val at idx. */

  // getAt(idx) {}

  // /** setAt(idx, val): set val at idx to val */

  // setAt(idx, val) {}

  // /** insertAt(idx, val): add node w/val before idx. */

  // insertAt(idx, val) {}

  // /** removeAt(idx): return & remove item at idx, */

  // removeAt(idx) {}

  // /** average(): return an average of all values in the list */

  // average() {}
}

module.exports = LinkedList;
