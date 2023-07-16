class Matrix<T> {
  private matrix: T[][];

  constructor(rows: number, columns: number) {
    this.matrix = new Array(rows);

    for (let i = 0; i < rows; i++) {
      this.matrix[i] = new Array(columns);
    }
  }

  insert(item: T, i: number, j: number): void {
    if (this.isValidIndex(i, j)) {
      this.matrix[i][j] = item;
    } else {
      console.log("Invalid index.");
    }
  }

  traverse(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        console.log(this.matrix[i][j]);
      }
    }
  }

  search(item: T): boolean {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === item) {
          return true;
        }
      }
    }
    return false;
  }

  getIndex(item: T): { i: number; j: number } | null {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === item) {
          return { i, j };
        }
      }
    }
    return null;
  }

  reverseRow(rowIndex: number): void {
    if (this.isValidRowIndex(rowIndex)) {
      this.matrix[rowIndex].reverse();
    } else {
      console.log("Invalid row index.");
    }
  }

  reverseColumn(columnIndex: number): void {
    if (this.isValidColumnIndex(columnIndex)) {
      const column: T[] = [];
      for (let i = 0; i < this.matrix.length; i++) {
        column.push(this.matrix[i][columnIndex]);
      }
      column.reverse();
      for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i][columnIndex] = column[i];
      }
    } else {
      console.log("Invalid column index.");
    }
  }

  sort(item: T): void {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === item) {
          this.matrix[i].splice(j, 1);
          return;
        }
      }
    }
    console.log("Item not found.");
  }

  diagonalSum(): number {
    if (this.isSquareMatrix()) {
      let sum = 0;
      for (let i = 0; i < this.matrix.length; i++) {
        sum += this.matrix[i][i];
      }
      return sum;
    } else {
      console.log("Matrix is not square.");
      return 0;
    }
  }

  display(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
  }

  private isValidIndex(i: number, j: number): boolean {
    return (
      i >= 0 && i < this.matrix.length && j >= 0 && j < this.matrix[i].length
    );
  }

  private isValidRowIndex(i: number): boolean {
    return i >= 0 && i < this.matrix.length;
  }

  private isValidColumnIndex(j: number): boolean {
    return j >= 0 && j < this.matrix[0].length;
  }

  private isSquareMatrix(): boolean {
    const rows = this.matrix.length;
    for (let i = 0; i < rows; i++) {
      if (this.matrix[i].length !== rows) {
        return false;
      }
    }
    return true;
  }

  public static Main(): void {
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

    matrix.display();

    console.log("Traverse:");
    matrix.traverse();

    console.log("Search 5:", matrix.search(5)); // true
    console.log("Search 10:", matrix.search(10)); // false

    console.log("Get index of 6:", matrix.getIndex(6)); // { i: 1, j: 2 }

    matrix.reverseRow(1);
    console.log("After reversing row 1:");
    matrix.display();

    matrix.reverseColumn(2);
    console.log("After reversing column 2:");
    matrix.display();

    matrix.sort(5);
    console.log("After removing item 5:");
    matrix.display();

    console.log("Diagonal sum:", matrix.diagonalSum());
  }
}
