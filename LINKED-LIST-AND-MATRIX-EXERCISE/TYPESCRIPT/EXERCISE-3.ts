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
    data: any;
    constructor(data: any) {
        this.data = data;
    }

    insert(item: any, i: number, j: number) {
        this.data[i][j] = item;
    }

    traverse() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                console.log(this.data[i][j]);
            }
        }
    }

    search(item: any) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                if (this.data[i][j] === item) {
                    return true;
                }
            }
        }
        return false;
    }

    getIndex(item: any) {
        let index = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                if (this.data[i][j] === item) {
                    index.push(i);
                    index.push(j);
                }
            }
        }
        return index;
    }

    reverseRow(rowIndex: number) {
        let temp = [];
        for (let i = 0; i < this.data[rowIndex].length; i++) {
            temp.push(this.data[rowIndex][i]);
        }
        temp.reverse();
        this.data[rowIndex] = temp;
    }

    reverseColumn(columnIndex: number) {
        let temp = [];
        for (let i = 0; i < this.data.length; i++) {
            temp.push(this.data[i][columnIndex]);
        }
        temp.reverse();
        for (let i = 0; i < this.data.length; i++) {
            this.data[i][columnIndex] = temp[i];
        }
    }

    sort() {
        let temp = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                temp.push(this.data[i][j]);
            }
        }
        temp.sort();
        let k = 0;
        for (let i = 0; i < this.data.length; i++) {
            for (let