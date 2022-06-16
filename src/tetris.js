class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    let s = 25;
    rect(s * this.x + 1, s * this.y + 1, s - 2, s - 2);
    pop();
  }
}

class Tetromino {
  constructor(x, y, rotate, shape) {
    this.x = x;
    this.y = y;
    this.rotate = rotate;
    this.shape = shape;
  }
  calcBlocks() {
    let blocks = [
      new Block(-1, 0),
      new Block(0, 0),
      new Block(0, -1),
      new Block(1, 0),
    ];
    for (let r = 0; r < this.rotate; r++) {
      blocks = blocks.map((b) => new Block(-b.y, b.x));
    }
    return blocks;
  }
  draw() {
    let blocks = this.calcBlocks();
    blocks.forEach((b) => ((b.x += this.x), (b.y += this.y)));
    for (let b of blocks) {
      b.draw();
    }
  }
}

class Field {
  constructor() {
    this.tiles = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }
  tileAt(x, y) {
    return this.tiles[y][x];
  }
  draw() {
    for (let y = 0; y < 21; y++) {
      for (let x = 0; x < 12; x++) {
        if (this.tileAt(x, y) === 1) new Block(x, y).draw();
      }
    }
  }
}

function setup() {
  createCanvas(25 * 12, 25 * 20);
  background(80);
}

function draw() {
  noStroke();
  fill(255);
  // new Field().draw();
  new Tetromino(4, 4, 0, 0).draw();
}
