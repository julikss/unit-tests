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
    append(element) {
        const newNode = { element: element, next: this.head };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length +=1;
        return newNode;
    }
    
}