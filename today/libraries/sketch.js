// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  Ball.move();
  Ball.display();
  //display the total number of bounces
  textSize(30); textAlign(CENTER); 
  text(totalBounces, width/2,height/2);
}

class Ball{ //a ball that bounces on the canvas edges
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));
  }
  display(){
    this.pos.add(this.vel);
    //check for wall collisions
    if(this.pos.x<0 || this.pos.x)
  }