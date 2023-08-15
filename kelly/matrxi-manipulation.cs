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
        if (IsValidIndex(i, j))
        {
            matrix[i, j] = item;
        }
        else
        {
            Console.WriteLine("Invalid index.");
        }
    }

    public void Traverse()
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                Console.WriteLine(matrix[i, j]);
            }
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
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (IsValidRowIndex(rowIndex))
        {
            for (int j = 0; j < columns / 2; j++)
            {
                T temp = matrix[rowIndex, j];
                matrix[rowIndex, j] = matrix[rowIndex, columns - j - 1];
                matrix[rowIndex, columns - j - 1] = temp;
            }
        }
        else
        {
            Console.WriteLine("Invalid row index.");
        }
    }

    public void ReverseColumn(int columnIndex)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (IsValidColumnIndex(columnIndex))
        {
            for (int i = 0; i < rows / 2; i++)
            {
                T temp = matrix[i, columnIndex];
                matrix[i, columnIndex] = matrix[rows - i - 1, columnIndex];
                matrix[rows - i - 1, columnIndex] = temp;
            }
        }
        else
        {
            Console.WriteLine("Invalid column index.");
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
        Console.WriteLine("Item not found.");
    }

    public T DiagonalSum()
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (rows != columns)
        {
            Console.WriteLine("Matrix is not square.");
            return default(T);
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

    private bool IsValidIndex(int i, int j)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        return i >= 0 && i < rows && j >= 0 && j < columns;
    }

    private bool IsValidRowIndex(int i)
    {
        int rows = matrix.GetLength(0);

        return i >= 0 && i < rows;
    }

    private bool IsValidColumnIndex(int j)
    {
        int columns = matrix.GetLength(1);

        return j >= 0 && j < columns;
    }

    public static void Main()
    {
        Matrix<int> matrix = new Matrix<int>(3, 3);
        matrix.Insert(1, 0, 0);
        matrix.Insert(2, 0, 1);
        matrix.Insert(3, 0, 2);
        matrix.Insert(4, 1, 0);
        matrix.Insert(5, 1, 1);
        matrix.Insert(6, 1, 2);
        matrix.Insert(7, 2, 0);
        matrix.Insert(8, 2, 1);
        matrix.Insert(9, 2, 2);

        matrix.Display();

        Console.WriteLine("Traverse:");
        matrix.Traverse();

        Console.WriteLine("Search 5: " + matrix.Search(5)); // true
        Console.WriteLine("Search 10: " + matrix.Search(10)); // false

        Tuple<int, int> index = matrix.GetIndex(6);
        Console.WriteLine("Get index of 6: (" + index.Item1 + ", " + index.Item2 + ")");

        matrix.ReverseRow(1);
        Console.WriteLine("After reversing row 1:");
        matrix.Display();

        matrix.ReverseColumn(2);
        Console.WriteLine("After reversing column 2:");
        matrix.Display();

        matrix.Sort(5);
        Console.WriteLine("After removing item 5:");
        matrix.Display();

        Console.WriteLine("Diagonal sum: " + matrix.DiagonalSum());

    }
}
