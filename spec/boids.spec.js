const { Boid } = require("../boids");
const { expect } = require("chai");

describe("Boids", () => {
  describe("Boid.align", () => {
    it("when Boid.align is ran, if no other boids are in range boid.xd will remain unchanged", () => {
      const boidPrime = new Boid();
      boidPrime.xd = 1;
      boidPrime.x = 0;
      boidPrime.y = 0;
      const boidSecondus = new Boid();
      boidSecondus.xd = 2;
      boidSecondus.x = 51;
      boidSecondus.y = 1;
      const flock = [boidPrime, boidSecondus];
      boidPrime.align(flock);
      expect(boidPrime.xd).to.eql(1);
    });
    it("when Boid.align is ran, boid.xd will equal it's original value plus half the average of all other local boids", () => {
      const boidPrime = new Boid();
      boidPrime.xd = 1;
      boidPrime.x = 0;
      boidPrime.y = 0;
      const boidSecondus = new Boid();
      boidSecondus.xd = 3;
      boidSecondus.x = 1;
      boidSecondus.y = 1;
      const flock = [boidPrime, boidSecondus];
      boidPrime.align(flock);
      expect(boidPrime.xd).to.eql(2.5);
    });
    it("boid.xd will equal it's original value plus half the average of all other local boids, even when the value is a negative", () => {
      const boidPrime = new Boid();
      boidPrime.xd = 2;
      boidPrime.x = 0;
      boidPrime.y = 0;
      const boidSecondus = new Boid();
      boidSecondus.xd = -4;
      boidSecondus.x = 1;
      boidSecondus.y = 1;
      const flock = [boidPrime, boidSecondus];
      boidPrime.align(flock);
      expect(boidPrime.xd).to.eql(0);
    });
  });
  describe("boid.seperation", () => {
    it("boid.xd will ", () => {});
  });
});
