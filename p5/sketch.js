var tri_r1;
var tri_g1;
var tri_b1;
var tri_a1;
var tri_r2;
var tri_g2;
var tri_b2;
var tri_a2;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display','block');
  canvas.style('z-index', '-1');
  canvas.position(0,0);
  
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    background(255,255,255,0);
  } else {
    background(255,255,255,50);
  }

  let tri_r = random(100,250);
  let tri_g = random(100,250);
  let tri_b = random(100,250);
  let tri_a = random(255);
  fill(tri_r,tri_g,tri_b,tri_a);
  triangle(
    width*0.75 + random(-90,90), height*0.81 + random(-90,90), 
    width*0.5 + random(-90,90), height*0.75 + random(-90,90), 
    width*0.5 + random(-90,90), height*0.75 + random(-90,90));

  let tri_r2 = random(-5,5);
  let tri_g2 = random(-5,5);
  let tri_b2 = random(-5,5);
  let tri_a2 = random(255);
  fill(tri_r2,tri_g2,tri_b2,tri_a2);
  triangle(
    width*0.25 + random(-75,75), height*0.27 + random(-75,75), 
    width*0.5 + random(-75,75), height*0.33 + random(-75,75), 
    width*0.5 + random(-75,75), height*0.33 + random(-75,75));
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}