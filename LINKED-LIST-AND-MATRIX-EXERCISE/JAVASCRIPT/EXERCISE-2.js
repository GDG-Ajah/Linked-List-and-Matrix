/** EXERCISE 2 
reverse() - Reverse and print out all node values of a linked list data
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // this.head = null;
        this.head = new Node(null);
    }

    insert(newData, beforeElement) {
        let newNode = new Node(newData);
        let current = this.head;
        let previous = null;

        if (beforeElement === null) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (current !== null && current.data !== beforeElement) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
    }

    find(item) {
        let current = this.head;
        while (current !== null && current.data !== item) {
            current = current.next;
        }
        return current;
    }

    findPrevious(item) {
        let current = this.head;
        let previous = null;
        while (current !== null && current.data !== item) {
            previous = current;
            current = current.next;
        }
        return previous;
    }

    remove(item) {
        let previous = this.findPrevious(item);
        if (previous !== null) {
            previous.next = previous.next.next;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
}




