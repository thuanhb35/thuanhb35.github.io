// Project Title
// Your Name
// Date
//

// Extra for Experts:
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let p of points){
    p.display();
  }

}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY));
}

class MiniPoint{
  //constructor function
  constructor(x,y){  //set up class variables
    this.x = x;    this.y = y;    this.s = 20;
    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10);    this.yTime = random(10);
    this.timeShift = 0.01;   this.maxSpeed = 5; 
  }

  //class functions
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.s);
  }
}