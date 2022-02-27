'use strict';

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    length() {
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
        if (typeof index !== 'number' || index < 0 || index > (this.length + 1)) {
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

    
}

const list = new CircularList();
list.append('a');
list.append('b');
list.append('c');
list.append('b');
list.insert('u', 4);
list.insert('l', 5);
console.log(list);
//console.log(list.length);