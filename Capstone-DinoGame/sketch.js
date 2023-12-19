// Project Title
// Your Name
// Date
//
// Extra for Experts: https://p5play.org/learn/sprite_animation.html?page=2
// - describe what you did to take this project "above and beyond"
let dinoImage
let dino;
let sprite;

function preload() {
  dinoImage = loadImage("assets/dino.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;
  sprite.vel.x = -5
  world.gravity.y = 10;

	dino= new Sprite(250, 0, 50);
	dino.img = dinoImage;

	floor1 = new Sprite(90, 510, 5000, 5, 's');
}

function draw() {
  background(220);
  line(60, 510, 5000, 510);
}

function keyPressed() {
  if (key == ' ') {

  }
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



    