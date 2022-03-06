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
    })

    test('should return length of a list with one element', () => {
        const list = new CircularList();
        list.append('a');
        expect(list.getLength()).toBe(1);
    })


})