let stars = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("defaultCanvas0"); // Ensures the canvas has the correct ID for styling
  cnv.style('position', 'fixed');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('z-index', '-2'); // Push behind all content
  cnv.style('pointer-events', 'none');
  
  for (let i = 0; i < 250; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      r: random(0.5, 2.5),
      speed: random(0.1, 0.6)
    });
  }
}


function draw() {
  background(0, 0, 20, 30); // Slight transparency

  // Stars
  noStroke();
  fill(255);
  for (let star of stars) {
    circle(star.x, star.y, star.r);
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }

  // Pulsing light effects
  fill(0, 255, 255, 30);
  ellipse(width * 0.3, height * 0.4, sin(frameCount * 0.02) * 80 + 100);
  ellipse(width * 0.7, height * 0.6, cos(frameCount * 0.01) * 100 + 120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

