'use strict';

const LinkedList = require('../model/linked-list');

describe('linked-list.js', () => {
  describe('append method', () => {
    test('A list with a single element, should have a value and no next', () => {
      const result = new LinkedList(5);
      expect(result.value).toEqual(5);
      expect(result.next).toBeNull();
    });

    test('append should properly modify the next property', () => {
      const result = new LinkedList(5);
      result.append(new LinkedList(4));
      result.append(new LinkedList(10));

      expect(result.value).toEqual(5);
      expect(result.next.value).toEqual(4);
      expect(result.next.next.value).toEqual(10);
      expect(result.next.next.next).toBeNull();
    });
  });

  describe('remove method', () => {
    test('remove should update the next property and erase an element', () => {
      const first = new LinkedList(10);
      const second = new LinkedList(20);
      const third = new LinkedList(30);

      first.append(second);
      second.append(third);

      expect(first.value).toEqual(10);
      expect(first.next.value).toEqual(20);
      expect(first.next.next.value).toEqual(30);
      expect(first.next.next.next).toBeNull();

      first.remove(second);

      expect(first.value).toEqual(10);
      expect(first.next.value).toEqual(30);
      expect(first.next.next).toBeNull();
    });

    test('should return null if linked list is one element and head is removed', () => {
      const first = new LinkedList(10);

      first.remove(first);

      expect(first.value).toBeNull();
    });
  });
});
