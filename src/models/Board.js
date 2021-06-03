const Cell = require('./Cell');
const { DEAD, ALIVE } = require('../states')

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

  fillMatrixWithCells() {
    this.board = this.board.map(row => {
      return row.map(col => {
        return col === DEAD ? new Cell(DEAD) : new Cell(ALIVE)
      })
    });
  }
}