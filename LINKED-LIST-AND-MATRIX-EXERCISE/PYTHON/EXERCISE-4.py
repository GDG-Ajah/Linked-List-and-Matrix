#  Exercise 4
#  Transpose Matrix
#  Matrix manipulation


class Matrix:
    def __init__(self, rows, columns):
        self.rows = rows
        self.columns = columns
        self.matrix = [[0 for x in range(columns)] for y in range(rows)]

    def insert(self, item, i, j):
        self.matrix[i][j] = item

    def traverse(self):
        for i in range(self.rows):
            for j in range(self.columns):
                print(self.matrix[i][j], end=" ")
            print()

    def search(self, item):
        for i in range(self.rows):
            for j in range(self.columns):
                if self.matrix[i][j] == item:
                    return True
        return False

    def getIndex(self, item):
        for i in range(self.rows):
            for j in range(self.columns):
                if self.matrix[i][j] == item:
                    return i, j
        return -1, -1

    def reverseRow(self, rowIndex):
        for i in range(self.columns // 2):
            temp = self.matrix[rowIndex][i]
            self.matrix[rowIndex][i] = self.matrix[rowIndex][self.columns - i - 1]
            self.matrix[rowIndex][self.columns - i - 1] = temp

    def reverseColumn(self, columnIndex):
        for i in range(self.rows // 2):
            temp = self.matrix[i][columnIndex]
            self.matrix[i][columnIndex] = self.matrix[self.rows - i - 1][columnIndex]
            self.matrix[self.rows - i - 1][columnIndex] = temp

    def sort(self):
        for i in range(self.rows):
            for j in range(self.columns):
                for k in range(self.rows):
                    for l in range(self.columns):
                        if self.matrix[i][j] < self.matrix[k][l]:
                            temp = self.matrix[i][j]
                            self.matrix[i][j] = self.matrix[k][l]
                            self.matrix[k][l] = temp

    def diagonalSum(self):
        sum = 0
        for i in range(self.rows):
            for j in range(self.columns):
                if i == j:
                    sum += self.matrix[i][j]
        return sum

    def display(self):
        for i in range(self.rows):
            for j in range(self.columns):
                print(self.matrix[i][j], end=" ")
            print()

    def transpose(self):
        for i in

    def add(self, matrix):
        if self.rows == matrix.rows and self.columns == matrix.columns:
            for i in range(self.rows):
                for j in range(self.columns):
                    self.matrix[i][j] += matrix.matrix[i][j]
        else:
            print("Cannot add matrices of different sizes")


matrix1 = Matrix(3, 3)
matrix1.insert(1, 0, 0)
matrix1.insert(2, 0, 1)
matrix1.insert(3, 0, 2)
matrix1.insert(4, 1, 0)
matrix1.insert(5, 1, 1)
matrix1.insert(6, 1, 2)
matrix1.insert(7, 2, 0)
