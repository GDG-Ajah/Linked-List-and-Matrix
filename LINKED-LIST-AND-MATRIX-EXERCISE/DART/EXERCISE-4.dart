// Exercise 4
// Transpose Matrix
// Matrix manipulation

import 'dart:io';

void main() {
  print('Enter the number of rows');
  int rows = int.parse(stdin.readLineSync()!);
  print('Enter the number of columns');
  int columns = int.parse(stdin.readLineSync()!);
  List<List<int>> matrix = [];
  for (int i = 0; i < rows; i++) {
    matrix.add([]);
    for (int j = 0; j < columns; j++) {
      print('Enter the value for row $i and column $j');
      matrix[i].add(int.parse(stdin.readLineSync()!));
    }
  }
  print('The matrix is');
  print(matrix);
  List<List<int>> transposeMatrix = [];
  for (int i = 0; i < columns; i++) {
    transposeMatrix.add([]);
    for (int j = 0; j < rows; j++) {
      transposeMatrix[i].add(matrix[j][i]);
    }
  }
  print('The transpose matrix is');
  print(transposeMatrix);
}
