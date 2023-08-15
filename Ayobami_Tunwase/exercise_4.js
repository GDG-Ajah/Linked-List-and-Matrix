// used an old version of node for testing (about require in place of import statement)
const Matrix = require('./exercise_3');

// Transpose matrix

/**
 * 
 * @param {number[][]} matrix the matrix to be transposed
 * @returns the transpose of a matrix
 */
const transposeMatrix = (matrix) => {
    const matrixTranspose = [];

    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0]?.length;

    for (let i = 0; i < numberOfColumns; i++) {
        matrixTranspose.push([])

        for (let j = 0; j < numberOfRows; j++) {
            matrixTranspose[i].push(matrix[j][i]);
        }
    }

    return matrixTranspose;
}

const matrix1 = new Matrix(2, 3);
matrix1.insert(1, 0, 0);
matrix1.insert(2, 0, 1);
matrix1.insert(3, 0, 2);
matrix1.insert(4, 1, 0);
matrix1.insert(5, 1, 1);
matrix1.insert(6, 1, 2);

const matrix2 = new Matrix(3, 3);
matrix2.insert(1, 0, 0);
matrix2.insert(3, 0, 1);
matrix2.insert(5, 0, 2);
matrix2.insert(7, 1, 0);
matrix2.insert(11, 1, 1);
matrix2.insert(13, 1, 2);
matrix2.insert(17, 2, 0);
matrix2.insert(19, 2, 1);
matrix2.insert(21, 2, 2);

const matrix3 = new Matrix(1, 3);
matrix3.insert(11, 0, 0);
matrix3.insert(13, 0, 1);
matrix3.insert(17, 0, 2);

console.log(transposeMatrix(matrix1.data));
console.log(transposeMatrix(matrix2.data));
console.log(transposeMatrix(matrix3.data));
console.log(transposeMatrix(new Matrix().data));

// Matrix multiplication

/**
 * 
 * @param {number[][]} matrix1 
 * @param {number[][]} matrix2 
 * @returns {number[][]} the product of two matrices
 */
const multiplyMatrices = (matrix1 = [], matrix2 = []) => {

    // number of rows and columns for matrices 1 and 2
    const rowCount1 = matrix1?.length ?? 0;
    const columnCount1 = matrix1[0]?.length ?? 0;
    const rowCount2 = matrix2?.length ?? 0;
    const columnCount2 = matrix2[0]?.length ?? 0;

    try {

        // checks if the number of columns of the first matrix matches the number of rows of the second matrix
        if (columnCount1 !== rowCount2) {
            throw new Error('The number of columns of the first matrix has to match the number of rows of the second matrix.');
        }


        let matrixProduct = [];

        for (let i = 0; i < rowCount1; i++) {
            const row = new Array(columnCount2).fill(0);

            matrixProduct.push(row);

            for (let j = 0; j < columnCount2; j++) {

                // k < rowCount2 also works here since they must have the same value for multiplication to work
                for (let k = 0; k < columnCount1; k++) {
                    matrixProduct[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }

        return matrixProduct;

    } catch (error) {
        console.error(error);
    }
}

console.log(multiplyMatrices([]));
console.log(multiplyMatrices([[1, 2, 3]], [[3], [2], [1]]));
console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[10, 11, 12], [13, 14, 15], [16, 17, 18]]));