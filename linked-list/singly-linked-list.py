class Node(object):

    def __init__(self, data):
        self.data = data
        self.next_node = None


class SinglyLinkedList(object):

    def __init__(self):
        self.head_node = None

    def get_head(self):
        return self.head_node

    def is_empty(self):
        if self.head_node is None:
            return True
        return False

    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next_node = self.head_node
        self.head_node = new_node
        return self.head_node

    def insert_at_tail(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head_node = new_node
            return
        current_node = self.get_head()
        while current_node.next_node:
            current_node = current_node.next_node
        current_node.next_node = new_node

    def insert_at_position(self, position, data):
        """
        operates using zero based indexing
        """
        if self.is_empty():
            print("LinkedList is empty")
            return
        new_node = Node(data)
        if position == 0:
            new_node.next_node = self.head_node
            self.head_node = new_node
            return
        counter = 1
        current_node = self.head_node.next_node
        prev_node = self.head_node
        while current_node.next_node and counter != position:
            prev_node = current_node
            current_node = current_node.next_node
            counter += 1
        if counter == position:
            new_node.next_node = current_node
            prev_node.next_node = new_node
            return
        print("position out of range")

    def search(self, value):
        current_node = self.head_node
        while current_node:
            if current_node.data == value:
                return True
            current_node = current_node.next_node
        return False

    def search_previous(self, value):
        current_node = self.head_node()
        if current_node.data == value:
            return None
        prev_node = current_node
        current_node = current_node.next_node
        while current_node:
            if current_node.data == value:
                return prev_node
            prev_node = current_node
            current_node = current_node.next_node
        return None

    def search_recursive(self, current_node, value):
        if not current_node:
            return False
        if current_node.data == value:
            return True
        return self.search_recursive(current_node.next_node, value)

    def delete_at_head(self):
        if self.is_empty():
            print("linked list is empty")
            return False
        current_node = self.head_node
        self.head_node = current_node.next_node
        current_node.next_node = None
        return True

    def delete_at_tail(self):
        if self.is_empty():
            return False
        if self.head_node.next_node is None:
            self.head_node = None
            return True
        current_node = self.head_node
        prev_node = None
        while current_node.next_node:
            prev_node = current_node
            current_node = current_node.next_node
        prev_node.next_node = None
        return True

    def delete(self, value):
        current_node = self.head_node
        if current_node.data == value:
            self.head_node = current_node.next_node
            current_node.next_node = None
            return True
        prev_node = current_node
        current_node = current_node.next_node
        while current_node:
            if current_node.data == value:
                prev_node.next_node = current_node.next_node
                current_node.next_node = None
                return True
            prev_node = current_node
            current_node = current_node.next_node
        return False

    def print_list(self):
        if self.head_node is None:
            print("LinkedList is empty")
            return
        temp_node = self.head_node
        output_str = "head -> "
        while temp_node.next_node:
            output_str += f"{temp_node.data} -> "
            temp_node = temp_node.next_node
        output_str += f"{temp_node.data} -> None"
        print(output_str)
