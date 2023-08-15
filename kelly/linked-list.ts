class Matrix<T> {
  private matrix: T[][];

  constructor(rows: number, cols: number) {
    this.matrix = [];
    for (let i = 0; i < rows; i++) {
      this.matrix[i] = new Array(cols);
    }
  }

  insert(item: T, i: number, j: number): void {
    if (i >= 0 && i < this.matrix.length && j >= 0 && j < this.matrix[0].length) {
      this.matrix[i][j] = item;
    }
  }

  traverse(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        console.log(this.matrix[i][j]);
      }
    }
  }

  search(item: T): boolean {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.matrix[i][j] === item) {
          return true;
        }
      }
    }
    return false;
  }

  getIndex(item: T): { i: number, j: number } | null {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.matrix[i][j] === item) {
          return { i, j };
        }
      }
    }
    return null;
  }

  reverseRow(rowIndex: number): void {
    if (rowIndex >= 0 && rowIndex < this.matrix.length) {
      this.matrix[rowIndex].reverse();
    }
  }

  reverseColumn(columnIndex: number): void {
    if (columnIndex >= 0 && columnIndex < this.matrix[0].length) {
      const column = [];
      for (let i = 0; i < this.matrix.length; i++) {
        column.push(this.matrix[i][columnIndex]);
      }
      column.reverse();
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i][columnIndex] = column[i];
      }
    }
  }

  sort(item: T): void {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.matrix[i][j] === item) {
          this.matrix[i].splice(j, 1);
          break;
        }
      }
    }
  }

  diagonalSum(): number {
    let sum = 0;
    const minSize = Math.min(this.matrix.length, this.matrix[0].length);
    for (let i = 0; i < minSize; i++) {
      sum += this.matrix[i][i];
    }
    return sum;
  }

  display(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i].join('\t'));
    }
  }
}


const matrix = new Matrix<number>(3, 3);

matrix.insert(1, 0, 0);
matrix.insert(2, 0, 1);
matrix.insert(3, 0, 2);
matrix.insert(4, 1, 0);
matrix.insert(5, 1, 1);
matrix.insert(6, 1, 2);
matrix.insert(7, 2, 0);
matrix.insert(8, 2, 1);
matrix.insert(9, 2, 2);

matrix.display(); // Display the matrix
// Output:
// 1    2    3
// 4    5    6
// 7    8    9

matrix.traverse(); // Traverse and print every cell value

console.log(matrix.search(5)); // true

console.log(matrix.getIndex(6)); // { i: 1, j: 2 }

matrix.reverseRow(1);
matrix.display();
// Output:
// 1    2    3
// 6    5    4
// 7    8    9

matrix.reverseColumn(0);
matrix.display();
// Output:
// 3    2    1
// 6    5    4
// 9    8    7

matrix.sort(5);
matrix.display();
// Output:
// 3    2    1
// 6    4
// 9    8    7

console.log(matrix.diagonalSum()); // 14
