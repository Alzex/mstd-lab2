import { List } from './index';

describe('List', () => {
  let list: List;

  beforeEach(() => {
    list = new List();
  });

  describe('length()', () => {
    it('should return 0 for empty list', () => {
      expect(list.length()).toBe(0);
    });

    it('should return 1 for list with one item', () => {
      list.append('a');
      expect(list.length()).toBe(1);
    });
  });

  describe('append()', () => {
    it('should add item to the end of the list', () => {
      list.append('a');
      list.append('b');
      expect(list.get(0)).toBe('a');
      expect(list.get(1)).toBe('b');
    });

    it('should throw an error if item is empty', () => {
      expect(() => list.append('')).toThrowError('Invalid item');
    });

    it('should throw an error if item is longer than one character', () => {
      expect(() => list.append('ab')).toThrowError('Invalid item');
    });

  });

  describe('insert()', () => {
    it('should insert item at the given index', () => {
      list.append('a');
      list.append('b');
      list.insert('c', 1);
      expect(list.get(0)).toBe('a');
      expect(list.get(1)).toBe('c');
      expect(list.get(2)).toBe('b');
    });

    it('should throw an error if item is empty', () => {
      list.append('a');
      expect(() => list.insert('', 0)).toThrowError('Invalid item');
    });

    it('should throw an error if item is longer than one character', () => {
      list.append('a');
      expect(() => list.insert('ab', 0)).toThrowError('Invalid item');
    });
  });

  describe('delete()', () => {
    it('should delete item at the given index', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.delete(1);
      expect(list.get(0)).toBe('a');
      expect(list.get(1)).toBe('c');
    });
  });

  describe('deleteAll()', () => {
    it('should delete all items with the given value', () => {
      list.append('a');
      list.append('b');
      list.append('a');
      list.append('c');
      list.deleteAll('a');
      expect(list.get(0)).toBe('b');
      expect(list.get(1)).toBe('c');
    });
  });

  describe('clear()', () => {
    it('should delete all items', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.clear();
      expect(list.length()).toBe(0);
    });
  });

  describe('get()', () => {
    it('should return item at the given index', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      expect(list.get(0)).toBe('a');
      expect(list.get(1)).toBe('b');
      expect(list.get(2)).toBe('c');
    });

    it('should throw an error if index is out of bounds', () => {
      expect(() => list.get(0)).toThrowError('Invalid index');
    });

    it('should throw an error if index is negative', () => {
      expect(() => list.get(-1)).toThrowError('Invalid index');
    });
  });

  describe('clone()', () => {
    it('should return a copy of the list', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      const copy = list.clone();
      expect(copy.get(0)).toBe('a');
      expect(copy.get(1)).toBe('b');
      expect(copy.get(2)).toBe('c');
    });
  });

  describe('reverse()', () => {
    it('should reverse the list', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.reverse();
      expect(list.get(0)).toBe('c');
      expect(list.get(1)).toBe('b');
      expect(list.get(2)).toBe('a');
    });
  });

  describe('findLast()', () => {
    it('should return the last item', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      expect(list.findLast()).toBe('c');
    });
  });

  describe('extend()', () => {
    it('should extend the list', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      const otherList = new List();
      otherList.append('d');
      otherList.append('e');
      otherList.append('f');
      list.extend(otherList);
      expect(list.get(0)).toBe('a');
      expect(list.get(1)).toBe('b');
      expect(list.get(2)).toBe('c');
      expect(list.get(3)).toBe('d');
      expect(list.get(4)).toBe('e');
      expect(list.get(5)).toBe('f');
    });
  });
});