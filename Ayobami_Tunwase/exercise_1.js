class Node {

    nextNode = null;

    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    #head = null;
    // keeps track of the length of the linked list so it can be gotten at constant time
    #length = 0;

    /**
     * @returns {number} the length of the linked list
     */
    get length() {
        return this.#length;
    }

    /**
     * Decreases the length of the linked list by 1.
     */
    get #decrementLength() {
        this.#length--;
    }

    /**
     * Increases the length of the linked list by 1.
     */
    get #incrementLength() {
        this.#length++;
    }

    /**
     * @returns {Node | null} the head of the linked list
     */
    get head() {
        return this.#head;
    }

    /**
     * Sets the head of the linked list.
     * 
     * @param {Node} value a node representing the head of the linked list
     * 
     */
    set head(node) {
        try {
            if (node instanceof Node || node === null) {
                this.#head = node;
            } else {
                throw new Error('The head must be a node or a null value.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 
     * @returns {boolean} a boolean indicating if the linked list is empty or not
     */
    isEmpty() {
        return this.head === null;
    }


    /**
     * Inserts a node before the specified element.
     * 
     * @param {*} newData data to be inserted
     * @param {*} beforeElement data contained in the node preceding the new node to be inserted
     */
    insert(newData, beforeElement) {
        try {

            if (newData === undefined) {
                throw new Error('No data was provided to the function');
            }

            const newNode = new Node(newData);

            if (beforeElement === undefined) {

                if (!this.isEmpty()) {
                    newNode.nextNode = this.head;
                }

                this.head = newNode;
                this.#incrementLength;

            } else {

                let prevNode = this.head;
                let currentNode = prevNode.nextNode;

                if (this.head.data === beforeElement) {
                    newNode.nextNode = this.head;
                    this.head = newNode;
                } else {
                    while (currentNode !== null) {

                        if (currentNode.data === beforeElement) {
                            prevNode.nextNode = newNode;
                            newNode.nextNode = currentNode;

                            this.#incrementLength;
                            break;
                        }

                        prevNode = currentNode;
                        currentNode = prevNode.nextNode;
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    /**
     * Searches the linked list for a node with the specified value.
     * 
     * @param {any} item value of the target node
     * @returns {Node} the node containing the specified value
     */
    find(item) {

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === item) {
                return currentNode;
            }

            currentNode = currentNode.nextNode;
        }

        // if the element is not found in the list
        return null;
    }

    /**
     * Searches the linked list for the node preceding the target node that contains the specified value.
     * 
     * @param {any} item value of the target node
     * @returns the node preceding the target node
     */
    findPrevious(item) {

        if (this.isEmpty() || this.head.data === item) {
            return null;
        }

        let prevNode = this.head;
        let currentNode = prevNode.nextNode;

        while (currentNode !== null) {

            if (currentNode.data === item) {
                return prevNode;
            }

            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        // if the element is not found in the list
        return null;
    }

    /**
     * Removes a node from the linked list.
     * 
     * @param {*} item the value contained in the node to be deleted
    */
    remove(item) {

        if (this.isEmpty()) {
            return;
        }


        if (this.head.data === item) {

            this.head = this.head.nextNode;
            this.#decrementLength;
        } else {

            let prevNode = this.head;
            let currentNode = prevNode.nextNode;

            while (currentNode !== null) {

                if (currentNode.data === item) {
                    prevNode.nextNode = currentNode.nextNode;
                    this.#decrementLength;

                    // ensures only one item is deleted at a time (only the first occurrence of the item is deleted)
                    break;
                }

                prevNode = currentNode;
                currentNode = prevNode.nextNode;
            }

        }
    }

    /**
     * Prints out all the data contained in the linked list in the form of a string.
     */
    display() {

        let output = '';

        let currentNode = this.head;

        while (currentNode !== null) {
            let { nextNode } = currentNode;

            output += currentNode.data + (nextNode === null ? '' : ' -> ');

            currentNode = nextNode;
        }

        console.log(output || '(empty)');
    }
}

const ll = new LinkedList();

ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);
ll.insert(0);

ll.insert(87, 3);


console.log(ll.find(2));
console.log(ll.findPrevious(5));

ll.remove(35);

ll.display();

module.exports = LinkedList;