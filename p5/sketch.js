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
  let tri_a = random(25);
  if (mouseY > height * 0.6 & mouseX > width * 0.4 & mouseX < width * 0.6) {
    tri_a = random(255);
  }
  fill(tri_r,tri_g,tri_b,tri_a);
  triangle(
    width * 0.40 + random(-25,25), height * 0.90 + random(-25,25), 
    width * 0.60 + random(-25,25), height * 0.90 + random(-25,25), 
    width * 0.50 + random(-25,25), height * 0.50 + random(-25,25));

  let tri_r2 = random(-5,5);
  let tri_g2 = random(-5,5);
  let tri_b2 = random(-5,5);
  let tri_a2 = random(25);
  if (mouseY < height * 0.4 & mouseX > width * 0.4 & mouseX < width * 0.6) {
    tri_a2 = random(255);
  }
  fill(tri_r2,tri_g2,tri_b2,tri_a2);
  triangle(
    width * 0.40 + random(-25,25), height * 0.10 + random(-25,25), 
    width * 0.60 + random(-25,25), height * 0.10 + random(-25,25), 
    width * 0.50 + random(-25,25), height * 0.50 + random(-25,25));
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
