var bgColor;
var a = 0;
var fade = 0.5;
var randomCol = ["#C297B2"];
var rCol;

var myself = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(285, 199, 237);
  background(bgColor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(bgColor, 20);
  rect(0, 0, width, height);

  let pad = 40;
  textFont('Beau Rivage');
  textSize(70);
  textAlign(CENTER);
  fill(46, 117, 46, a);
  text("To myself", width / 2, height / 2);

  textAlign(CENTER);
  textFont('Montserrat Alternates');
  textSize(15);
  fill(242, 85, 85, a); 
  text("click myself", width / 2, height - pad);

  rCol = randomCol[floor(random(randomCol.length))];

  
for (let i = 0; i < myself.length; i++) {

  myself[i].x += myself[i].vx;
  myself[i].y += myself[i].vy;

  fill(rCol + "80");
  textFont('Beau Rivage');
  textSize(45);
  text("myself", myself[i].x, myself[i].y);
}
  a = a + fade;

  if (a > 255) {
    fade = 0;
  }
}

function mousePressed() {
  bgColor = color(
    random(240, 255),
    random(140, 180),
    random(150, 220)
  )

  let count = 20;

  for (let i = 0; i < count; i++) {

    let angle = random(TWO_PI);
    let speed = random(2, 6);

    myself.push({
      x: width / 2,
      y: height / 2,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed
    });
  }
}