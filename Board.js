import Piece from './Piece.js';

class Board {
  constructor(canvas) {
    this.canvas = canvas;
    this.board = this.createBoard();
  }

  createBoard() {
    var board = Array(64);

    board[0] = new Piece(0, 0, this.canvas);

    return board;
  }

  show(ctx) {
    for(var file = 0; file < 8; file++) {
      for(var rank = 0; rank < 8; rank++) {

        var isLightSquare = (file + rank) % 2 != 0;
        var squareColor = isLightSquare ? 'white' : 'black';

        ctx.save();
        ctx.translate(file * 50, rank * 50)
        ctx.beginPath();
        ctx.rect(0, 0, 50, 50)
        ctx.fillStyle = squareColor;
        ctx.fill();
        ctx.restore();
      }
    }

    for(var i = 0; i < this.board.length; i++) {
      if(this.board[i] !== undefined) {
        this.board[i].show(ctx);
      }
    }
    
  }

}

export default Board;