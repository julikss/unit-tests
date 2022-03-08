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

    it('should add element to a certain position', () => {
        const startLen = list.length;
        list.insert('a', 1);
        expect(list.length).toBeGreaterThan(startLen);
        expect(list.get(1)).toBe('a');
    });
});

describe('testing delete method', () => {
    const list = new CircularList();
    ['n', 'o', 'w', 'a', 'r'].forEach(el => list.append(el));
    
    test('should throw an error if index < 0', () => {
        expect(() => list.delete(-1)).toThrow(Error);
    });

    test('should throw an error if index > length of the list', () => {
        expect(() => list.delete(list.length + 1)).toThrow(Error);
    });

    test('should throw an error if index isn\'t a number', () => {
        expect(() => list.delete('one')).toThrow(Error);
    });

    it('tail || head should change its value', () => {
        list.delete(0);
        list.delete(3);
        
        expect(list.head.element).toBe('o');
        expect(list.tail.element).toBe('a');

    });

    it('should delete element from a certain position', () => {
        const startLen = list.length;
        list.delete(1);
        expect(list.length).toBeLessThan(startLen);
        expect(list.get(1)).toBe('a');
    });
});

describe('testing deleteAll method', () => {
    const list = new CircularList();
    ['a', 'b', 'c', 'a'].forEach(el => list.append(el));

    test('should throw an error if value isn\'t a string', () => {
        expect(() => list.insert(a, 1)).toThrow(Error);
    });

    test('should throw an error if value isn\'t a single character', () => {
        expect(() => list.insert('abc', 1)).toThrow(Error);
    });

    test('should throw an error if value isn\'t a character', () => {
        expect(() => list.insert('!', 6)).toThrow(Error);
    });

    it('should delete all nodes with entered value', () => {
        list.deleteAll('a');
        expect(list.length).toEqual(2);
        expect(list.get(0)).toEqual('b');
        expect(list.get(1)).toEqual('c');
    });

    it('shouldn\'t change the list if there is nothing to delete', () => {
        list.deleteAll('a');
        expect(list.get(0)).toEqual('b');
        expect(list.get(1)).toEqual('c');
    })
});

describe('testing get method', () => {
    const list = new CircularList();
    ['n', 'o', 'w', 'a', 'r'].forEach(el => list.append(el));
    
    test('should throw an error if index < 0', () => {
        expect(() => list.get(-1)).toThrow(Error);
    });

    test('should throw an error if index > length of the list', () => {
        expect(() => list.get(list.length + 1)).toThrow(Error);
    });

    test('should throw an error if index isn\'t a number', () => {
        expect(() => list.get('one')).toThrow(Error);
    });
    
    it('should get an element with entered index', () => {
        expect(list.get(2)).toBe('w');
    });
})

describe('testing clone method', () => {
    it('should create a copy of a list', () => {
        const list = new CircularList();
        ['a', 'b', 'c', 'a'].forEach(el => list.append(el));
        const list2 = list.clone();

        expect(list2.get(0)).toBe(list.get(0));
        expect(list2.get(1)).toBe(list.get(1));
        expect(list2.get(2)).toBe(list.get(2));
        expect(list2.get(3)).toBe(list.get(3));
        expect(list2.length).toBe(list.length);
    });
});

describe('testing reverse method', () => {
    const list = new CircularList();
    ['a', 'b', 'c', 'a'].forEach(el => list.append(el));
    list.reverse();

    it('should reverse a list', () => {
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('c');
        expect(list.get(2)).toBe('b');
        expect(list.get(3)).toBe('a');
    }); 

    it('should change head && tail properties', () => {
        expect(list.head.element).toEqual(list.get(list.length - 1));
        expect(list.tail.element).toEqual(list.get(0));
    });
});
