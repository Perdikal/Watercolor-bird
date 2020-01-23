class Obstacle {
  constructor() {
    this.minDistance = HEIGHT / 3;
    this.top = Math.floor(Math.random() * (HEIGHT - this.minDistance));
    this.bottom =
      HEIGHT -
      (this.top + this.minDistance) +
      Math.floor((Math.random() * this.minDistance) / 4);
    this.x = WIDTH;
    this.width = 50;
    this.speedPullingLeft = 10 / 5;
    this.minSpace = 250;
  }

  setup() {
    fill("#FFFF33");
    image(imgTop, this.x, 0, this.width, this.top);
    image(imgBot, this.x, HEIGHT - this.bottom, this.width, this.bottom);
  }
  draw() {
    this.x -= this.speedPullingLeft;
  }
  colides(bird) {
    if (bird.y > this.top && bird.y + 260 / 4 < HEIGHT - this.bottom) {
      if (bird.x + 260 / 4 === this.x) {
        drop.play();
        currentScore++;
        document.getElementById(
          "score"
        ).innerText = ` Current   Score :  ${currentScore}`;
      }
    }
    if (
      bird.y + 20 < this.top ||
      bird.y - 40 + 260 / 4 > HEIGHT - this.bottom
    ) {
      if (
        bird.x + 260 / 4 > this.x + 55 / 4 &&
        bird.x + 260 / 4 < this.x + 55 / 4 + this.width
      ) {
        return true;
      }
    }
  }
  ends() {
    if (this.x < -this.width) {
      return true;
    }
  }
}
