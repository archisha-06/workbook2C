let angle = 0;
let font;
let fallingNumbers = [];
let backButton;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textSize(96); // For PROJECT 1 & 2
  textAlign(CENTER, CENTER);

  // Create dense falling numbers
  for (let i = 0; i < 400; i++) {
    fallingNumbers.push(new FallingNumber());
  }

  // Create the back link
  backButton = createA('../week8_landing/index.html', '← Back');
  backButton.position(20, 20);
  backButton.style('font-size', '20px');
  backButton.style('color', 'cyan');
  backButton.style('font-family', 'Arial, sans-serif');
  backButton.style('text-shadow', '0 0 8px cyan');
  backButton.style('z-index', '10');
}



function draw() {
  background(0);

  // Draw falling background numbers
  push();
  translate(-width / 2, -height / 2); // Shift origin to top-left for background numbers
  for (let num of fallingNumbers) {
    num.update();
    num.show();
  }
  pop();

  rotateY(angle * 0.3);
  rotateX(angle * 0.1);

  let topPos = createVector(0, -300, 0);
  let bottomPos = createVector(0, 300, 0);

  // Draw more wobbly connecting lines
  stroke(0, 255, 255, 100);
  strokeWeight(1);
  noFill();

  for (let i = 0; i < 50; i++) {
    let pct = i / 50;
    let x1 = sin(angle * 3 + i) * 100 + random(-20, 20);
    let y1 = lerp(topPos.y, bottomPos.y, pct) + random(-20, 20);
    let z1 = cos(angle * 3 + i) * 100 + random(-20, 20);

    let x2 = sin(angle * 3 + i + 1) * 100 + random(-20, 20);
    let y2 = lerp(topPos.y, bottomPos.y, (i + 1) / 50) + random(-20, 20);
    let z2 = cos(angle * 3 + i + 1) * 100 + random(-20, 20);

    line(x1, y1, z1, x2, y2, z2);
  }

  // Project 1 text
  push();
  translate(topPos.x, topPos.y, topPos.z);
  rotateY(angle);
  rotateX(angle * 0.5);
  fill(255);
  noStroke();
  text("PROJECT 1", 0, 0);
  pop();

  // Project 2 text
  push();
  translate(bottomPos.x, bottomPos.y, bottomPos.z);
  rotateY(-angle);
  rotateX(angle * 0.5);
  fill(255);
  noStroke();
  text("PROJECT 2", 0, 0);
  pop();

  angle += 0.01;
}

function mousePressed() {
  // First, check if "Back" was clicked
  if (mouseX > 20 && mouseX < 100 && mouseY > 20 && mouseY < 50) {
    window.location.href = '/week8_landing/index.html'; // Change to your actual back link
    return; // Stop further execution
  }

  // If not back, then go to project links
  if (mouseY < height / 2) {
    window.open('../week8_p1/index.html', '_blank');
  } else {
    window.open('../week8_p2/index.html', '_blank');
  }
}


// Class for falling numbers (small and dense)
class FallingNumber {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.speed = random(2, 6);
    this.num = int(random(0, 9));
    this.alpha = random(50, 200);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset();
    }
  }

  show() {
    fill(0, 255, 255, this.alpha);
    textSize(12); // Small number size
    text(this.num, this.x, this.y);
  }
}
