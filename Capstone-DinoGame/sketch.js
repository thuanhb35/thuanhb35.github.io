// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dinoImage

function preload(){
  dinoImage = loadImage("assets/dino.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);  
  image(dinoImage, 100, 100, 50, 50);
}

function keyPressed() {
  if (key == ' ') {
 
  }
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }
}