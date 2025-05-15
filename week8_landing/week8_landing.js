let font, points, sampleF;

function preload(){
  font = loadFont("data/Candice.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  sampleF = 0.2;

  points = font.textToPoints("Week-8", width/4 - 200, height/2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  positionLinks(); // Place the links randomly
}

function draw() {
  background("black");
  
  for (let i = 0; i < points.length; i++) {
    stroke("cyan");
    strokeWeight(0.5);
    line(points[i].x, points[i].y, mouseX, mouseY);

    noStroke();
    fill(random(255), random(255), random(255), 180);
    circle(points[i].x + random(-2, 2), points[i].y + random(-2, 2), 8);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Randomly place the 3 links on the screen
function positionLinks() {
  const linkIds = ["link1", "link2", "link3"];
  for (let id of linkIds) {
    let x = random(50, windowWidth - 150);
    let y = random(50, windowHeight - 50);
    document.getElementById(id).style.left = `${x}px`;
    document.getElementById(id).style.top = `${y}px`;
  }
}
