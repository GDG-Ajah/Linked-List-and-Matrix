/**  Exercise 3
** Implement a Matrix in your chosen language with the following operations
    - insert(item, i, j) - add item at specific index i and j
    - traverse(item) - print out every cell value of a matrix
    - search(item) - returns true or false if index can be found
    - getIndex(item) - returns the index i and j of the item
    - reverseRow(rowIndex) - reverse elements of specific row
    - reverseColumn(columnIndex) - reverse elements of specific column
    - sort(item) - remove node containing specified item
    - diagonalSum() - returns sum of cells along the matrix primary diagonal
    - display() - print out every cell value of a matrix

*/

class Matrix {
  List<List<int>> matrix;
  int rows;
  int columns;
  Matrix(int rows, int columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = new List<List<int>>(rows);
    for (int i = 0; i < rows; i++) {
      this.matrix[i] = new List<int>(columns);
    }
  }

  void insert(int item, int i, int j) {
    this.matrix[i][j] = item;
  }

  void traverse() {
    for (int i = 0; i < this.rows; i++) {
      for (int j = 0; j < this.columns; j++) {
        stdout.write("${this.matrix[i][j]} ");
      }
      print("");
    }
  }

  bool search(int item) {
    for (int i = 0; i < this.rows; i++) {
      for (int j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] == item) {
          return true;
        }
      }
    }
    return false;
  }

  List<int> getIndex(int item) {
    List<int> index = new List<int>(2);
    for (int i = 0; i < this.rows; i++) {
      for (int j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] == item) {
          index[0] = i;
          index[1] = j;
          return index;
        }
      }
    }
    return index;
  }

  void reverseRow(int rowIndex) {
    List<int> row = this.matrix[rowIndex];
    List<int> reversedRow = row.reversed.toList();
    this.matrix[rowIndex] = reversedRow;
  }

  void reverseColumn(int columnIndex) {
    List<int> column = new List<int>(this.rows);
    for (int i = 0; i < this.rows; i++) {
      column[i] = this.matrix[i][columnIndex];
    }
    List<int> reversedColumn = column.reversed.toList();
    for (int i = 0; i < this.rows; i++) {
      this.matrix[i][columnIndex] = reversedColumn[i];
    }
  }

  void sort() {
    List<int> items = new List<int>();
    for (int i =
