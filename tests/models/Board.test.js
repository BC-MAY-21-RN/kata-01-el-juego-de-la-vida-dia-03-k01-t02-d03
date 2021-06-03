const Board = require('../../src/models/Board');

describe('Tests in Board class', () => {
  test('should fill the matrix with the string input', () => {
    const board = new Board(4, 8, '.......\n....*...\n...**...\n........\n');
    let expectedOutput = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    board.generateMatrixBoard();
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        expect(board.board[i][j]).toBe(expectedOutput[i][j]);
      }
    }
  });
});
