// cplors and Canvases Program
// Mr. Thuan
// sept13, 2023
// Practice using color variables, layers, animation

// Global Variables
let ballX = width/2, ballY = height/2, ballSize = 30;
let xSpeed = 5, ySpeed = 5;

fuction setup(){
    createCanvas(windowWidth, windowHeight);
    ballX = width/2;
    ballY = height/2;
}

fuction draw(){
    background(220);
    moveAndDrawBall();
}

fuction moveAndDrawBall(){
   //update the position
   ballX += xSpeed; //ballX = ballX 

   //update the direction (ie. bounce)

   //render the ball
}