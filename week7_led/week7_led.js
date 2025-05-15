let ledOn = false;
let pulse = 0;

function setup() {
  let canvas = createCanvas(500, 300);
  canvas.parent('p5-container');
}

function draw() {
  background(20);

  // Draw circuit wire
  stroke(0, 255, 255);
  strokeWeight(3);
  line(50, height / 2, 450, height / 2);

  // Simulate electric pulse
  if (ledOn) {
    pulse += 0.1;
    let pulseX = 50 + (sin(pulse) + 1) / 2 * 400;
    fill(0, 255, 255);
    noStroke();
    ellipse(pulseX, height / 2, 12, 12);
  }

  // Draw LED
  fill(ledOn ? color(0, 255, 100) : color(80));
  stroke(ledOn ? color(0, 255, 150) : 200);
  strokeWeight(2);
  ellipse(width / 2, height / 2, 80, 80);

  // Glow effect
  if (ledOn) {
    noStroke();
    fill(0, 255, 100, 80);
    ellipse(width / 2, height / 2, 120 + sin(frameCount * 0.1) * 10);
  }
}

function mousePressed() {
  // Toggle LED state on click inside canvas
  if (
    mouseX > width / 2 - 40 &&
    mouseX < width / 2 + 40 &&
    mouseY > height / 2 - 40 &&
    mouseY < height / 2 + 40
  ) {
    ledOn = !ledOn;
  }
}
