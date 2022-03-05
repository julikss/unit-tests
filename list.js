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
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            throw new Error('You entered invalid index');
        }
        
        const newNode = { element: data, next: this.head };

        if (index === 0) {
            this.head = newNode;
            this.length++;
            return newNode;
        }
        
        if (index === this.length) {
            this.append(newNode.element);
            this.length++;
            return newNode;
        }

        let prevNode;
        let currNode = this.head;

        for (let i = 0; i < this.length; i++) {
            if (index === i) {
                prevNode.next = newNode;
                currNode.prev = newNode;
                newNode.prev = prevNode;
                newNode.next = currNode;
                this.length++;
                break;
            }

            prevNode = currNode;
            currNode = currNode.next;
        }
    }

    //delete node by its index
    delete(index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            throw new Error('You entered invalid index');
        }

        let currNode = this.head;
        let prevNode;

        if (index === 0) {
            this.head = currNode.next;
            this.length--;
            return currNode.element;
        } 

        if (index === this.length) {
            this.tail = prevNode;
            this.length--;
            return currNode.element;
        }       

        for (let i = 0; i < this.length; i++) {
            if (index === i) {
                prevNode.next = currNode.next;
                this.length--;
                return currNode.element;
            }

            prevNode = currNode;
            currNode = prevNode.next;
        }
    }

    //delete all nodes with the same value
    deleteAll(element) {
        if (!this.head) {
            return null;
        }

        let currNode = this.tail;
       
        for(let i = this.length; i > 0; i--) {
            if (currNode.element === element) {
                this.delete(i - 1);
                this.length--;
            } else console.log('Nothing to delete');

            currNode = currNode.prev;
        }
         
        return;
    }

    //get an element by its index
    get(index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
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

        for (let i = 0; i <= this.length; i++) {
            clonedList.append(currNode.element);
            currNode = currNode.next;
        }

        return clonedList;
    }
    
    reverse() {
        if (!this.head) {
            return null;
        }

        let oldHead = this.head;
        let oldTail = this.tail;
        let currNode = this.head;
        let nextNode = this.head.next;

        for (let i = 0; i < this.length; i++) {
            currNode.next = oldTail;
            oldTail = currNode;
            currNode = nextNode;
            nextNode = currNode.next;
        }

        this.head = this.tail;
        this.tail = oldHead;

        return this;
    }

    //finds first element in the list with the same value and returns its index
    findFirst(element) {
        let currNode = this.head;
        
        for (let i = 0; i < this.length; i++) {
            if (currNode.element === element) return i;
            currNode = currNode.next;
        }

        return -1;
    }

    //finds last element in the list with the same value and returns its index
    findLast(element) {
        let currNode = this.tail;
        
        for (let i = this.length - 1; i >= 0; i--) {
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

    //extends list with another one
    extend(list) {
        let currNode = list.head;

        for (let i = 0; i < list.length; i++) {
            this.append(currNode.element);
            currNode = currNode.next;
        }

        return this;
    }

    //for checking work of methods
    printList() {
        let currNode = this.head;
        for (let i = 0; i < list.length; i++) {
          console.log(currNode.element);
          currNode = currNode.next;
        }
    }
}

//usage
const list = new CircularList();
list.append('a');
list.append('d');
list.append('d');
list.append('b');
list.append('c');
list.append('d');
list.append('a');
list.append('d');

//list.insert('u', 0);
//list.insert('l', 3);
//list.delete(0);
//list.deleteAll('d');
//console.log(list.reverse());
//list.print();
//console.log(list);
