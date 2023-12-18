// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dinoImage
let dino;

function preload() {
  dinoImage = loadImage("assets/dino.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dino= new Dino(50, 400)
}

function draw() {
  background(220);
  dino.display();
  dino.move();
}

function keyPressed() {
  if (key == ' ') {

  }
}

class Dino {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }

  display() {
    image(dinoImage, this.x, this.y, 50, 50);
  }


  move() {
    if (keyIsDown(32)) {
      this.y = this.y - 50;
    }
    else if (keyIsDown(40)) {
      this.y = this.y + 15;
    }
  }
}

function spawnObstacles() 
   IF (frameCount % 60==0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX=-4;
    var rand=Math.round(random(1,6));
    switch(rand) { 
    case 1:obstacle.addImage(obstacle1img);
           break;
    case 2:obstacle.addImage(obstacle2img);
           break;
    case 3:obstacle.addImage(obstacle3img);
           break;
    case 4:obstacle.addImage(obstacle4img)
            break;
    case 5:obstacle.addImage(obstacle5img);
           break;
   case 6:obstacle.addImage(obstacle6img);
           break;
           default:break;
  }
  obstacle.scale=0.4;
    obstacle.lifetime=150;
}