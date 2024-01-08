// Project Title
// Your Name
// Date
//
// Extra for Experts: https://p5play.org/learn/sprite_animation.html?page=2
// - describe what you did to take this project "above and beyond"
let dinoImage
let dinodown
let dino;
let sprite;
let value ;
let game

function preload() {
  dinoImage = loadImage("assets/dino.png")
  dinodown = loadImage("assets/down.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
initGame() ;
}

function initGame() {
  sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;
  sprite.vel.x = -5
  world.gravity.y = 10;
  sprite.position.x = 800;

	dino= new Sprite(250, 0, 50);
  dino.addAni("down", dinodown);
	dino.addAni("stand", dinoImage);
	floor1 = new Sprite(90, 510, 5000, 5, 's');
}

function resetGame() {
  sprite.position.x = 800;
  dino.position.x = 250;
  dino.position.y = 0;
  dino.vel.x = 0;
  dino.vel.y = 0;
}

function movebox() {
  sprite.vel.x = -5
  if (sprite.position.x < 0){
    sprite.position.x = 800;
  }
  if (dino.collides(sprite )) {
    print ("gameover")
  }
}

function draw() {
  background(220);
  line(60, 510, 5000, 510);
  if (keyIsDown(32)) {
    dino.vel.y = -5
  }
  if (keyIsDown(DOWN_ARROW)) {
    dino.changeAni("down")
    print(1)}
  if (keyIsDown(DOWN_ARROW)===false){
    dino.changeAni("stand")
  }
  movebox()
 }

function keyPressed() {
if (key=== "r") resetGame() ;
  }





//   move() {
//     if (keyIsDown(32)) {
//       this.y = this.y - 50;
//     }
//     else if (keyIsDown(40)) {
//       this.y = this.y + 15;
//     }
//   }
// }
