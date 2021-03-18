import Board from './Board.js';


var mainDiv = document.getElementById('main');

var canvas = document.createElement('canvas');
canvas.id = 'mycanvas';
canvas.width = 8 * 50;
canvas.height = 8 * 50;
var ctx = canvas.getContext('2d');

mainDiv.append(canvas);
// const rect = canvas.getBoundingClientRect();
// function getCursorPosition(event, canvas) {
//   const rect = canvas.getBoundingClientRect();
//   emiter.position.x = event.clientX - rect.left;
//   emiter.position.y = event.clientY - rect.top;
// }

// canvas.addEventListener('mouseup', (e) => {
//   getCursorPosition(e, canvas)
// })



var newBoard = new Board(canvas);

loop();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  newBoard.show(ctx);
}

function loop() {
  window.requestAnimationFrame(loop);
  draw();
}