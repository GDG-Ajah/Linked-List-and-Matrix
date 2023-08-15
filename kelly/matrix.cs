using System;

class Matrix<T>
{
    private T[,] matrix;

    public Matrix(int rows, int columns)
    {
        matrix = new T[rows, columns];
    }

    public void Insert(T item, int i, int j)
    {
        matrix[i, j] = item;
    }

    public void Traverse()
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                Console.Write(matrix[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    public bool Search(T item)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (matrix[i, j].Equals(item))
                {
                    return true;
                }
            }
        }

        return false;
    }

    public Tuple<int, int> GetIndex(T item)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (matrix[i, j].Equals(item))
                {
                    return Tuple.Create(i, j);
                }
            }
        }

        return null;
    }

    public void ReverseRow(int rowIndex)
    {
        int columns = matrix.GetLength(1);
        int start = 0;
        int end = columns - 1;

        while (start < end)
        {
            T temp = matrix[rowIndex, start];
            matrix[rowIndex, start] = matrix[rowIndex, end];
            matrix[rowIndex, end] = temp;

            start++;
            end--;
        }
    }

    public void ReverseColumn(int columnIndex)
    {
        int rows = matrix.GetLength(0);
        int start = 0;
        int end = rows - 1;

        while (start < end)
        {
            T temp = matrix[start, columnIndex];
            matrix[start, columnIndex] = matrix[end, columnIndex];
            matrix[end, columnIndex] = temp;

            start++;
            end--;
        }
    }

    public void Sort(T item)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                if (matrix[i, j].Equals(item))
                {
                    matrix[i, j] = default(T);
                    return;
                }
            }
        }
    }

    public T DiagonalSum()
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (rows != columns)
        {
            throw new InvalidOperationException("Matrix is not square.");
        }

        dynamic sum = default(T);

        for (int i = 0; i < rows; i++)
        {
            sum += matrix[i, i];
        }

        return sum;
    }

    public void Display()
    {
        Traverse();
    }

    public static void Main()
    {
        Matrix<int> myMatrix = new Matrix<int>(3, 3);
        myMatrix.Insert(1, 0, 0);
        myMatrix.Insert(2, 0, 1);
        myMatrix.Insert(3, 0, 2);
        myMatrix.Insert(4, 1, 0);
        myMatrix.Insert(5, 1, 1);
        myMatrix.Insert(6, 1, 2);
        myMatrix.Insert(7, 2, 0);
        myMatrix.Insert(8, 2, 1);
        myMatrix.Insert(9, 2, 2);

        myMatrix.Traverse();
        Console.WriteLine();

        bool isFound = myMatrix.Search(5);
        Console.WriteLine("Search result: " + isFound);
        Console.WriteLine();

        Tuple<int, int> index = myMatrix.GetIndex(6);
        Console.WriteLine("Index of 6: (" + index.Item1 + ", " + index.Item2 + ")");
        Console.WriteLine();

        myMatrix.ReverseRow(1);
        myMatrix.Display();
        Console.WriteLine();

        myMatrix.ReverseColumn(2);
        myMatrix.Display();
        Console.WriteLine();

        myMatrix.Sort(5);
        myMatrix.Display();
        Console.WriteLine();

        int diagonalSum = myMatrix.DiagonalSum();
        Console.WriteLine("Diagonal sum: " + diagonalSum);

    }
}
