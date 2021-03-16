import Piece from './Piece.js';

var newPiece = new Piece(0, 0);

class Board {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {

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

    // for(var file = 0; file < 8; file++) {
    //   for(var rank = 0; rank < 8; rank++) {

        newPiece.show(ctx);
    //   }
    // }
    
  }

}

export default Board;