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
    constructor() {
        this.matrix = [];
    }

    insert(item, i, j) {
        if (this.matrix[i] === undefined) {
            this.matrix[i] = [];
        }
        this.matrix[i][j] = item;
    }

    traverse() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                console.log(this.matrix[i][j]);
            }
        }
    }

    search(item) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === item) {
                    return true;
                }
            }
        }
        return false;
    }

    getIndex(item) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === item) {
                    return [i, j];
                }
            }
        }
        return false;
    }

    reverseRow(rowIndex) {
        let row = this.matrix[rowIndex];
        let reversedRow = [];
        for (let i = row.length - 1; i >= 0; i--) {
            reversedRow.push(row[i]);
        }
        this.matrix[rowIndex] = reversedRow;
    }

    reverseColumn(columnIndex) {
        let reversedColumn = [];
        for (let i = this.matrix.length - 1; i >= 0; i--) {
            reversedColumn.push(this.matrix[i][columnIndex]);
        }
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i][columnIndex] = reversedColumn[i];
        }
    }

    sort(item) {
        let index = this.getIndex(item);
        if (index) {
            this.matrix[index[0]].splice(index[1], 1);
        }
    }

    diagonalSum() {
        let sum = 0;
        for (let i = 0; i < this.matrix.length; i++) {
            sum += this.matrix[i][i];
        }
        return sum;
    }

    display() {
        console.log(this.matrix);
    }
}