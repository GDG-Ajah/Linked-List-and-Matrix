from singly_linkedlist import SinglyLinkedList


def reverse(linked_list):
    if linked_list.is_empty():
        return
    current_node = linked_list.head_node
    prev_node = None
    next_node = None
    while current_node:
        next_node = current_node.next_node
        current_node.next_node = prev_node
        prev_node = current_node
        current_node = next_node
    linked_list.head_node = prev_node


linked_list = SinglyLinkedList()

for i in range(1, 10):
    linked_list.insert_at_head(i)
linked_list.print_list()

reverse(linked_list)
linked_list.print_list()
