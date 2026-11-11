//Grace Granger
//Homework 7 redone in P5JS

//Location references for the 9 possible shape spots

  let xList = ['55','170','290']
  let yList = ['75','255','420']
  
  

function setup() {
  createCanvas(700, 500)
}


function draw(){
  background(255)

  // Line thickness and Color
  strokeWeight(8)
  stroke(0)

//Tic Tac Toe Grid
  for (let lineX = 115, 300, 115) {
    line(lineX, 5, lineX, 495);
  }
  for (let lineY = 155,500,200) {
    line(5, lineY, 345, lineY);
  }
//Placing Os and Xs

  strokeWeight(10)
  noFill()
  //Determines there is only 9 total shapes
    for (let x = 1, 3){
        for (let y = 1, 3){
  // Determines Color of the shape that will be placed for each of the 9 locations
  stroke(random(['#0078BF','#F15060', '#FF48B0','#FF6C2F','#FFE800']))
    shapeType = random['circle', 'Ex']
  // Places Os
    if (shapeType == 'circle') {
  // Os Size
  circle(xList[x], yList[y], 60);
  // Places Xs
    } else {
         (shapeType == 'Ex');
  // Xs size
  line (xList[x]-30,yList[y]-30,xList[x]+30,yList[y]+30)
  line (xList[x]-30,yList[y]+30,xList[x]+30,yList[y]-30)
            }
    noLoop()
        }
    }
}