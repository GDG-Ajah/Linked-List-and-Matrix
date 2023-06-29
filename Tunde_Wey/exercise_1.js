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

  // Insert a new node with newData before the specified element
  // Insert a new node with newData before the specified element
  insert(newData, beforeElement) {
    const newNode = new Node(newData);

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
    } else if (this.head.data === beforeElement) {
      // If the element to insert before is the head
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;

      // Traverse the list until the beforeElement is found
      while (current && current.data !== beforeElement) {
        previous = current;
        current = current.next;
      }

      // If beforeElement is found, insert the new node
      if (current) {
        previous.next = newNode;
        newNode.next = current;
      } else {
        console.log("Element not found in the list.");
      }
    }
  }

  // Find and return the node containing the search item
  find(item) {
    let current = this.head;

    while (current && current.data !== item) {
      current = current.next;
    }

    return current;
  }

  // Find and return the node before the node containing the search item
  findPrevious(item) {
    let current = this.head;
    let previous = null;

    while (current && current.data !== item) {
      previous = current;
      current = current.next;
    }

    return previous;
  }

  // Remove the node containing the specified item
  remove(item) {
    let current = this.head;
    let previous = null;

    while (current && current.data !== item) {
      previous = current;
      current = current.next;
    }

    if (current) {
      if (previous) {
        previous.next = current.next;
      } else {
        this.head = current.next;
      }
    } else {
      console.log("Element not found in the list.");
    }
  }

  // Display the values of all nodes in order of appearance
  display() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage example
const linkedList = new LinkedList();

linkedList.insert("B", "A");
linkedList.insert("D", "C");
linkedList.insert("E", "D");
linkedList.insert("C", "B");
linkedList.insert("A", null);

linkedList.display(); // Output: A B C D E

console.log(linkedList.find("C")); // Output: Node { data: 'C', next: Node { data: 'D', next: [Node] } }

console.log(linkedList.findPrevious("C")); // Output: Node { data: 'B', next: Node { data: 'C', next: [Node] } }

linkedList.remove("D");
linkedList.display(); // Output: A B C E
