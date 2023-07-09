// used an old version of node for testing (about require in place of import statement)
const LinkedList = require('./exercise_1');

/**
 * Reverses a linked list in place.
 */
LinkedList.prototype.reverse = function () {

    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode !== null) {
        nextNode = currentNode.nextNode;

        currentNode.nextNode = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    this.head = prevNode;
}

const ll = new LinkedList();

ll.insert(100);
ll.insert(99);
ll.insert(98);
ll.insert(97);
ll.insert(96);

ll.display();

ll.reverse();

ll.display();