// const { Boid } = require("./boids");

const canvas = document.getElementById("canvas");

canvas.width = 600;
canvas.height = 600;
let context = canvas.getContext("2d");

const flock = [];

for (let i = 0; i < 100; i++) {
  flock.push(new Boid());
}

const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  flock.forEach(boidee => {
    boidee.align(flock);
    boidee.cohesion(flock);
    boidee.seperation(flock);
    boidee.random();
    boidee.edges();
    boidee.show();
    boidee.update();
  });
};
animate();
