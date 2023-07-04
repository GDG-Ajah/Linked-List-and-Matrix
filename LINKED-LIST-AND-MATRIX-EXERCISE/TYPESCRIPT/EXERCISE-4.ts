/** Exercise 4
** Transpose Matrix
** Matrix manipulation
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

    transpose() {
        let temp = [];
        for (let i = 0; i < this.data.length; i++) {
            temp.push([]);
        }
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                temp[j].push(this.data[i][j]);
            }
        }
        this.data = temp;
    }
}

let matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
matrix.transpose();
matrix.traverse();

