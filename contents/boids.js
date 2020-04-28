const width = 600;
const height = 600;

const randomHeight = () => {
  return Math.round(Math.random() * height);
};

const randomWidth = () => {
  return Math.round(Math.random() * width);
};

const randomVelocity = () => {
  let num = Math.round(Math.random());
  if (num === 1) {
    return Math.random() * 3;
  } else {
    return -(Math.random() * 3);
  }
};

class Boid {
  constructor() {
    this.x = randomWidth();
    this.y = randomHeight();
    this.xd = randomVelocity();
    this.yd = randomVelocity();
    this.maxSpeed = 4;
    this.border = 20;
  }

  show() {
    context.beginPath();
    context.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
    context.stroke();
  }

  update() {
    this.x += this.xd;
    this.y += this.yd;
    // this.xd = 0;
    // this.yd = 0;
  }

  edges() {
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }
  }

  random() {
    const random = Math.round(Math.random * 100);
    if (random === 0) {
      this.xd = 4;
      this.yd = 4;
    } else if (random === 25) {
      this.xd = -4;
      this.yd = 4;
    } else if (random === 50) {
      this.xd = 4;
      this.yd = -4;
    } else if (random === 75) {
      this.xd = -4;
      this.xd = -4;
    }
  }

  seperation(boids) {
    const perception = 15;
    const totalX = [];
    const totalY = [];
    for (let other of boids) {
      if (other !== this) {
        const differenceY = this.y - other.y;
        const differenceX = this.x - other.x;
        if (
          differenceX > -perception &&
          differenceX < perception &&
          differenceY > -perception &&
          differenceY < perception
        ) {
          totalX.push(other.x);
          totalY.push(other.y);
        }
      }
    }
    if (totalX.length === 0 || totalY.length === 0) {
    } else {
      let newX = totalX.reduce((acc, num) => {
        return acc + num;
      });
      newX = newX / totalX.length;
      let newY = totalY.reduce((acc, num) => {
        return acc + num;
      });
      newY = newY / totalY.length;

      if (newX - this.x > 0) {
        if (this.xd - 0.4 < -this.maxSpeed) {
          this.xd = -this.maxSpeed;
        } else {
          this.xd -= 0.4;
        }
      } else if (newX - this.x < 0) {
        if (this.xd + 0.4 > this.maxSpeed) {
          this.xd = this.maxSpeed;
        } else {
          this.xd += 0.4;
        }
      }
      if (newY - this.y > 0) {
        if (this.yd - 0.4 < -this.maxSpeed) {
          this.yd = -this.maxSpeed;
        } else {
          this.yd -= 0.4;
        }
      } else if (newY - this.y < 0) {
        if (this.yd + 0.4 > this.maxSpeed) {
          this.yd = this.maxSpeed;
        } else {
          this.yd += 0.4;
        }
      }
    }
  }

  align(boids) {
    const perception = 150;
    const totalXD = [];
    const totalYD = [];
    for (let other of boids) {
      if (other !== this) {
        const differenceY = this.y - other.y;
        const differenceX = this.x - other.x;

        if (
          differenceX > -perception &&
          differenceX < perception &&
          differenceY > -perception &&
          differenceY < perception
        ) {
          totalXD.push(other.xd);
          totalYD.push(other.yd);
        }
      }
    }
    if (totalXD.length === 0 || totalYD === 0) {
    } else {
      const newXD = totalXD.reduce((acc, num) => {
        return acc + num;
      });
      const newYD = totalYD.reduce((acc, num) => {
        return acc + num;
      });
      if (this.xd + newXD / totalXD.length / 32 > this.maxSpeed) {
        this.xd = this.maxSpeed;
      } else if (this.xd + newXD / totalXD.length / 32 < -this.maxSpeed) {
        this.xd = -this.maxSpeed;
      } else {
        this.xd += newXD / totalXD.length / 32;
      }
      if (this.yd + newYD / totalYD.length / 32 > this.maxSpeed) {
        this.yd = this.maxSpeed;
      } else if (this.yd + newYD / totalYD.length / 32 < -this.maxSpeed) {
        this.yd = -this.maxSpeed;
      } else {
        this.yd += newYD / totalYD.length / 32;
      }
    }
  }

  cohesion(boids) {
    const perception = 70;
    const totalX = [];
    const totalY = [];
    for (let other of boids) {
      if (other !== this) {
        const differenceY = this.y - other.y;
        const differenceX = this.x - other.x;
        if (
          differenceX > -perception &&
          differenceX < perception &&
          differenceY > -perception &&
          differenceY < perception
        ) {
          totalX.push(other.x);
          totalY.push(other.y);
        }
      }
    }
    if (totalX.length === 0 || totalY.length === 0) {
    } else {
      let newX = totalX.reduce((acc, num) => {
        return acc + num;
      });
      newX = newX / totalX.length;
      let newY = totalY.reduce((acc, num) => {
        return acc + num;
      });
      newY = newY / totalY.length;

      if (newX - this.x > 0) {
        if (this.xd + 0.2 > this.maxSpeed) {
          this.xd = this.maxSpeed;
        } else {
          this.xd += 0.2;
        }
      } else if (newX - this.x < 0) {
        if (this.xd - 0.2 < -this.maxSpeed) {
          this.xd = -this.maxSpeed;
        } else {
          this.xd -= 0.2;
        }
      }
      if (newY - this.y > 0) {
        if (this.yd + 0.2 > this.maxSpeed) {
          this.yd = this.maxSpeed;
        } else {
          this.yd += 0.2;
        }
      } else if (newY - this.y < 0) {
        if (this.yd - 0.2 < -this.maxSpeed) {
          this.yd = -this.maxSpeed;
        } else {
          this.yd -= 0.2;
        }
      }
    }
  }
}

module.exports = { Boid };
