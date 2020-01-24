const WIDTH = 4000 / 4;
const HEIGHT = 2000 / 4;
const pipes = [];
let currentScore = 0;
let startGame = false;
let gameOver = false;
let soundTrack;
let drop;
let speedPullingLeft = 10 / 5;
const gameOverFunc = () => {
  gameOver = true;
  startGame = false;
  document.getElementById("score").innerText = `Score :  ${currentScore}`;
  fill("#4863a0");
  textFont("mustache brush");
  textSize(320 / 4);
  text("GAME OVER", WIDTH - 2500 / 4, HEIGHT / 4);
  button = createButton("Restart Game");
  button.position(WIDTH / 2 + 600 / 4, HEIGHT - 200 / 4 / 2);
  button.mousePressed(function() {
    location.reload();
  });
};
