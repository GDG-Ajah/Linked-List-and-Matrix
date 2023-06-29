/** Exercise 4
** Transpose Matrix
** Matrix manipulation
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
        let column = [];
        for (let i = 0; i < this.matrix.length; i++) {
            column.push(this.matrix[i][columnIndex]);
        }
        let reversedColumn = [];
        for (let i = column.length - 1; i >= 0; i--) {
            reversedColumn.push(column[i]);
        }
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i][columnIndex] = reversedColumn[i];
        }
    }

    sort() {
        let sortedMatrix = [];
        for (let i = 0; i < this.matrix.length; i++) {
            sortedMatrix[i] = [];
            for (let j = 0; j < this.matrix[i].length; j++) {
                sortedMatrix[i][j] = this.matrix[i][j];

                let k = j - 1;
                while (k >= 0 && sortedMatrix[i][k] > sortedMatrix[i][k + 1]) {
                    let temp = sortedMatrix[i][k];
                    sortedMatrix[i][k] = sortedMatrix[i][k + 1];
                    sortedMatrix[i][k + 1] = temp;
                    k--;
                }
            }
        }
        this.matrix = sortedMatrix;
    }
    
    transpose() {
    }   
}

let matrix = new Matrix();
matrix.insert(1, 0, 0);
matrix.insert(2, 0, 1);
matrix.insert(3, 0, 2);
matrix.insert(4, 1, 0);
matrix.insert(5, 1, 1);
matrix.insert(6, 1, 2);