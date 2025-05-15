let mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 1024);
  fft.setInput(mic);
  noFill();
}

function draw() {
  background(10, 10, 30, 60); // semi-transparent for trailing effect

  let spectrum = fft.analyze();
  stroke(0, 255, 255);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < spectrum.length; i += 10) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, height, 0);
    curveVertex(x, y);
  }
  endShape();

  // Additional layered wave for complexity
  stroke(255, 100, 200, 150);
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < spectrum.length; i += 5) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = height / 2 + sin(i * 0.05) * spectrum[i] * 0.1;
    curveVertex(x, y);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
