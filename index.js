// const { Boid } = require("./boids");

const canvas = document.getElementById("canvas");
const width = 400;
const height = 800;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext("2d");

// const randomHeight = () => {
//   return Math.round(Math.random() * height);
// };

// const randomWidth = () => {
//   return Math.round(Math.random() * width);
// };

// const randomVelocity = () => {
//   let num = Math.round(Math.random());
//   if (num === 1) {
//     return Math.round(Math.random() * 3);
//   } else {
//     return -Math.round(Math.random() * 3);
//   }
// };

// class Boid {
//   constructor() {
//     this.x = randomWidth();
//     this.y = randomHeight();
//     this.xd = randomVelocity();
//     this.yd = randomVelocity();
//   }

//   show() {
//     context.beginPath();
//     context.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
//     context.stroke();
//   }
//   update() {
//     this.x += this.xd;
//     this.y += this.yd;
//   }
//   edges() {
//     if (this.x > width) {
//       this.x = 0;
//     } else if (this.x < 0) {
//       this.x = width;
//     }
//     if (this.y > height) {
//       this.y = 0;
//     } else if (this.y < 0) {
//       this.y = height;
//     }
//   }
//   align(boids) {
//     const perception = 50;
//     const totalXD = [];
//     const totalYD = [];
//     for (let other of boids) {
//       const differenceY = this.y - other.y;
//       const differenceX = this.x - other.x;

//       if (
//         differenceX > -perception &&
//         differenceX < perception &&
//         differenceY > -perception &&
//         differenceY < perception
//       ) {
//         totalXD.push(other.xd);
//         totalYD.push(other.yd);
//       }
//     }
//     const newXD = totalXD.reduce((acc, num) => {
//       return acc + num;
//     });
//     const newYD = totalYD.reduce((acc, num) => {
//       return acc + num;
//     });
//     // if (newXD / totalXD > 0) {
//     //   this.xd += newXD / totalXD.length;
//     // } else {
//     //   this.xd += newXD / totalXD.length;
//     // }
//     // if (newYD / totalYD > 0) {
//     //   this.xy += newYD / totalYD.length;
//     // } else {
//     //   this.xy += newYD / totalYD.length;
//     // }

//     this.xd = newXD / totalXD.length;
//     this.yd = newYD / totalYD.length;
//   }
// }

const flock = [];

for (let i = 0; i < 50; i++) {
  flock.push(new Boid());
}
console.log(flock);

const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  flock.forEach(boidee => {
    boidee.align(flock);
    boidee.edges();
    boidee.show();
    boidee.update();
  });
};
animate();
