const width = window.innerWidth;
const height = window.innerHeight;
let timerID = 0;
let c = document.getElementByIOd("canvas");
let ctx = c.getContext("2d");
c.width = width;
c.height = height;

const flock = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.show();
    boid.update();
  }
}

draw();
