const WIDTH = 4000;
const HEIGHT = 2000;
const pipes = [];
let currentScore = 0;
let startGame = false;
let gameOver = false;
let soundTrack;
let drop;
const gameOverFunc = () => {
  gameOver = true;
  startGame = false;
  document.getElementById("score").innerText = `Score :  ${currentScore}`;
  fill("#4863a0");
  textFont("mustache brush");
  textSize(320);
  text("GAME OVER", WIDTH - 2500, HEIGHT / 2);
};
