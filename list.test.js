const { CircularList } = require('./list');

describe('testing getLength method', () => {
    test('should be a number of nodes in the list', () => {
        const list = new CircularList();
        ['n', 'o', 'w', 'a', 'r'].forEach(el => list.append(el));
        expect(list.getLength()).toBe(5);
    });

    test('should return length of an empty list (0)', () => {
        const list = new CircularList();
        expect(list.getLength()).toBe(0);
    });

    test('should return length of a list with one element', () => {
        const list = new CircularList();
        list.append('a');
        expect(list.getLength()).toBe(1);
    });
});

describe('testing append method', () => {
    const list = new CircularList();
    
    it('should increase length property', () => {
        list.clear();
        const startLen = list.length;
        list.append('a');
        expect(list.length).toBeGreaterThan(startLen);
    });

    it('should add element to the end of the list', () => {
        list.clear();
        list.append('b');
        expect(list.get(list.length - 1)).toEqual('b');
    });

    it('tail should have new value', () => {
        list.clear();
        list.append('c');
        expect(list.tail.element).toEqual('c');
    });

    test('should throw an error if value isn\'t a string', () => {
        expect(() => list.append(a)).toThrow(Error);
    });

    test('should throw an error if value isn\'t a single character', () => {
        expect(() => list.append('abc')).toThrow(Error);
    });

    test('should throw an error if value isn\'t a character', () => {
        expect(() => list.append('!')).toThrow(Error);
    });
});

describe('testing insert method', () => {
    const list = new CircularList();
    ['n', 'o', 'w', 'a', 'r'].forEach(el => list.append(el));
    
    test('should throw an error if index < 0', () => {
        expect(() => list.insert('a', -1)).toThrow(Error);
    });

    test('should throw an error if index > length of the list', () => {
        expect(() => list.insert('a', list.length + 1)).toThrow(Error);
    });

    test('should throw an error if index isn\'t a number', () => {
        expect(() => list.insert('a', 'one')).toThrow(Error);
    });

    test('should throw an error if value isn\'t a string', () => {
        expect(() => list.insert(a, 1)).toThrow(Error);
    });

    test('should throw an error if value isn\'t a single character', () => {
        expect(() => list.insert('abc', 1)).toThrow(Error);
    });

    test('should throw an error if value isn\'t a character', () => {
        expect(() => list.insert('!', 6)).toThrow(Error);
    });

    it('should increase length property', () => {
        const startLen = list.length;
        list.insert('a', 1);
        expect(list.length).toBeGreaterThan(startLen);
    });
});

  