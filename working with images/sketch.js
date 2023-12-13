// Working with Images
// Mr. Thuan
// October 10, 2023

// Global Variable
let lionL, lionR;

function preload(){
    // happens BEFORE setup. will ensure all loading
    // is done, before moving on to setup()
    lionL = loadImage("assets/lion-left.png")
    lionR = loadImage("assets/lion-right.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background(220);
    stepOne(); //lion dísplay
}

function stepOne(){
    // step one - lion display
    image(lionL, mouseX, mouseY);
}