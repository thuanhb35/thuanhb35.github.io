




function setup() {
  createCanvas(300,100)
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

var cols = 23;
var rows = 16;
var days = 365;
