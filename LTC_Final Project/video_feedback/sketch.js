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
let new_size = [];
let anglSlider;
let new_angle = [];
let tintSlider;
let new_tint = [];
let opacSlider;
let new_opac = [];
let shown = false;
let font;
let txt = [];

function preload() {
  font = loadFont('SourceCodePro.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  setAttributes('alpha', false)
  bx0 = window.innerWidth / 2;
  by0 = window.innerHeight / 2;
  bx1 = bx0 + 50;
  by1 = by0 + 50;
  bx2 = bx1 + 50;
  by2 = by1 + 50;
  bx3 = bx2 + 50;
  by3 = by2 + 50;
  bx4 = bx3 + 50;
  by4 = by3 + 50;
  capture = createCapture(VIDEO);
  capture.hide();
  rectMode(CENTER);
  imageMode(CENTER);
  colorMode(RGB);
  sizeSlider = [];
  anglSlider = [];
  tintSlider = [];
  opacSlider = [];
  sizeSlider[0] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[0].position(0, 0);
  sizeSlider[0].hide();

  anglSlider[0] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[0].position(0, sizeSlider[0].y + sizeSlider[0].height);
  anglSlider[0].hide();

  tintSlider[0] = createSlider(0, 255, 255, 1);
  tintSlider[0].position(0, anglSlider[0].y + anglSlider[0].height);
  tintSlider[0].size(53.33);
  tintSlider[0].hide();
  tintSlider[1] = createSlider(0, 255, 255, 1);
  tintSlider[1].position(tintSlider[0].x + tintSlider[0].width, anglSlider[0].y + anglSlider[0].height);
  tintSlider[1].size(53.33);
  tintSlider[1].hide();
  tintSlider[2] = createSlider(0, 255, 255, 1);
  tintSlider[2].position(tintSlider[1].x + tintSlider[1].width, anglSlider[0].y + anglSlider[0].height);
  tintSlider[2].size(53.33);
  tintSlider[2].hide();

  opacSlider[0] = createSlider(0, 255, 128, 1);
  opacSlider[0].position(0, tintSlider[0].y + tintSlider[0].height);
  opacSlider[0].hide();
  
  sizeSlider[1] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[1].position(0, opacSlider[0].y + opacSlider[0].height + 32);
  sizeSlider[1].hide();
  anglSlider[1] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[1].position(0, sizeSlider[1].y + sizeSlider[1].height);
  anglSlider[1].hide();

  tintSlider[3] = createSlider(0, 255, 255, 1);
  tintSlider[3].position(0, anglSlider[1].y + anglSlider[1].height);
  tintSlider[3].size(53.33);
  tintSlider[3].hide();
  tintSlider[4] = createSlider(0, 255, 255, 1);
  tintSlider[4].position(tintSlider[3].x + tintSlider[3].width, anglSlider[1].y + anglSlider[1].height);
  tintSlider[4].size(53.33);
  tintSlider[4].hide();
  tintSlider[5] = createSlider(0, 255, 255, 1);
  tintSlider[5].position(tintSlider[4].x + tintSlider[4].width, anglSlider[1].y + anglSlider[1].height);
  tintSlider[5].size(53.33);
  tintSlider[5].hide();
  opacSlider[1] = createSlider(0, 255, 128, 1);
  opacSlider[1].position(0, tintSlider[1].y + tintSlider[1].height);
  opacSlider[1].hide();

  sizeSlider[2] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[2].position(0, opacSlider[1].y + opacSlider[1].height + 32);
  sizeSlider[2].hide();

  anglSlider[2] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[2].position(0, sizeSlider[2].y + sizeSlider[2].height);
  anglSlider[2].hide();
/*
  tintSlider[2] = createSlider(0, 255, 255, 1);
  tintSlider[2].position(0, anglSlider[2].y + anglSlider[2].height);
  tintSlider[2].hide();
*/
  opacSlider[2] = createSlider(0, 255, 128, 1);
  opacSlider[2].position(0, tintSlider[2].y + tintSlider[2].height);
  opacSlider[2].hide();

  sizeSlider[3] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[3].position(0, opacSlider[2].y + opacSlider[2].height + 32);
  sizeSlider[3].hide();

  anglSlider[3] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[3].position(0, sizeSlider[3].y + sizeSlider[3].height);
  anglSlider[3].hide();
/*
  tintSlider[3] = createSlider(0, 255, 255, 1);
  tintSlider[3].position(0, anglSlider[3].y + anglSlider[3].height);
  tintSlider[3].hide();
*/
  opacSlider[3] = createSlider(0, 255, 128, 1);
  opacSlider[3].position(0, tintSlider[3].y + tintSlider[3].height);
  opacSlider[3].hide();

  sizeSlider[4] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[4].position(0, opacSlider[3].y + opacSlider[3].height + 32);
  sizeSlider[4].hide();

  anglSlider[4] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[4].position(0, sizeSlider[4].y + sizeSlider[4].height);
  anglSlider[4].hide();
/*
  tintSlider[4] = createSlider(0, 255, 255, 1);
  tintSlider[4].position(0, anglSlider[4].y + anglSlider[4].height);
  tintSlider[4].hide();
*/
  opacSlider[4] = createSlider(0, 255, 128, 1);
  opacSlider[4].position(0, tintSlider[4].y + tintSlider[4].height);
  opacSlider[4].hide();
  
  
  
  textFont(font);
  textSize(16);
  
}

function draw() {
  background(0);
  translate(-window.innerWidth/2, -window.innerHeight/2);

  if (shown == true) {
    fill(255,255,255);
    
    txt[0] = text('Cam #1 Size', sizeSlider[0].x + (sizeSlider[0].width + 4), sizeSlider[0].y + (sizeSlider[0].height - 4));
    txt[0] = text('Cam #1 Angle', anglSlider[0].x + (anglSlider[0].width + 4), anglSlider[0].y + (anglSlider[0].height - 4));
    txt[0] = text('Cam #1 RGB', tintSlider[2].x + tintSlider[2].width + 4, tintSlider[2].y + tintSlider[2].height - 4);
    txt[0] = text('Cam #1 Opacity', opacSlider[0].x + (opacSlider[0].width + 4), opacSlider[0].y + (opacSlider[0].height - 4));
    /*
    txt[1] = text('Cam #2 Size', sizeSlider[1].x + (sizeSlider[1].width + 4), sizeSlider[1].y + (sizeSlider[1].height - 4));
    txt[1] = text('Cam #2 Angle', anglSlider[1].x + (anglSlider[1].width + 4), anglSlider[1].y + (anglSlider[1].height - 4));
    txt[1] = text('Cam #2 Tint', tintSlider[1].x + (tintSlider[1].width + 4), tintSlider[1].y + (tintSlider[1].height - 4));
    txt[1] = text('Cam #2 Opacity', opacSlider[1].x + (opacSlider[1].width + 4), opacSlider[1].y + (opacSlider[1].height - 4));
    txt[2] = text('Cam #3 Size', sizeSlider[2].x + (sizeSlider[2].width + 4), sizeSlider[2].y + (sizeSlider[2].height - 4));
    txt[2] = text('Cam #3 Angle', anglSlider[2].x + (anglSlider[2].width + 4), anglSlider[2].y + (anglSlider[2].height - 4));
    txt[2] = text('Cam #3 Tint', tintSlider[2].x + (tintSlider[2].width + 4), tintSlider[2].y + (tintSlider[2].height - 4));
    txt[2] = text('Cam #3 Opacity', opacSlider[2].x + (opacSlider[2].width + 4), opacSlider[2].y + (opacSlider[2].height - 4));
    txt[3] = text('Cam #4 Size', sizeSlider[3].x + (sizeSlider[3].width + 4), sizeSlider[3].y + (sizeSlider[3].height - 4));
    txt[3] = text('Cam #4 Angle', anglSlider[3].x + (anglSlider[3].width + 4), anglSlider[3].y + (anglSlider[3].height - 4));
    txt[3] = text('Cam #4 Tint', tintSlider[3].x + (tintSlider[3].width + 4), tintSlider[3].y + (tintSlider[3].height - 4));
    txt[3] = text('Cam #4 Opacity', opacSlider[3].x + (opacSlider[3].width + 4), opacSlider[3].y + (opacSlider[3].height - 4));
    txt[4] = text('Cam #5 Size', sizeSlider[4].x + (sizeSlider[4].width + 4), sizeSlider[4].y + (sizeSlider[4].height - 4));
    txt[4] = text('Cam #5 Angle', anglSlider[4].x + (anglSlider[4].width + 4), anglSlider[4].y + (anglSlider[4].height - 4));
    txt[4] = text('Cam #5 Tint', tintSlider[4].x + (tintSlider[4].width + 4), tintSlider[4].y + (tintSlider[4].height - 4));
    txt[4] = text('Cam #5 Opacity', opacSlider[4].x + (opacSlider[4].width + 4), opacSlider[4].y + (opacSlider[4].height - 4));
    */
  }

  if (capture.loadedmetadata == true) {
    c_width = capture.width;
    c_height = capture.height;
  }

  if (cam0 == true) {
    
    new_size[0] = sizeSlider[0].value();
    new_tint[0] = tintSlider[0].value();
    new_tint[1] = tintSlider[1].value();
    new_tint[2] = tintSlider[2].value();
    new_opac[0] = opacSlider[0].value();
    new_angle[0] = anglSlider[0].value();

    tint(new_tint[0],new_tint[1],new_tint[2],new_opac[0]);
    rotate(radians(new_angle));
    
    
    image(capture, bx0, by0, c_width * new_size[0], c_height * new_size[0]);
  }
  if (cam1 == true) {
    tint(255,128);
    new_size[1] = sizeSlider[1].value();
    image(capture, bx1, by1, c_width * new_size[1], c_height * new_size[1]);
  }
  if (cam2 == true) {
    tint(255,128);
    new_size[2] = sizeSlider[2].value();
    image(capture, bx2, by2, c_width * new_size[2], c_height * new_size[2]);
  }
  if (cam3 == true) {
    tint(255,128);
    new_size[3] = sizeSlider[3].value();
    image(capture, bx3, by3, c_width * new_size[3], c_height * new_size[3]);
  }
  if (cam4 == true) {
    tint(255,128);
    new_size[4] = sizeSlider[4].value();
    image(capture, bx4, by4, c_width * new_size[4], c_height * new_size[4]);
  }
  if (cam0 == true && 
      mouseX < bx0 + (c_width * new_size[0] / 2) && 
      mouseX > bx0 - (c_width * new_size[0] / 2) && 
      mouseY < by0 + (c_height * new_size[0] / 2) && 
      mouseY > by0 - (c_height * new_size[0] / 2)) {
    overBox0 = true;
    stroke(255);
    noFill();
    rect(bx0, by0, c_width * new_size[0], c_height * new_size[0]);
  } else {
    overBox0 = false;
  }
  if (cam1 == true && 
      mouseX < bx1 + (c_width * new_size[1] / 2) && 
      mouseX > bx1 - (c_width * new_size[1] / 2) && 
      mouseY < by1 + (c_height * new_size[1] / 2) && 
      mouseY > by1 - (c_height * new_size[1] / 2)) {
    overBox1 = true;
    stroke(255);
    noFill();
    rect(bx1, by1, c_width * new_size[1], c_height * new_size[1]);
  } else {
    overBox1 = false;
  }
  if (cam2 == true && 
      mouseX < bx2 + (c_width * new_size[2] / 2) && 
      mouseX > bx2 - (c_width * new_size[2] / 2) && 
      mouseY < by2 + (c_height * new_size[2] / 2) && 
      mouseY > by2 - (c_height * new_size[2] / 2)) {
    overBox2 = true;
    stroke(255);
    noFill();
    rect(bx2, by2, c_width * new_size[2], c_height * new_size[2]);
  } else {
    overBox2 = false;
  }
  if (cam3 == true && 
      mouseX < bx3 + (c_width * new_size[3] / 2) && 
      mouseX > bx3 - (c_width * new_size[3] / 2) && 
      mouseY < by3 + (c_height * new_size[3] / 2) && 
      mouseY > by3 - (c_height * new_size[3] / 2)) {
    overBox3 = true;
    stroke(255);
    noFill();
    rect(bx3, by3, c_width * new_size[3], c_height * new_size[3]);
  } else {
    overBox3 = false;
  }
  if (cam4 == true && 
      mouseX < bx4 + (c_width * new_size[4] / 2) && 
      mouseX > bx4 - (c_width * new_size[4] / 2) && 
      mouseY < by4 + (c_height * new_size[4] / 2) && 
      mouseY > by4 - (c_height * new_size[4] / 2)) {
    overBox4 = true;
    stroke(255);
    noFill();
    rect(bx4, by4, c_width * new_size[4], c_height * new_size[4]);
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
      anglSlider[0].show();
      tintSlider[0].show();
      tintSlider[1].show();
      tintSlider[2].show();
      opacSlider[0].show();
      /*
      sizeSlider[1].show();
      anglSlider[1].show();
      opacSlider[1].show();
      sizeSlider[2].show();
      anglSlider[2].show();
      opacSlider[2].show();
      sizeSlider[3].show();
      anglSlider[3].show();
      tintSlider[3].show();
      opacSlider[3].show();
      sizeSlider[4].show();
      anglSlider[4].show();
      tintSlider[4].show();
      opacSlider[4].show();
      */
      shown = true;
    } else if (keyCode == 79 && shown == true) {
      sizeSlider[0].hide();
      anglSlider[0].hide();
      tintSlider[0].hide();
      tintSlider[1].hide();
      tintSlider[2].hide();
      opacSlider[0].hide();
      /*
      sizeSlider[1].hide();
      anglSlider[1].hide();
      opacSlider[1].hide();
      sizeSlider[2].hide();
      anglSlider[2].hide();
      opacSlider[2].hide();
      sizeSlider[3].hide();
      anglSlider[3].hide();
      tintSlider[3].hide();
      opacSlider[3].hide();
      sizeSlider[4].hide();
      anglSlider[4].hide();
      tintSlider[4].hide();
      opacSlider[4].hide();
      */
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
