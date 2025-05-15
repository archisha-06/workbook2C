let video;
let charSize = 16; // Bigger characters
let asciiChars = "@#W$9876543210?!abc;:+=-,._ ".split("").reverse();

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(floor(width / charSize), floor(height / charSize));
  video.hide();
  textFont('monospace');
  textSize(charSize);
  textAlign(LEFT, TOP);
  frameRate(15);
}

function draw() {
  background(0);
  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightness = (r + g + b) / 3;

      let charIndex = floor(map(brightness, 0, 255, 0, asciiChars.length - 1));
      let char = asciiChars[charIndex];

      fill(0, 255, 100); // Matrix green
      text(char, x * charSize, y * charSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(floor(width / charSize), floor(height / charSize));
}
