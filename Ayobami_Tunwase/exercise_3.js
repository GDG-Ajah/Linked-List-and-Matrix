class Matrix {

    data = []

    /**
     * 
     * @param {number} numberOfRows number of rows of the matrix
     * @param {number} numberOfColumns number of columns of the matrix
     */
    constructor(numberOfRows = 0, numberOfColumns = 0) {
        /**
         * Conventionally, m is used to represent the number of rows in a matrix.
         * n is used to represent the number of columns in a matrix.
         */
        this.m = numberOfRows;
        this.n = numberOfColumns;

        this.data = new Array(this.m).fill(null);

        for (let i = 0; i < this.m; i++) {
            this.data[i] = new Array(this.n).fill(null);
        }
    }

    /**
     * Inserts a value at a specified cell of the matrix.
     * 
     * @param {number} item the value to be inserted
     * @param {number} i row index of the matrix
     * @param {number} j column index of the matrix
     */
    insert(item, i, j) {
        try {

            if (i < 0 || j < 0 || i >= this.m || j >= this.n) {
                throw new Error('Invalid cell index.');
            } else {
                this.data[i][j] = item;
            }

        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Prints out the cell value of a matrix.
     */
    traverse() {
        for (let i = 0; i < this.m; i++) {
            let row = '';

            for (let j = 0; j < this.n; j++) {

                row += this.data[i][j] + '\t';
            }

            console.log(row);
        }
    }

    /**
     * Searches the matrix for a specified value.
     * 
     * @param {number} item the value to search the matrix for
     * @returns a boolean indicating if the matrix contains the specified value
     */
    search(item) {

        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.data[i][j] === item) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * 
     * Retrieves the row and column indexes of the matrix for a specified value.
     * 
     * @param {number} item the value to search the matrix for
     * @returns an array containing the row and column indexes of the specified value if found
     */
    getIndex(item) {
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {

                if (this.data[i][j] === item) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }

    /**
     * Reverses a row of the matrix using the specified index.
     * 
     * @param {number} rowIndex the index representing the row to be reversed
     */
    reverseRow(rowIndex) {

        try {

            if (typeof rowIndex !== 'number' || rowIndex < 0 || rowIndex >= this.m) {
                throw new Error('Invalid row index');
            } else {

                for (let i = 0, j = this.data[rowIndex].length - 1; i < j; i++, j--) {
                    [this.data[rowIndex][i], this.data[rowIndex][j]] = [this.data[rowIndex][j], this.data[rowIndex][i]];
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Reverses a column of the matrix using the specified index.
     * 
     * @param {number} columnIndex the index representing the column to be reversed
     */
    reverseColumn(columnIndex) {

        try {

            if (typeof columnIndex !== 'number' || columnIndex < 0 || columnIndex >= this.n) {
                throw new Error('Invalid column index.');
            } else {
                for (let i = 0, j = this.m - 1; i < j; i++, j--) {
                    [this.data[i][columnIndex], this.data[j][columnIndex]] = [this.data[j][columnIndex], this.data[i][columnIndex]];
                }
            }
        } catch (error) {
            console.error(error);
        }

    }

    /**
     * Removes a specified item from the matrix.
     * 
     * @param {*} item the value to be removed
     */
    sort(item) {

        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.data[i][j] === item) {
                    this.data[i][j] = null;
                    // ensures only one item is removed at a time (in the case of duplicates)
                    break;
                }
            }
        }

    }

    /**
     * 
     * @returns the sum of the diagonal elements of a matrix
     */
    diagonalSum() {

        try {

            let sum = 0;
            // minimum value between number of rows and columns
            let min = Math.min(this.m, this.n);

            for (let i = 0; i < min; i++) {
                sum += this.data[i][i];
            }

            return sum;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Prints out all the elements of the matrix.
     */
    display() {
        this.traverse();
    }
}

let matrix1 = new Matrix(2, 3);

matrix1.insert(1, 0, 0);
matrix1.insert(2, 0, 1);
matrix1.insert(3, 0, 2);
matrix1.insert(4, 1, 0);
matrix1.insert(5, 1, 1);
matrix1.insert(6, 1, 2);

matrix1.traverse();

console.log(matrix1.search(4));
console.log(matrix1.getIndex(1));

console.log(matrix1.data);
matrix1.reverseRow(0);
console.log(matrix1.data);

console.log(matrix1.data);
matrix1.reverseColumn(1);
console.log(matrix1.data);


const matrix2 = new Matrix(1, 3);

matrix2.insert(1, 0, 0);
matrix2.insert(2, 0, 1);
matrix2.insert(3, 0, 2);

console.log(matrix2.data);
matrix2.sort(2);
console.log(matrix2.data);

console.log(matrix1.diagonalSum());

matrix2.display();

module.exports = Matrix;