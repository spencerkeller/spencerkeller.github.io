/*
DONE:
## Add/Remove camera frames
## Move, Rotate, Scale camera
## Adjust camera tint, opacity
## Add user interface

TODO:
## convert repeated variables to arrays
## Add primitive shapes, colors
## Add movement/animation
## Add audio reactivity?
## Add shaders?
*/

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
let mx = [];
let my = [];
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
let cam2 = true;
let cam3 = false;
let cam4 = false;
let capture;
let c_width;
let c_height;
let img = [];
let sizeSlider;
let new_size = [];
let anglSlider;
let new_angle = [];
let tintSlider;
let new_tint = [];
let opacSlider;
let new_opac = [];
let targetAngle = 0.0;
let shown = true;
let hidden = true;
let font;
let txt = [];

function preload() {
  font = loadFont('SourceCodePro.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('alpha', false)
  bx0 = 0;
  by0 = 0;
  bx1 = 50;
  by1 = 50;
  bx2 = 100;
  by2 = 100;
  bx3 = 150;
  by3 = 150;
  bx4 = 200;
  by4 = 200;
  capture = createCapture(VIDEO);
  capture.hide();
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  colorMode(RGB);
  angleMode(DEGREES);
  sizeSlider = [];
  anglSlider = [];
  tintSlider = [];
  opacSlider = [];

  //set up cam 1 sliders
  sizeSlider[0] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[0].position(0, 0);
  //sizeSlider[0].hide();
  anglSlider[0] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[0].position(0, sizeSlider[0].y + sizeSlider[0].height);
  //anglSlider[0].hide();
  tintSlider[0] = createSlider(0, 255, 255, 1);
  tintSlider[0].position(0, anglSlider[0].y + anglSlider[0].height);
  tintSlider[0].size(53.33);
  //tintSlider[0].hide();
  tintSlider[1] = createSlider(0, 255, 255, 1);
  tintSlider[1].position(tintSlider[0].x + tintSlider[0].width, anglSlider[0].y + anglSlider[0].height);
  tintSlider[1].size(53.33);
  //tintSlider[1].hide();
  tintSlider[2] = createSlider(0, 255, 255, 1);
  tintSlider[2].position(tintSlider[1].x + tintSlider[1].width, anglSlider[0].y + anglSlider[0].height);
  tintSlider[2].size(53.33);
  //tintSlider[2].hide();
  opacSlider[0] = createSlider(0, 255, 128, 1);
  opacSlider[0].position(0, tintSlider[0].y + tintSlider[0].height);
  //opacSlider[0].hide();

  //set up cam 2 sliders
  sizeSlider[1] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[1].position(0, opacSlider[0].y + opacSlider[0].height + 32);
  //sizeSlider[1].hide();
  anglSlider[1] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[1].position(0, sizeSlider[1].y + sizeSlider[1].height);
  //anglSlider[1].hide();
  tintSlider[3] = createSlider(0, 255, 255, 1);
  tintSlider[3].position(0, anglSlider[1].y + anglSlider[1].height);
  tintSlider[3].size(53.33);
  //tintSlider[3].hide();
  tintSlider[4] = createSlider(0, 255, 255, 1);
  tintSlider[4].position(tintSlider[3].x + tintSlider[3].width, anglSlider[1].y + anglSlider[1].height);
  tintSlider[4].size(53.33);
  //tintSlider[4].hide();
  tintSlider[5] = createSlider(0, 255, 255, 1);
  tintSlider[5].position(tintSlider[4].x + tintSlider[4].width, anglSlider[1].y + anglSlider[1].height);
  tintSlider[5].size(53.33);
  //tintSlider[5].hide();
  opacSlider[1] = createSlider(0, 255, 128, 1);
  opacSlider[1].position(0, tintSlider[4].y + tintSlider[4].height);
  //opacSlider[1].hide();

  //set up cam 3 sliders
  sizeSlider[2] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[2].position(0, opacSlider[1].y + opacSlider[1].height + 32);
  //sizeSlider[2].hide();
  anglSlider[2] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[2].position(0, sizeSlider[2].y + sizeSlider[2].height);
  //anglSlider[2].hide();
  tintSlider[6] = createSlider(0, 255, 255, 1);
  tintSlider[6].position(0, anglSlider[2].y + anglSlider[2].height);
  tintSlider[6].size(53.33);
  //tintSlider[6].hide();
  tintSlider[7] = createSlider(0, 255, 255, 1);
  tintSlider[7].position(tintSlider[6].x + tintSlider[6].width, anglSlider[2].y + anglSlider[2].height);
  tintSlider[7].size(53.33);
  //tintSlider[7].hide();
  tintSlider[8] = createSlider(0, 255, 255, 1);
  tintSlider[8].position(tintSlider[7].x + tintSlider[7].width, anglSlider[2].y + anglSlider[2].height);
  tintSlider[8].size(53.33);
  //tintSlider[8].hide();
  opacSlider[2] = createSlider(0, 255, 128, 1);
  opacSlider[2].position(0, tintSlider[8].y + tintSlider[8].height);
  //opacSlider[2].hide();

  //set up cam 4 sliders
  sizeSlider[3] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[3].position(0, opacSlider[2].y + opacSlider[2].height + 32);
  //sizeSlider[3].hide();
  anglSlider[3] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[3].position(0, sizeSlider[3].y + sizeSlider[3].height);
  //anglSlider[3].hide();
  tintSlider[9] = createSlider(0, 255, 255, 1);
  tintSlider[9].position(0, anglSlider[3].y + anglSlider[3].height);
  tintSlider[9].size(53.33);
  //tintSlider[9].hide();
  tintSlider[10] = createSlider(0, 255, 255, 1);
  tintSlider[10].position(tintSlider[9].x + tintSlider[9].width, anglSlider[3].y + anglSlider[3].height);
  tintSlider[10].size(53.33);
  //tintSlider[10].hide();
  tintSlider[11] = createSlider(0, 255, 255, 1);
  tintSlider[11].position(tintSlider[10].x + tintSlider[10].width, anglSlider[3].y + anglSlider[3].height);
  tintSlider[11].size(53.33);
  //tintSlider[11].hide();
  opacSlider[3] = createSlider(0, 255, 128, 1);
  opacSlider[3].position(0, tintSlider[11].y + tintSlider[11].height);
  //opacSlider[3].hide();

  //set up cam 5 sliders
  sizeSlider[4] = createSlider(0.1, 2, 1, 0.1);
  sizeSlider[4].position(0, opacSlider[3].y + opacSlider[3].height + 32);
  //sizeSlider[4].hide();
  anglSlider[4] = createSlider(0.0, 360.0, 0.0, 1.0);
  anglSlider[4].position(0, sizeSlider[4].y + sizeSlider[4].height);
  //anglSlider[4].hide();
  tintSlider[12] = createSlider(0, 255, 255, 1);
  tintSlider[12].position(0, anglSlider[4].y + anglSlider[4].height);
  tintSlider[12].size(53.33);
  //tintSlider[12].hide();
  tintSlider[13] = createSlider(0, 255, 255, 1);
  tintSlider[13].position(tintSlider[12].x + tintSlider[12].width, anglSlider[4].y + anglSlider[4].height);
  tintSlider[13].size(53.33);
  //tintSlider[13].hide();
  tintSlider[14] = createSlider(0, 255, 255, 1);
  tintSlider[14].position(tintSlider[13].x + tintSlider[13].width, anglSlider[4].y + anglSlider[4].height);
  tintSlider[14].size(53.33);
  //tintSlider[14].hide();
  opacSlider[4] = createSlider(0, 255, 128, 1);
  opacSlider[4].position(0, tintSlider[14].y + tintSlider[14].height);
  //opacSlider[4].hide();
  
  textFont(font);
  textSize(16);
  
}

function draw() {
  background(0);
  
  //Set up slider labels
  push();
  if (shown == true) {
    translate(-windowWidth/2, -windowHeight/2);
    
    txt[0] = text('Cam #1 Size', sizeSlider[0].x + (sizeSlider[0].width + 4), sizeSlider[0].y + (sizeSlider[0].height - 4));
    txt[1] = text('Cam #1 Angle', anglSlider[0].x + (anglSlider[0].width + 4), anglSlider[0].y + (anglSlider[0].height - 4));
    txt[2] = text('Cam #1 R G B', tintSlider[2].x + tintSlider[2].width + 4, tintSlider[2].y + tintSlider[2].height - 4);
    txt[3] = text('Cam #1 Opacity', opacSlider[0].x + (opacSlider[0].width + 4), opacSlider[0].y + (opacSlider[0].height - 4));
    
    txt[4] = text('Cam #2 Size', sizeSlider[1].x + (sizeSlider[1].width + 4), sizeSlider[1].y + (sizeSlider[1].height - 4));
    txt[5] = text('Cam #2 Angle', anglSlider[1].x + (anglSlider[1].width + 4), anglSlider[1].y + (anglSlider[1].height - 4));
    txt[6] = text('Cam #2 R G B', tintSlider[5].x + (tintSlider[5].width + 4), tintSlider[5].y + (tintSlider[5].height - 4));
    txt[7] = text('Cam #2 Opacity', opacSlider[1].x + (opacSlider[1].width + 4), opacSlider[1].y + (opacSlider[1].height - 4));
    
    txt[8] = text('Cam #3 Size', sizeSlider[2].x + (sizeSlider[2].width + 4), sizeSlider[2].y + (sizeSlider[2].height - 4));
    txt[9] = text('Cam #3 Angle', anglSlider[2].x + (anglSlider[2].width + 4), anglSlider[2].y + (anglSlider[2].height - 4));
    txt[10] = text('Cam #3 R G B', tintSlider[8].x + (tintSlider[8].width + 4), tintSlider[8].y + (tintSlider[8].height - 4));
    txt[11] = text('Cam #3 Opacity', opacSlider[2].x + (opacSlider[2].width + 4), opacSlider[2].y + (opacSlider[2].height - 4));
    
    txt[12] = text('Cam #4 Size', sizeSlider[3].x + (sizeSlider[3].width + 4), sizeSlider[3].y + (sizeSlider[3].height - 4));
    txt[13] = text('Cam #4 Angle', anglSlider[3].x + (anglSlider[3].width + 4), anglSlider[3].y + (anglSlider[3].height - 4));
    txt[14] = text('Cam #4 R G B', tintSlider[11].x + (tintSlider[11].width + 4), tintSlider[11].y + (tintSlider[11].height - 4));
    txt[15] = text('Cam #4 Opacity', opacSlider[3].x + (opacSlider[3].width + 4), opacSlider[3].y + (opacSlider[3].height - 4));
    
    txt[16] = text('Cam #5 Size', sizeSlider[4].x + (sizeSlider[4].width + 4), sizeSlider[4].y + (sizeSlider[4].height - 4));
    txt[17] = text('Cam #5 Angle', anglSlider[4].x + (anglSlider[4].width + 4), anglSlider[4].y + (anglSlider[4].height - 4));
    txt[18] = text('Cam #5 R G B', tintSlider[14].x + (tintSlider[14].width + 4), tintSlider[14].y + (tintSlider[14].height - 4));
    txt[19] = text('Cam #5 Opacity', opacSlider[4].x + (opacSlider[4].width + 4), opacSlider[4].y + (opacSlider[4].height - 4));
    fill(255, 176, 5);
    textSize(24);
    txt[20] = text(
         "\n" +
         "KEYBOARD CONTROLS:", opacSlider[4].x + 4, opacSlider[4].y + (opacSlider[4].height*2));
    fill(255,255,255);
    textSize(16);
    txt[21] = text(
         "\n" +
         "1-5: Show/hide camera windows" +
         "\n" +
         "9: Show/hide ellipses" +
         "\n" +
         "0: Show/hide these options", opacSlider[4].x + 4, opacSlider[4].y + (opacSlider[4].height*2)+28);
    fill(255, 176, 5);
    textSize(24);
    txt[22] = text(
         "USAGE NOTES:", opacSlider[4].x + 4, opacSlider[4].y + (opacSlider[4].height*2)+130);
    
    fill(255,255,255);
    textSize(16);
    txt[23] = text(
         "Experimentation is highly encouraged, but an" +
         "\n" +
         "external webcam or camera is necessary for creating" +
         "\n" +
         "video feedback. For that use case, you'll need to" +
         "\n" +
         "be able to point your camera at the same screen" +
         "\n" +
         "that your camera's video is being displayed on." +
         "\n" +
         "Using your keyboard and and the controls above:" +
         "\n" +
         "Add, remove, arrange, and manipulate camera windows," +
         "\n" +
         "making sure to overlap in some areas. Point your" +
         "\n" +
         "camera at the screen and make subtle rotational" +
         "\n" +
         "adjustments until you dial in some neat fractals!", opacSlider[4].x + 4, opacSlider[4].y + (opacSlider[4].height*2)+148);
  }
  pop();

  if (capture.loadedmetadata == true) {
    c_width = capture.width;
    c_height = capture.height;
  }
  
  push();
  if (cam0 == true) {
    //Set up sliders
    new_size[0] = sizeSlider[0].value();
    new_tint[0] = tintSlider[0].value();
    new_tint[1] = tintSlider[1].value();
    new_tint[2] = tintSlider[2].value();
    new_opac[0] = opacSlider[0].value();
    new_angle[0] = anglSlider[0].value();
    blendMode(ADD);
    //adjust tint
    tint(new_tint[0],new_tint[1],new_tint[2],new_opac[0]);

    //Translate and rotate
    translate(bx0, by0);
    rotate(new_angle[0]);

    //Draw camera
    image(capture, 0, 0, c_width * new_size[0], c_height * new_size[0]);

    //Hit test
    if (cam0 == true && dist(bx0, by0, mouseX - windowWidth/2, mouseY - windowHeight/2) < (c_height/4)) {
      overBox0 = true;
      stroke(217, 148, 20);
      noFill();
      ellipse(0,0,c_height/2);
      stroke(128, 128, 128);
      rect(0,0,c_width * new_size[0],c_height * new_size[0]);
    } else {
      overBox0 = false;
    }
    if (hidden == false) {
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
  }
  }
  pop();

  push();
  if (cam1 == true) {
    //Set up sliders
    new_size[1] = sizeSlider[1].value();
    new_tint[3] = tintSlider[3].value();
    new_tint[4] = tintSlider[4].value();
    new_tint[5] = tintSlider[5].value();
    new_opac[1] = opacSlider[1].value();
    new_angle[1] = anglSlider[1].value();
    blendMode(ADD);
    //Adjust tint
    tint(new_tint[3],new_tint[4],new_tint[5],new_opac[1]);

    //Translate and rotate
    translate(bx1, by1);
    rotate(new_angle[1]);

    //Draw camera
    image(capture, 0, 0, c_width * new_size[1], c_height * new_size[1]);

    //Hit test
    if (cam1 == true && dist(bx1, by1, (mouseX - windowWidth/2), (mouseY - windowHeight/2)) < (c_height/4)) {
      overBox1 = true;
      stroke(217, 148, 20);
      noFill();
      ellipse(0,0,c_height/2);
      stroke(128, 128, 128);
      rect(0,0,c_width * new_size[1],c_height * new_size[1]);
    } else {
      overBox1 = false;
    }
    if (hidden == false) {
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
  }
  }
  pop();
  push();
  if (cam2 == true) {
    //set up sliders
    new_size[2] = sizeSlider[2].value();
    new_tint[6] = tintSlider[6].value();
    new_tint[7] = tintSlider[7].value();
    new_tint[8] = tintSlider[8].value();
    new_opac[2] = opacSlider[2].value();
    new_angle[2] = anglSlider[2].value();
    blendMode(ADD);
    //Adjust tint
    tint(new_tint[6],new_tint[7],new_tint[8],new_opac[2]);

    //Translate and rotate
    translate(bx2,by2);
    rotate(new_angle[2]);

    //Draw camera
    image(capture, 0, 0, c_width * new_size[2], c_height * new_size[2]);

    //Hit test
    if (cam2 == true && dist(bx2, by2, (mouseX - windowWidth/2), (mouseY - windowHeight/2)) < (c_height/4)) {
    overBox2 = true;
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
    stroke(128, 128, 128);
    rect(0,0,c_width * new_size[2],c_height * new_size[2]);
  } else {
    overBox2 = false;
  }
  if (hidden == false) {
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
  }
  }
  pop();
  push();
  if (cam3 == true) {
    //Set up sliders
    new_size[3] = sizeSlider[3].value();
    new_tint[9] = tintSlider[9].value();
    new_tint[10] = tintSlider[10].value();
    new_tint[11] = tintSlider[11].value();
    new_opac[3] = opacSlider[3].value();
    new_angle[3] = anglSlider[3].value();

    //Adjust tint
    tint(new_tint[9],new_tint[10],new_tint[11],new_opac[3]);

    //Translate and rotate
    translate(bx3,by3);
    rotate(new_angle[3]);

    //Draw camera
    image(capture, 0, 0, c_width * new_size[3], c_height * new_size[3]);

    //Hit test
    if (cam3 == true && dist(bx3, by3, (mouseX - windowWidth/2), (mouseY - windowHeight/2)) < (c_height/4)) {
    overBox3 = true;
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
    stroke(128, 128, 128);
    rect(0,0,c_width * new_size[3],c_height * new_size[3]);
  } else {
    overBox3 = false;
  }
  if (hidden == false) {
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
  }
  }
  pop();
  push();
  if (cam4 == true) {
    //Set up sliders
    new_size[4] = sizeSlider[4].value();
    new_tint[12] = tintSlider[12].value();
    new_tint[13] = tintSlider[13].value();
    new_tint[14] = tintSlider[14].value();
    new_opac[4] = opacSlider[4].value();
    new_angle[4] = anglSlider[4].value();

    //Adjust tint
    tint(new_tint[12],new_tint[13],new_tint[14],new_opac[4]);

    //Translate and rotate
    translate(bx4,by4);
    rotate(new_angle[4]);

    //Draw camera
    image(capture, 0, 0, c_width * new_size[4], c_height * new_size[4]);

    //Hit test
    if (cam4 == true && dist(bx4, by4, (mouseX - windowWidth/2), (mouseY - windowHeight/2)) < (c_height/4)) {
    overBox4 = true;
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
    stroke(128, 128, 128);
    rect(0,0,c_width * new_size[4],c_height * new_size[4]);
  } else {
    overBox4 = false;
  }
  if (hidden == false) {
    stroke(217, 148, 20);
    noFill();
    ellipse(0,0,c_height/2);
  }
  }
  pop();  
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

  if (keyCode == 57) {
    if (hidden == true) {
      hidden = false;
    }
  }

  if (keyCode == 48) {
    if (shown == false){ 
      sizeSlider[0].show();
      anglSlider[0].show();
      tintSlider[0].show();
      tintSlider[1].show();
      tintSlider[2].show();
      opacSlider[0].show();

      sizeSlider[1].show();
      anglSlider[1].show();
      tintSlider[3].show();
      tintSlider[4].show();
      tintSlider[5].show();
      opacSlider[1].show();
      
      sizeSlider[2].show();
      anglSlider[2].show();
      tintSlider[6].show();
      tintSlider[7].show();
      tintSlider[8].show();
      opacSlider[2].show();

      sizeSlider[3].show();
      anglSlider[3].show();
      tintSlider[9].show();
      tintSlider[10].show();
      tintSlider[11].show();
      opacSlider[3].show();
      
      sizeSlider[4].show();
      anglSlider[4].show();
      tintSlider[12].show();
      tintSlider[13].show();
      tintSlider[14].show();
      opacSlider[4].show();
      
      shown = true;
    } else {
      sizeSlider[0].hide();
      anglSlider[0].hide();
      tintSlider[0].hide();
      tintSlider[1].hide();
      tintSlider[2].hide();
      opacSlider[0].hide();

      sizeSlider[1].hide();
      anglSlider[1].hide();
      tintSlider[3].hide();
      tintSlider[4].hide();
      tintSlider[5].hide();
      opacSlider[1].hide();
      
      sizeSlider[2].hide();
      anglSlider[2].hide();
      tintSlider[6].hide();
      tintSlider[7].hide();
      tintSlider[8].hide();
      opacSlider[2].hide();
      
      sizeSlider[3].hide();
      anglSlider[3].hide();
      tintSlider[9].hide();
      tintSlider[10].hide();
      tintSlider[11].hide();
      opacSlider[3].hide();
      
      sizeSlider[4].hide();
      anglSlider[4].hide();
      tintSlider[12].hide();
      tintSlider[13].hide();
      tintSlider[14].hide();
      opacSlider[4].hide();
      
      shown = false;
    }
  }
}

function keyReleased () {
  if (keyCode == 57) {
    if (hidden == false) {
      hidden = true;
    }
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

