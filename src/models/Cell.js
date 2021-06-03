const { DEAD, ALIVE } = require('../states');

module.exports = class Cell {

  constructor(state = DEAD) {
    this.state = state;
    this.nextState = null;
    this.neighbors = [];
  }

  calculateNextState() {
    let neighborsAlive = 0;
    this.neighbors.forEach(neighbor => {
      if (neighbor.state === ALIVE) {
        neighborsAlive++;
      }
    });
    if (this.state === DEAD && neighborsAlive === 3) {
      this.nextState = ALIVE;
    }
    if (this.state === ALIVE && (neighborsAlive === 2 || neighborsAlive === 3)) {
      this.nextState = ALIVE;
    }
    if (this.state === ALIVE && neighborsAlive < 2) {
      this.nextState = DEAD;
    }
    if (this.state === ALIVE && neighborsAlive > 3) {
      this.nextState = DEAD;
    }

  }

}