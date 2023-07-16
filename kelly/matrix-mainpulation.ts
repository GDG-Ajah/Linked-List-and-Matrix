class Matrix {
  private matrix: number[][];

  constructor(rows: number, columns: number) {
    this.matrix = new Array(rows);

    for (let i = 0; i < rows; i++) {
      this.matrix[i] = new Array(columns).fill(0);
    }
  }

  insert(row: number, column: number, value: number): void {
    this.matrix[row][column] = value;
  }

  add(other: Matrix): Matrix {
    if (
      this.matrix.length !== other.matrix.length ||
      this.matrix[0].length !== other.matrix[0].length
    ) {
      throw new Error("Matrix dimensions must match.");
    }

    const result = new Matrix(this.matrix.length, this.matrix[0].length);

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        result.matrix[i][j] = this.matrix[i][j] + other.matrix[i][j];
      }
    }

    return result;
  }

  multiply(other: Matrix): Matrix {
    if (this.matrix[0].length !== other.matrix.length) {
      throw new Error("Invalid matrix dimensions for multiplication.");
    }

    const result = new Matrix(this.matrix.length, other.matrix[0].length);

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < other.matrix[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < this.matrix[0].length; k++) {
          sum += this.matrix[i][k] * other.matrix[k][j];
        }
        result.matrix[i][j] = sum;
      }
    }

    return result;
  }

  transpose(): Matrix {
    const result = new Matrix(this.matrix[0].length, this.matrix.length);

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        result.matrix[j][i] = this.matrix[i][j];
      }
    }

    return result;
  }

  scalarMultiply(scalar: number): Matrix {
    const result = new Matrix(this.matrix.length, this.matrix[0].length);

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        result.matrix[i][j] = this.matrix[i][j] * scalar;
      }
    }

    return result;
  }

  display(): void {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
  }

  main(): void {
    const matrix1 = new Matrix(2, 3);
    matrix1.insert(0, 0, 1);
    matrix1.insert(0, 1, 2);
    matrix1.insert(0, 2, 3);
    matrix1.insert(1, 0, 4);
    matrix1.insert(1, 1, 5);
    matrix1.insert(1, 2, 6);

    const matrix2 = new Matrix(2, 3);
    matrix2.insert(0, 0, 7);
    matrix2.insert(0, 1, 8);
    matrix2.insert(0, 2, 9);
    matrix2.insert(1, 0, 10);
    matrix2.insert(1, 1, 11);
    matrix2.insert(1, 2, 12);

    console.log("Matrix 1:");
    matrix1.display();

    console.log("Matrix 2:");
    matrix2.display();

    console.log("Matrix Addition:");
    const additionResult = matrix1.add(matrix2);
    additionResult.display();

    const matrix3 = new Matrix(3, 2);
    matrix3.insert(0, 0, 1);
    matrix3.insert(0, 1, 2);
    matrix3.insert(1, 0, 3);
    matrix3.insert(1, 1, 4);
    matrix3.insert(2, 0, 5);
    matrix3.insert(2, 1, 6);

    console.log("Matrix 3:");
    matrix3.display();

    console.log("Matrix Multiplication:");
    const multiplicationResult = matrix1.multiply(matrix3);
    multiplicationResult.display();

    console.log("Matrix Transpose:");
    const transposeResult = matrix1.transpose();
    transposeResult.display();

    console.log("Scalar Multiplication:");
    const scalarResult = matrix1.scalarMultiply(2);
    scalarResult.display();
  }
}
