// EXERCISE 2 
// reverse() - Reverse and print out all node values of a linked list data

import 'dart:io';

class Node {
  int data;
  Node next;
  Node(int data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  Node head;
  LinkedList() {
    this.head = null;
  }

  void insert(int data) {
    Node newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      Node last = this.head;
      while (last.next != null) {
        last = last.next;
      }
      last.next = newNode;
    }
  }

  void reverse() {
    Node prev = null;
    Node current = this.head;
    Node next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next; 
    }
    this.head = prev;
  }

  void printList() {
    Node last = this.head;
    while (last != null) {
      stdout.write("${last.data} ");
      last = last.next;
    }
    print("");
  }
}