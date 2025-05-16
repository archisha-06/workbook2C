let cellSize = 20;
let columnCount;
let rowCount;
let currentCells = [];
let nextCells = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);

  columnCount = floor(width / cellSize);
  rowCount = floor(height / cellSize);

  for (let col = 0; col < columnCount; col++) {
    currentCells[col] = [];
    nextCells[col] = [];
    for (let row = 0; row < rowCount; row++) {
      currentCells[col][row] = random([0, 1]);
      nextCells[col][row] = 0;
    }
  }

  createWeekText();
  createLinks();
}

function draw() {
  background(0);

  generate();
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      let cell = currentCells[col][row];
      if (cell === 1) {
        // Dimmer cyan color with some transparency
        fill(0, 180, 180, 100);  // RGBA - lower G and B, and 100 alpha for transparency
      } else {
        noFill();
      }
      noStroke();
      rect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
}


function generate() {
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      let left = (col - 1 + columnCount) % columnCount;
      let right = (col + 1) % columnCount;
      let above = (row - 1 + rowCount) % rowCount;
      let below = (row + 1) % rowCount;

      let neighbors =
        currentCells[left][above] +
        currentCells[col][above] +
        currentCells[right][above] +
        currentCells[left][row] +
        currentCells[right][row] +
        currentCells[left][below] +
        currentCells[col][below] +
        currentCells[right][below];

      let current = currentCells[col][row];
      nextCells[col][row] = (current === 1 && (neighbors === 2 || neighbors === 3)) || (current === 0 && neighbors === 3) ? 1 : 0;
    }
  }

  let temp = currentCells;
  currentCells = nextCells;
  nextCells = temp;
}

function createWeekText() {
  let weekText = createDiv("Week 9");
  weekText.style("position", "absolute");
  weekText.style("top", "50%");
  weekText.style("left", "50%");
  weekText.style("transform", "translate(-50%, -50%)");
  weekText.style("font-size", "100px");
  weekText.style("font-weight", "bold");
  weekText.style("font-family", "Arial, sans-serif"); // Arial font
  weekText.style("color", "white");
  weekText.style("text-shadow", "0 0 10px cyan, 0 0 20px cyan"); // Glow
  weekText.style("z-index", "10");
}



function createLinks() {
  const links = [
    
    { name: "Projects", url: "../week9_p1/index.html" },
    { name: "Progress", url: "../week9_progress/index.html" },
  ];

  for (let i = 0; i < links.length; i++) {
    let link = createA(links[i].url, links[i].name, "_blank"); // _blank opens in new tab
    link.style("position", "absolute");
    link.style("top", `${random(10, 90)}%`);
    link.style("left", `${random(10, 90)}%`);
    link.style("font-size", "24px");
    link.style("font-family", "Arial, sans-serif");
    link.style("font-weight", "bold");
    link.style("color", "white");
    link.style("text-shadow", "0 0 8px cyan, 0 0 15px cyan");
    link.style("z-index", "10");
  }
    // Add back link
  let backLink = createA('/index.html', '← Back');
  backLink.style("position", "absolute");
  backLink.style("top", "20px");
  backLink.style("left", "20px");
  backLink.style("font-size", "20px");
  backLink.style("font-family", "Arial, sans-serif");
  backLink.style("color", "white");
  backLink.style("text-shadow", "0 0 5px cyan");
  backLink.style("z-index", "10");
  backLink.style("text-decoration", "none");

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  columnCount = floor(width / cellSize);
  rowCount = floor(height / cellSize);
  randomizeBoard();
}

function randomizeBoard() {
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      currentCells[col][row] = random([0, 1]);
    }
  }
}
