class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = Array.from({ length: rows }, () =>
      new Array(columns).fill(null)
    );
  }

  // Add an item at specific index (i, j)
  insert(item, i, j) {
    if (i >= 0 && i < this.rows && j >= 0 && j < this.columns) {
      this.matrix[i][j] = item;
    } else {
      console.log("Index out of bounds.");
    }
  }

  // Print out every cell value of the matrix
  traverse() {
    for (let i = 0; i < this.rows; i++) {
      let row = "";
      for (let j = 0; j < this.columns; j++) {
        row += this.matrix[i][j] + " ";
      }
      console.log(row.trim());
    }
  }

  // Check if an item exists in the matrix
  search(item) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] === item) {
          return true;
        }
      }
    }
    return false;
  }

  // Get the index (i, j) of an item in the matrix
  getIndex(item) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] === item) {
          return { i, j };
        }
      }
    }
    return null;
  }

  // Reverse elements of a specific row
  reverseRow(rowIndex) {
    if (rowIndex >= 0 && rowIndex < this.rows) {
      this.matrix[rowIndex].reverse();
    } else {
      console.log("Invalid row index.");
    }
  }

  // Reverse elements of a specific column
  reverseColumn(columnIndex) {
    if (columnIndex >= 0 && columnIndex < this.columns) {
      const column = this.matrix.map((row) => row[columnIndex]);
      column.reverse();
      for (let i = 0; i < this.rows; i++) {
        this.matrix[i][columnIndex] = column[i];
      }
    } else {
      console.log("Invalid column index.");
    }
  }

  // Remove node containing specified item
  sort(item) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] === item) {
          this.matrix[i][j] = null;
        }
      }
    }
  }

  // Calculate the sum of cells along the primary diagonal
  diagonalSum() {
    let sum = 0;
    const minSize = Math.min(this.rows, this.columns);
    for (let i = 0; i < minSize; i++) {
      sum += this.matrix[i][i];
    }
    return sum;
  }

  // Print out every cell value of the matrix
  display() {
    for (let i = 0; i < this.rows; i++) {
      let row = "";
      for (let j = 0; j < this.columns; j++) {
        row += this.matrix[i][j] + " ";
      }
      console.log(row.trim());
    }
  }
}

const matrix = new Matrix(3, 3);

matrix.insert(1, 0, 0);
matrix.insert(2, 0, 1);
matrix.insert(3, 0, 2);
matrix.insert(4, 1, 0);
matrix.insert(5, 1, 1);
matrix.insert(6, 1, 2);
matrix.insert(7, 2, 0);
matrix.insert(8, 2, 1);
matrix.insert(9, 2, 2);

matrix.traverse();
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

console.log(matrix.search(5)); // Output: true
console.log(matrix.search(10)); // Output: false

console.log(matrix.getIndex(6)); // Output: { i: 1, j: 2 }

matrix.reverseRow(1);
matrix.display();
// Output:
// 1 2 3
// 6 5 4
// 7 8 9

matrix.reverseColumn(2);
matrix.display();
// Output:
// 1 2 9
// 6 5 4
// 7 8 3

matrix.sort(5);
matrix.display();
// Output:
// 1 2 9
// 6 null 4
// 7 8 3

console.log(matrix.diagonalSum()); // Output: 9 (1 + null + 3)
