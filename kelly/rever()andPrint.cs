using System;

class LinkedListNode<T>
{
    public T Value { get; set; }
    public LinkedListNode<T> Next { get; set; }

    public LinkedListNode(T value)
    {
        Value = value;
        Next = null;
    }
}

class LinkedList<T>
{
    private LinkedListNode<T> head;

    public void Add(T value)
    {
        LinkedListNode<T> newNode = new LinkedListNode<T>(value);

        if (head == null)
        {
            head = newNode;
        }
        else
        {
            LinkedListNode<T> current = head;
            while (current.Next != null)
            {
                current = current.Next;
            }
            current.Next = newNode;
        }
    }

    public void ReverseAndPrint()
    {
        LinkedListNode<T> prev = null;
        LinkedListNode<T> current = head;
        LinkedListNode<T> next = null;

        while (current != null)
        {
            next = current.Next;
            current.Next = prev;
            prev = current;
            current = next;
        }

        // prev now points to the new head of the reversed list
        while (prev != null)
        {
            Console.WriteLine(prev.Value);
            prev = prev.Next;
        }


        LinkedList<int> myList = new LinkedList<int>();
        myList.Add(1);
        myList.Add(2);
        myList.Add(3);
        myList.Add(4);

        myList.ReverseAndPrint();
    }

}