/** EXERCISE 1
** Implement a Linked List in your chosen language with the following operations
    --  insert(newData, beforeElement)
        - Add an newData element before the existing item 
    --  find(item) - returns the node containing search item.
    --  findPrevious(item) - returns the node before the node containing search item
    --  remove(item) - remove node containing specified item
    --  display() - print out values of all nodes in order of appearance
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}   

class LinkedList {
    constructor() {
        this.head = null;
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
}
