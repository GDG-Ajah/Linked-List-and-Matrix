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

  // Insert a new node at the end of the linked list
  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Reverse and print out all node values of the linked list
  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;

    let reversedValues = "";
    current = this.head;
    while (current) {
      reversedValues += current.data + " ";
      current = current.next;
    }

    console.log("Reversed Linked List:", reversedValues.trim());
  }

  // Display the values of all nodes in order of appearance
  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    console.log("Linked List:", result.trim());
  }
}

const linkedList = new LinkedList();

linkedList.insert("A");
linkedList.insert("B");
linkedList.insert("C");
linkedList.insert("D");
linkedList.insert("E");

linkedList.display(); // Output: Linked List: A B C D E

linkedList.reverse(); // Output: Reversed Linked List: E D C B A
