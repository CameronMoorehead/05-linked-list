'use strict';

const LinkedList = function() {
  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let head = null;
  let length = 0;

  this.append = element => {
    const node = new Node(element);
    let current = head;

    if (!head) {
      head = element;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.find = element => {
    let current = head;

    while (current.next) {
      if (current.element === element) {
        return current;
      }
      current = current.next;
    }
  };

  this.remove = element => {
    let current = head;
    let previous = null;

    if (current.element === element) {
      head = head.next;
      return head;
    }
    while (current) {
      current = current.next;
      previous = current;
      if (current === element) {
        previous.next = current.next;
        return head;
      }
    }
    throw new ReferenceError('<element> cannot be found');
  };
};

module.exports = LinkedList;
