'use strict';

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }

    //add new element to the end of the list
    append(data) {
        const newNode = { element: data, next: this.head };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return newNode;
    }

    //add new element to the certain position in the list
    insert(data, index) {
        if (typeof index !== 'number' || index < 0 || (index > this.length + 1)) {
            throw new Error('You entered invalid index');
        }
        
        const newNode = { element: data, next: this.head };
        this.length++;

        if (index === 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        } else {
            let counter = 0;
            let prevNode;
            let currNode = this.head;

            while (counter < index) {
                prevNode = currNode;
                currNode = currNode.next;
                counter++;
            }

            prevNode.next = newNode;
            currNode.prev = newNode;
            newNode.prev = prevNode;
            newNode.next = currNode;
            return newNode;
        }
    }

    //delete node by its index
    delete(index) {
        if (typeof index !== 'number' || index < 0 || (index > this.length + 1)) {
            throw new Error('You entered invalid index');
        }

        let currNode = this.head;

        if (index === 0) {
            this.head = currNode.next;
        } else {
            let prevNode = null;
            let counter = 0; 

            while (counter < index) {
                prevNode = currNode.next;
                currNode = currNode.next;
                counter++;
            }

            prevNode.next = currNode.next;

            if (currNode.next) {
                currNode.next.prev = prevNode;
            }
        }
            this.length--;
            return currNode.element;
    }

    //delete all nodes with the same value
    deleteAll(value) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;

        if (currNode !== null) {
            for(let i = 0; i < this.getLength(); i++) {
                if (currNode.element === value) {
                    this.delete(i);
                    currNode = currNode.next;
                    this.length--;
                } else {
                    currNode = currNode.next;
                }
                i++;
            }
         }

        return;
    }

    //get an element by its index
    get(index) {
        if (typeof index !== 'number' || index < 0 || (index > this.length + 1)) {
            throw new Error('You entered invalid index');
        }

        let counter = 0;
        let currNode = this.head;

        while (counter !== index) {
            currNode = currNode.next;
            counter ++;
        }
        
        return currNode.element;
    }

    clone() {
        let clonedList = new CircularList();
        let currNode = this.head;
        let counter = 0;

        while (counter < this.getLength()) {
            clonedList.append(currNode.element);
            currNode = currNode.next;
            clonedList.length++;
            counter++;
        }

        return clonedList;
    }
    
    reverse() {
        let currNode = this.head;
        let tailNode = this.tail;
        let node;
        this.tail = currNode;
        this.head = tailNode;

        for (let i = 0; i < this.getLength(); i++) {
            node = currNode.next;
            currNode.next = currNode.prev;
            currNode.prev = node;
            currNode = node;
        }

        return this;
    }

    //finds first element in the list with the same value and returns its index
    findFirst(element) {
        let currNode = this.head;
        
        for (let i = 0; i < this.getLength(); i++) {
            if (currNode.element === element) return i;
            currNode = currNode.next;
        }

        return -1;
    }

    //finds last element in the list with the same value and returns its index
    findLast(element) {
        let currNode = this.tail;
        
        for (let i = this.getLength() - 1; i >= 0; i++) {
            if (currNode.element === element) return i;
            currNode = currNode.prev;
        }

        return -1;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }

    //extends list with another list
    extend(list) {
        
    }

}

const list = new CircularList();
list.append('a');
list.append('b');
list.append('c');
list.append('b');
//list.insert('u', 4);
//list.insert('l', 5);
//list.delete(1);
//list.deleteAll('b');
list.get(3);

console.log(list.reverse());
