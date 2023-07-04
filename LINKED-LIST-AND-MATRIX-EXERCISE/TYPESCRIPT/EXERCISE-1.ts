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
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}