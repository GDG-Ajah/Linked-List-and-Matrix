// EXERCISE 1
// ** Implement a Linked List in your chosen language with the following operations
//     --  insert(newData, beforeElement)
//         - Add an newData element before the existing item 
//     --  find(item) - returns the node containing search item.
//     --  findPrevious(item) - returns the node before the node containing search item
//     --  remove(item) - remove node containing specified item
//     --  display() - print out values of all nodes in order of appearance


class Node {
  int data;
  Node next;

  Node(this.data);

  void displayNode() {
    print(data);
  }
}

class LinkedList {
  Node first;

  LinkedList() {
    first = null;
  }

  bool isEmpty() {
    return first == null;
  }

  void insertFirst(int data) {
    Node newNode = new Node(data);
    newNode.next = first;
    first = newNode;
  }

  Node deleteFirst() {
    Node temp = first;
    first = first.next;
    return temp;
  }

  void insertLast(int data) {
    Node current = first;
    while (current.next != null) {
      current = current.next;
    }
    Node newNode = new Node(data);
    current.next = newNode;
  }

  Node deleteLast() {
    Node current = first;
    Node previous = first;
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current;
  }

  void insertAfter(int key, int data) {
    Node current = first;
    while (current.data != key) {
      current = current.next;
      if (current == null) {
        return;
      }
    }
    Node newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
  }

  Node deleteKey(int key) {
    Node current = first;
    Node previous = first;
    while (current.data != key) {
      previous = current;
      current = current.next;
      if (current == null) {
        return null;
      }
    }
    if (current == first) {
      first = first.next;
    } else {
      previous.next = current.next;
    }
    return current;
  }

  void displayList() {
    print("List (first --> last): ");
    Node current = first;
    while (current != null) {
      current.displayNode();
      current = current.next;
    }
    print("");
  }
}