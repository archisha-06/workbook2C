let spiralText = "VACUUM - ";
let totalPoints = 1200;
let angleOffset = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');

  textFont('sans-serif');
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  clear(); // transparent background
  translate(width / 2, height / 2);
  rotate(angleOffset);

  let spacing = 0.12;
  let a = 0.5;
  let b = 5;

  for (let i = 0; i < totalPoints; i++) {
    let theta = i * spacing;
    let r = a + b * theta;

    let x = r * cos(theta);
    let y = r * sin(theta);

    push();
    translate(x, y);
    rotate(theta + angleOffset);

    let scaleFactor = map(i, 0, totalPoints, 2.5, 0.3);
    scale(scaleFactor);

    let alpha = map(i, 0, totalPoints, 255, 40);
    fill(0, 255, 255, alpha);
    noStroke();
    text(spiralText.charAt(i % spiralText.length), 0, 0);
    pop();
  }

  angleOffset += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
