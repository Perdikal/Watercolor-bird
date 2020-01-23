document.getElementById("startGame").addEventListener("click", () => {
  startGame = true;
  document.getElementById("menu").style.display = "none";
});
const bird = new Bird();
let imgTop;
let imgBot;
function preload() {
  soundTrack = loadSound("soundz/she.mp3");
  drop = loadSound("soundz/drop.mp3");
  bird.preloadBird();
  imgTop = loadImage("imges/blueStroke-top.png");
  imgBot = loadImage("imges/blueStroke-bottom.png");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  soundTrack.play();
  pipes.push(new Obstacle());
}
function draw() {
  frameRate(30);
  if (gameOver) {
    gameOverFunc();
  }
  if (startGame) {
    background("#FFF");
    bird.setup();
    bird.draw();
    pipes.forEach(pipe => {
      pipe.setup();
      pipe.draw();
      if (pipe.ends()) {
        pipes.shift();
      }
      if (pipe.colides(bird)) {
        gameOverFunc();
      }
    });
    if (frameCount % 200 == 0) {
      pipes.push(new Obstacle());
    }
  }
}
function keyPressed() {
  if (keyCode === 32) {
    bird.fly();
  }
}
