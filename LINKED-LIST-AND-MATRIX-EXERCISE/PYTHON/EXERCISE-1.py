#  Implement a Linked List in your chosen language with the following operations
#     --  insert(newData, beforeElement)
#         - Add an newData element before the existing item 
#     --  find(item) - returns the node containing search item.
#     --  findPrevious(item) - returns the node before the node containing search item
#     --  remove(item) - remove node containing specified item
#     --  display() - print out values of all nodes in order of appearance


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    # Constructor to initialize the linked list
    def __init__(self):
        self.head = None

    # Method to insert a new node at the beginning
    def insert(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Method to insert a new node after a specified node
    def insert_after(self, prev_node, data):
        if prev_node is None:
            print("The given previous node must be in linked list")
            return

        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node

    # Method to insert a new node before a specified node
    def insert_before(self, prev_node, data):
        if prev_node is None:
            print("The given previous node must be in linked list")
            return

        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node

    # Method to append a new node at the end
    def append(self, data):
        new_node = Node(data)

        # If the Linked List is empty, then make the new node as head
        if self.head is None:
            self.head = new_node
            return

        # Else traverse till the last node
        last = self.head
        while(last.next):
            last = last.next

        # Change the next of last node
        last.next = new_node

    # Method to find the node containing a specified data
    def find(self, data):
        current = self.head
        while current is not None:
            if current.data == data:
                return current
            current = current.next
        return None

    # Method to find the node before the node containing a specified data
    def find_previous(self, data):
        current = self.head
        while current is not None:
            if current.next.data == data:
                return current
            current = current.next
        return None

    # Method to remove the node containing a specified data
    def remove(self, data):
        current = self.head
        previous = None
        while current is not None:
            if current.data == data:
                if previous is None:
                    self.head = current.next
                else:
                    previous.next = current.next
                return True
            previous = current
            current = current.next