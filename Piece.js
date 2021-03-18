class Piece {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.pickUp(canvas);
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

  mouseDown(e, canvas) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    if(mouseX > this.x && mouseX < this.x + 50) {
      if(mouseY > this.y && mouseY < this.y + 50) {
        this.canvas.addEventListener('mousemove', (e) => {
          this.mouseMove(e, canvas)
        })
      }
    }

  }

  mouseMove(e, canvas) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    this.x = mouseX - 25;
    this.y = mouseY - 25;
  }

  pickUp(canvas) {
    canvas.addEventListener('mousedown', (e) => {
      this.mouseDown(e, canvas)
    })
  }

}

export default Piece;