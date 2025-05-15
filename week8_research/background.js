let matrixSymbols = [];

function setup() {
  let bg = createCanvas(windowWidth, windowHeight);
  bg.addClass('bg-canvas');
  textFont('Courier New');
  textSize(16);
  noStroke();

  for (let i = 0; i < width; i += 20) {
    matrixSymbols.push(new FallingSymbol(i, random(-1000, 0)));
  }
}

function draw() {
  background(0, 50); // semi-transparent black for trailing effect
  for (let s of matrixSymbols) {
    s.update();
    s.render();
  }
}

class FallingSymbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 5);
    this.value = floor(random(0, 10));
    this.alpha = 255;
  }

  update() {
    this.y += this.speed;
    this.alpha -= 1.5;
    if (this.y > height || this.alpha <= 0) {
      this.y = random(-100, 0);
      this.speed = random(1, 5);
      this.alpha = 255;
      this.value = floor(random(0, 10));
    }
  }

  render() {
    fill(0, 255, 180, this.alpha);
    text(this.value, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
