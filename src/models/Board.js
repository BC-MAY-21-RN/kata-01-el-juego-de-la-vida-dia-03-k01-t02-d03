module.exports = class Board {
  constructor(rows, columns, stringInput) {
    this.rows = rows;
    this.columns = columns;
    this.stringInput = stringInput;
    this.board = [];
  }

  generateMatrixBoard() {
    this.board = this.stringInput.split('\n');
    this.board = this.board.map(row => row.split(''));
  }
}