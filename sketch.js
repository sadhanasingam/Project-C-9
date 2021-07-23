var r = 0;
var g = 0;
var b = 0;

function redbg (){
  r = 255;
  g = 0;
  b = 0;
}

function setup() {
  createCanvas(400, 400);  
  var btn_red = createButton("RED");
  btn_red.position(100,200);
  btn_red.mousePressed(redbg);

  var btn_green = createButton("GREEN");
  btn_green.position(250,200);
  btn_green.mousePressed(greenbg);

  var btn_blue = createButton("BLUE");
  btn_blue.position(175,300);
  btn_blue.mousePressed(bluebg);

  var btn_purple = createButton("PURPLE");
  btn_purple.position(175,100);
  btn_purple.mousePressed(purplebg);
}

function draw() {
  background(r,g,b);
  
}

function greenbg (){
  r = 0;
  g = 255;
  b = 0;
}

function bluebg (){
  r = 0;
  g = 0;
  b = 255;
}
  
function purplebg (){
  r = 230;
  g = 0;
  b = 300;
}