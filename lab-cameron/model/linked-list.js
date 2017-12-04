'use strict';

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(node) {
    if (!(node instanceof LinkedList)) {
      throw new TypeError('<node> should be an instance of LinkedList');
    }

    if (!this.next) {
      this.next = node;
    } else {
      this.next.append(node);
    }

    return this;
  }

  find(value) {
    if (this.value === null) {
      throw new ReferenceError('<value> cannot be found');
    }

    if (this.value === value) {
      return this;
    } else {
      return this.next.find(value);
    }
  }

  remove(node) {
    if (!(node instanceof LinkedList)) {
      throw new TypeError('<node> should be an instance of LinkedList');
    }

    if (!this.next && this === node) {
      this.value = null;
      return this;
    }
    if (this.next === node) {
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}

module.exports = LinkedList;
