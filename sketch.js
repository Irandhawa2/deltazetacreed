var bgColor;
var a = 0;
var fade = 0.5;
var randomCol = ["#C297B2"];
var rCol;

var minds = [];

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

  textFont('Beau Rivage');
  textSize(50);
  textAlign(CENTER);
  fill(46, 117, 46, a);
  text("To my mind", width / 2, height / 2);

  textAlign(CENTER);
  textFont('georgia');
  textSize(15);
  fill(242, 85, 85, a); // same color, but with alpha
  text("click mind", width / 2, height - 15);

  rCol = randomCol[floor(random(randomCol.length))];

  
for (let i = 0; i < minds.length; i++) {

  minds[i].x += minds[i].vx;
  minds[i].y += minds[i].vy;

  fill(rCol + "80");
  textFont('Beau Rivage');
  textSize(45);
  text("mind", minds[i].x, minds[i].y);
}
  // fade logic (fixed)
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

    minds.push({
      x: width / 2,
      y: height / 2,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed
    });
  }
}