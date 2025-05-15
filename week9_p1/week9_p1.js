let stars = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }
  noCursor();
}

function draw() {
  clear(); // Transparent background
  for (let star of stars) {
    star.update();
    star.show();
  }
}

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z -= 2;
    if (this.z < 1) {
      this.reset();
    }
  }

  show() {
    fill(0, 255, 255);
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    ellipse(sx, sy, 2, 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

