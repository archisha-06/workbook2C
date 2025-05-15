let inspirationPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('sans-serif');
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(255);
  noCursor();

  inspirationPos = createVector(width / 2, height / 2);
}

function draw() {
  clear();

  // Draw inspiration text
  fill(255);
  text("INSPIRATION", inspirationPos.x, inspirationPos.y);

  // Draw line from text to mouse
  stroke(255, 100);
  strokeWeight(2);
  line(inspirationPos.x, inspirationPos.y, mouseX, mouseY);

  // Optional glowing dot at cursor
  noStroke();
  fill(255, 100);
  ellipse(mouseX, mouseY, 8, 8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inspirationPos.set(width / 2, height / 2);
}
