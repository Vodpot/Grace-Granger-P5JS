//Grace Granger
//Homework 7 redone in P5JS

// Variables to define the 9 possible spots

  let xList = [55, 170, 290];
  let yList = [75, 255, 420];
  let colors = ['#0078BF', '#F15060', '#FF48B0', '#FF6C2F', '#FFE800'];

function setup() {
  createCanvas(350, 500);
  noLoop();
}

function draw() {
  // Match canvas to my CSS file's color
  background(157, 122, 210); 

  // Line thickness and Color for the grid
  strokeWeight(8);
  stroke(0);

  // Vertical Lines
  for (let lineX = 115; lineX <= 230; lineX += 115) {
    line(lineX, 5, lineX, 495);
  }
  // Horizontal Lines
  for (let lineY = 155; lineY <= 500; lineY += 175) {
    line(5, lineY, 345, lineY);
  }

  // Placing O's and "Ex's"
  strokeWeight(10);
  noFill();

  // For loop to place the grid
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      // Determine Color and Shape type
      stroke(random(['#0078BF', '#F15060', '#FF48B0', '#FF6C2F', '#FFE800']));
      let shapeType = random(['circle', 'Ex']);

      // Places O's or "Ex's"
      if (shapeType === 'circle') {
        circle(xList[x], yList[y], 60);
      } else {
        line(xList[x] - 30, yList[y] - 30, xList[x] + 30, yList[y] + 30);
        line(xList[x] - 30, yList[y] + 30, xList[x] + 30, yList[y] - 30);
      }
    }
  }
}

//Click to get a new sketch
  function mouseClicked() {
    redraw();
  }