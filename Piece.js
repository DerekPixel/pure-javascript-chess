class Piece {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show(ctx = new CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    // ctx.font = '50px sans-serif';
    // ctx.fillStyle = 'white';
    // ctx.fillText('hello', this.x, this.y);
    // ctx.fillStyle = 'balck';
    // ctx.strokeText('hello', this.x, this.y);
    ctx.rect(this.x, this.y, 50, 50)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.restore();
  }

}

export default Piece;