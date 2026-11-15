// Grace Granger Homework 12 "sound exploration"

// Defining the sounds as variables

let buttonOne
let buttoneTwo
let buttonThree
let buttonFour
let buttoneFive

function preLoad(){
// Each button assigned its audio
  buttonOne = loadSound('./Assets/Button_1.mp3');
}

function setup(){
  createCanvas(700,300)
  noLoop()
  
}

function draw(){
  //Initial look of the visual soundboard before anything is pressed
background(51, 2, 47)
stroke(50)
strokeWeight(5)
fill(100)
circle(100,150,70)
circle(225,150,70)
circle(350,150,70)
circle(475,150,70)
circle(600,150,70)
}

function keyPressed(){
  // Plays specific audio file and changes on-screen visual representation of "1" when "1" is pressed on the keyboard
  if (key === '1'){
    fill(255,50,50)
    stroke(255,0,0)
    circle(100,150,70);
    buttonOne.play();
  }else{
    fill(100)
    stroke(50)
    circle(100,150,70)
  }
  if (key === '2'){
    fill(255,100,25)
    stroke(255,50,0)
    circle(225,150,70)
  }else{
    fill(100)
    stroke(50)
    circle(225,150,70)
  }
  if (key === '3'){
    fill(245,245,0)
    stroke(255,255,0)
    circle(350,150,70)
  }else{
    fill(100)
    stroke(50)
    circle(350,150,70)
  }
  if (key === '4'){
    fill(0,245,0)
    stroke(0,255,10)
    circle(475,150,70)
  }else{
    fill(100)
    stroke(50)
    circle(475,150,70)
  }
  if (key === '5'){
    fill(0,10,245)
    stroke(0,0,255)
    circle(600,150,70)
  }else{
    fill(100)
    stroke(50)
    circle(600,150,70)
  }
}