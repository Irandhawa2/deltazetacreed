let s = 50;
let size = 0;
let speed = 0.2;
let r;
let roses = [
  { x: 50, size: 0 },
  { x: 125, size: 0 },
  { x: 200, size: 0 },
  { x: 275, size: 0 },
  { x: 350, size: 0 }
];
function preload() {
  r = loadImage("assets/rose.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#8AC08A');
  textAlign(CENTER);
  textFont('Beau Rivage');
  fill('#F3D6EF');
  size += speed;

  if (size < 90) {
    textSize(s + size);
    text("Growth", width / 2, height / 2);
  }

  if (size > 30 && size < 90) {
    imageMode(CORNER);
    for (let rose of roses) {
      if (rose.size < 150) {
        rose.size += 1;
      }
      if (size > 30 && size < 90) {
  imageMode(CORNER);

  let spacing = 85;
  let totalWidth = (roses.length - 1) * spacing;
  let startX = width / 2 - totalWidth / 2;

  for (let i = 0; i < roses.length; i++) {
    let rose = roses[i];

    if (rose.size < 250) {
      rose.size += 1;
    }

    let x = startX + i * spacing;
    image(r, x - 20, height - rose.size, 60, rose.size);
  }
}
    }
  }

  if (size > 120) {
    size = 0;
    for (let rose of roses) {
      rose.size = 0;
    }
  }
}
//prompt to claude: how do i make the roses disappear when the text disappears
//answer: Add a shrink condition for the roses when size gets close to resetting

//prompt to chat.gpt: i want my roses to be the same everything but just in the middle of the screen
//answer: If you want everything the same but centered on the screen, you just need to change how you calculate the y position (and slightly adjust x so they’re centered as a group).