#   Exercise 3
#  Implement a Matrix in your chosen language with the following operations
#     - insert(item, i, j) - add item at specific index i and j
#     - traverse(item) - print out every cell value of a matrix
#     - search(item) - returns true or false if index can be found
#     - getIndex(item) - returns the index i and j of the item
#     - reverseRow(rowIndex) - reverse elements of specific row
#     - reverseColumn(columnIndex) - reverse elements of specific column
#     - sort(item) - remove node containing specified item
#     - diagonalSum() - returns sum of cells along the matrix primary diagonal
#     - display() - print out every cell value of a matrix



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