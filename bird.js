class Bird {
  constructor() {
    this.image;
    this.x = 500;
    this.y = HEIGHT / 2;
    this.gravity = 0.7;
    this.force = -12;
    this.velocity = 0;
  }
  preloadBird() {
    this.image = loadImage("/imges/ezgif.com-gif-maker.gif");
  }
  setup() {
    fill(255);
    image(this.image, this.x, this.y, 260, 260);
  }
  fly() {
    this.velocity += this.force;
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y + 130 > HEIGHT) {
      gameOverFunc();
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
