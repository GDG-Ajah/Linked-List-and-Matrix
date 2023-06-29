/** EXERCISE 2 
reverse() - Reverse and print out all node values of a linked list data
*/

class Node {
    data: any;
    next: Node;
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: Node;
    constructor() {
        this.head = null;
    }

    insert(newData: any, beforeElement: any) {
        let newNode = new Node(newData);
        let current = this.head;
        let previous = null;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (current.data !== beforeElement) {
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
        }
    }

    find(item: any) {
        let current = this.head;
        while (current.data !== item) {
            current = current.next;
        }
        return current;
    }

    findPrevious(item: any) {
        let current = this.head;
        let previous = null;
        while (current.data !== item) {
            previous = current;
            current = current.next;
        }
        return previous;
    }

    remove(item: any) {
        let current = this.head;
        let previous = null;
        while (current.data !== item) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        current.next = null;
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