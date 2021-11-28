let bx0;
let by0;
let bx1;
let by1;
let bx2;
let by2;
let bx3;
let by3;
let bx4;
let by4;
let xOffset0 = 0.0;
let yOffset0 = 0.0;
let xOffset1 = 0.0;
let yOffset1 = 0.0;
let xOffset2 = 0.0;
let yOffset2 = 0.0;
let xOffset3 = 0.0;
let yOffset3 = 0.0;
let xOffset4 = 0.0;
let yOffset4 = 0.0;
let overBox0 = false;
let overBox1 = false;
let overBox2 = false;
let overBox3 = false;
let overBox4 = false;
let locked0 = false;
let locked1 = false;
let locked2 = false;
let locked3 = false;
let locked4 = false;
let cam0 = true;
let cam1 = true;
let cam2 = false;
let cam3 = false;
let cam4 = false;
let capture;
let c_width;
let c_height;
let sizeSlider;
let anglSlider;
let tintSlider;
let opacSlider;
let shown = false;
let font;

function preload() {
  font = loadFont('SourceCodePro.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  setAttributes('alpha', false)
  textFont(font);
  textSize(32);
  bx0 = 100;
  by0 = 100;
  bx1 = 150;
  by1 = 150;
  bx2 = 200;
  by2 = 200;
  bx3 = 250;
  by3 = 250;
  bx4 = 300;
  by4 = 300;
  capture = createCapture(VIDEO);
  capture.hide();
  sizeSlider = []
  sizeSlider[0] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[0].position(0, 0);
  sizeSlider[0].hide();
  anglSlider = [];
  anglSlider[0] = createSlider
 
}

function draw() {
  background(0);
  fill(255,255,255)
  text('test', 100,100);
  print(mouseX + ' ' + mouseY);
  translate(-(window.innerWidth/2), -(window.innerHeight/2));

  if (capture.loadedmetadata == true) {
    c_width = capture.width;
    c_height = capture.height;
  }

  if (cam0 == true) {
    tint(255,128);
    new_size = sizeSlider[0].value();
    image(capture, bx0, by0, c_width * new_size, c_height * new_size);
  }
  if (cam1 == true) {
    tint(255,128);
    image(capture, bx1, by1, c_width, c_height);
  }
  if (cam2 == true) {
    tint(255,128);
    image(capture, bx2, by2, c_width, c_height);
  }
  if (cam3 == true) {
    tint(255,128);
    image(capture, bx3, by3, c_width, c_height);
  }
  if (cam4 == true) {
    tint(255,128);
    image(capture, bx4, by4, c_width, c_height);
  }
  if (cam0 == true && mouseX > bx0 && mouseX < bx0 + c_width * new_size && mouseY > by0 && mouseY < by0 + c_height * new_size) {
    overBox0 = true;
    stroke(255);
    noFill();
    rect(bx0, by0, c_width * new_size, c_height * new_size);
  } else {
    overBox0 = false;
  }
  if (cam1 == true && mouseX > bx1 && mouseX < bx1 + c_width && mouseY > by1 && mouseY < by1 + c_height) {
    overBox1 = true;
    stroke(255);
    noFill();
    rect(bx1, by1, c_width, c_height);
  } else {
    overBox1 = false;
  }
  if (cam2 == true && mouseX > bx2 && mouseX < bx2 + c_width && mouseY > by2 && mouseY < by2 + c_height) {
    overBox2 = true;
    stroke(255);
    noFill();
    rect(bx2, by2, c_width, c_height);
  } else {
    overBox2 = false;
  }
  if (cam3 == true && mouseX > bx3 && mouseX < bx3 + c_width && mouseY > by3 && mouseY < by3 + c_height) {
    overBox3 = true;
    stroke(255);
    noFill();
    rect(bx3, by3, c_width, c_height);
  } else {
    overBox3 = false;
  }
  if (cam4 == true && mouseX > bx4 && mouseX < bx4 + c_width && mouseY > by4 && mouseY < by4 + c_height) {
    overBox4 = true;
    stroke(255);
    noFill();
    rect(bx4, by4, c_width, c_height);
  } else {
    overBox4 = false;
  }

}

function keyPressed() {
  if (keyCode == 49) {
    if (cam0 == false) {
      cam0 = true;
    } else {
      cam0 = false;
    }
  } 
  if (keyCode == 50) {
    if (cam1 == false) {
      cam1 = true;
    } else {
      cam1 = false;
    }
  }
  if (keyCode == 51) {
    if (cam2 == false) {
      cam2 = true;
    } else {
      cam2 = false;
    }
  }
  if (keyCode == 52) {
    if (cam3 == false) {
      cam3 = true;
    } else {
      cam3 = false;
    }
  }
  if (keyCode == 53) {
    if (cam4 == false) {
      cam4 = true;
    } else {
      cam4 = false;
    }
  }
  if (keyCode == 79 && shown == false) {
      sizeSlider[0].show();
      shown = true;
    } else if (keyCode == 79 && shown == true) {
      sizeSlider[0].hide();
      shown = false;
    }
}

function mousePressed() {
  if (overBox0 == true) {
    locked0 = true;
  } else {
    locked0 = false;
  }
  
  if (overBox1 == true) {
    locked1 = true;
  } else {
    locked1 = false;
  }
  
  if (overBox2 == true) {
    locked2 = true;
  } else {
    locked2 = false;
  }
  
  if (overBox3 == true) {
    locked3 = true;
  } else {
    locked3 = false;
  }
  
  if (overBox4 == true) {
    locked4 = true;
  } else {
    locked4 = false;
  }

  xOffset0 = mouseX - bx0;
  yOffset0 = mouseY - by0;
  xOffset1 = mouseX - bx1;
  yOffset1 = mouseY - by1;
  xOffset2 = mouseX - bx2;
  yOffset2 = mouseY - by2;
  xOffset3 = mouseX - bx3;
  yOffset3 = mouseY - by3;
  xOffset4 = mouseX - bx4;
  yOffset4 = mouseY - by4;

}

function mouseDragged() {
  if (locked0) {
    bx0 = mouseX - xOffset0;
    by0 = mouseY - yOffset0;
  } 
  
  if (locked1) {
    bx1 = mouseX - xOffset1;
    by1 = mouseY - yOffset1;
  }

  if (locked2) {
    bx2 = mouseX - xOffset2;
    by2 = mouseY - yOffset2;
  }

  if (locked3) {
    bx3 = mouseX - xOffset3;
    by3 = mouseY - yOffset3;
  }

  if (locked4) {
    bx4 = mouseX - xOffset4;
    by4 = mouseY - yOffset4;
  }
}

function mouseReleased() {
  locked0 = false;
  locked1 = false;
  locked2 = false;
  locked3 = false;
  locked4 = false;
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// TODO:
// 1. Move, Rotate, Scale image frames with M+K
// 2. Add/Remove image frames with M+K
// 3. Add primitive shapes, colors
// 4. Add movement/animation
// 5. Add audio reactivity
// 6. Add user interface
// 7. Add shaders?
