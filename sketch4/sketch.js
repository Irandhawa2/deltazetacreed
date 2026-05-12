let leaves = [];
let stampedLeaves = [];
let leafIndex = 0; 
let t = 0;

function preload() {
  leaves[0] = loadImage("assets/leaf1.png");
  leaves[1] = loadImage("assets/leaf2.png");
  leaves[2] = loadImage("assets/leaf3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#8AC08A');

  for (let leaf of stampedLeaves) {
  image(leaf.img, leaf.x, leaf.y, leaf.size, leaf.size);
  }

  textAlign(CENTER);
  textFont('Beau Rivage');

  t += 0.05;
let change = map(sin(t), -1, 1, 200, 255);
fill(395,change, 435);

textSize(70);
text("Faith", width / 2, height / 2);
  let pad = 40;
  textAlign(CENTER);
  textFont('Montserrat Alternates');
  textSize(15);
  fill('#437043');
  text("click the screen", width / 2, height - pad);
  
}

function mousePressed() {
  
  let currentLeaf = leaves[leafIndex];

  stampedLeaves.push({
    img: currentLeaf,
    x: mouseX,
    y: mouseY,
    size: 80
  });

  leafIndex = (leafIndex + 1) % leaves.length;
}