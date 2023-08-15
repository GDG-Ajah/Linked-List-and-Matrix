using System;

class Matrix
{
    private int[,] data;

    public Matrix(int rows, int columns)
    {
        data = new int[rows, columns];
    }

    public void Insert(int item, int i, int j)
    {
        data[i, j] = item;
    }

    public void Traverse()
    {
        int rows = data.GetLength(0);
        int columns = data.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                Console.Write(data[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    public bool Search(int item)
    {
        int rows = data.GetLength(0);
        int columns = data.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (data[i, j] == item)
                {
                    return true;
                }
            }
        }

        return false;
    }

    public Tuple<int, int> GetIndex(int item)
    {
        int rows = data.GetLength(0);
        int columns = data.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (data[i, j] == item)
                {
                    return Tuple.Create(i, j);
                }
            }
        }

        return null;
    }

    public void ReverseRow(int rowIndex)
    {
        int columns = data.GetLength(1);
        int start = 0;
        int end = columns - 1;

        while (start < end)
        {
            int temp = data[rowIndex, start];
            data[rowIndex, start] = data[rowIndex, end];
            data[rowIndex, end] = temp;

            start++;
            end--;
        }
    }

    public void ReverseColumn(int columnIndex)
    {
        int rows = data.GetLength(0);
        int start = 0;
        int end = rows - 1;

        while (start < end)
        {
            int temp = data[start, columnIndex];
            data[start, columnIndex] = data[end, columnIndex];
            data[end, columnIndex] = temp;

            start++;
            end--;
        }
    }

    public void Sort(int item)
    {
        int rows = data.GetLength(0);
        int columns = data.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (data[i, j] == item)
                {
                    data[i, j] = 0; // Assuming "removing" by setting to 0
                }
            }
        }
    }

    public int DiagonalSum()
    {
        int rows = data.GetLength(0);
        int columns = data.GetLength(1);
        int sum = 0;

        if (rows == columns)
        {
            for (int i = 0; i < rows; i++)
            {
                sum += data[i, i];
            }
        }

        return sum;
    }

    public void Display()
    {
        Traverse(); // Simply printing the matrix using Traverse method
    }
}

class Program
{
    static void Main(string[] args)
    {
        Matrix matrix = new Matrix(3, 4);

        matrix.Insert(1, 0, 0);
        matrix.Insert(2, 0, 1);
        matrix.Insert(3, 0, 2);
        matrix.Insert(4, 0, 3);
        matrix.Insert(5, 1, 0);
        matrix.Insert(6, 1, 1);
        matrix.Insert(7, 1, 2);
        matrix.Insert(8, 1, 3);
        matrix.Insert(9, 2, 0);
        matrix.Insert(10, 2, 1);
        matrix.Insert(11, 2, 2);
        matrix.Insert(12, 2, 3);

        Console.WriteLine("Matrix:");
        matrix.Traverse();

        Console.WriteLine("Search for item 6: " + matrix.Search(6));
        Console.WriteLine("Search for item 13: " + matrix.Search(13));

        Tuple<int, int> index = matrix.GetIndex(7);
        Console.WriteLine("Index of item 7: (" + index.Item1 + ", " + index.Item2 + ")");

        matrix.ReverseRow(1);
        Console.WriteLine("Matrix after reversing row 1:");
        matrix.Traverse();

        matrix.ReverseColumn(2);
        Console.WriteLine("Matrix after reversing column 2:");
        matrix.Traverse();

        matrix.Sort(8);
        Console.WriteLine("Matrix after sorting (removing) item 8:");
        matrix.Traverse();

        Console.WriteLine("Sum of diagonal elements: " + matrix.DiagonalSum());

        Console.WriteLine("Matrix displayed using Display method:");
        matrix.Display();

        Console.ReadLine();
    }
}
