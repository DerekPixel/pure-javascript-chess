import Board from './Board.js';


var mainDiv = document.getElementById('main');

var canvas = document.createElement('canvas');
canvas.id = 'mycanvas';
canvas.width = 8 * 50;
canvas.height = 8 * 50;
canvas.style.borderStyle = 'solid';
canvas.style.borderWidth = '1px';
canvas.style.backgroundColor = 'gray';
var ctx = canvas.getContext('2d');

mainDiv.append(canvas);


var newBoard = new Board();

loop();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  newBoard.show(ctx);
}

function loop() {
  window.requestAnimationFrame(loop);
  draw();
}