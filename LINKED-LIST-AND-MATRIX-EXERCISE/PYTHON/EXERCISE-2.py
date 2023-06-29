#  EXERCISE 2 
# reverse() - Reverse and print out all node values of a linked list data

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__ (self):
        self.head = None

    def reverse(self):
        prev = None
        current = self.head
        while(current is not None):
            next = current.next
            current.next = prev 
            prev = current 
            current = next
        self.head = prev

    def printList(self):
        temp = self.head
        while(temp):
            print (temp.data)
            temp = temp.next