let vectors = [];
let planets = [];
let fps = 5;
let gravity = 50.81;

function setup() {
  frameRate(fps);
  createCanvas(400, 400);
  //vectors.push(new Vector(0, 0, 100, 100));
  for (let i = 0; i < 2; i++) {
    planets.push(new planet(100, random(10, 50), random(400), random(400), 0, 0, 0, 0));
    //print(planets[i].position.x);
  }
}

function draw() {
  background(220);
  //ellipse(mouseX, mouseY, 5, 5);
  for (let i = 0; i < planets.length; i++) {

    for (let j = 0; j < planets.length; j++) {
      if (i !== j) {
        let distanceX = planets[i].position.x - planets[j].position.x;
        //print(distanceX);
        let distanceY = planets[i].position.y - planets[j].position.y;
        //print(distanceY);
        planets[i].applyForce(planets[j].mass, distanceX, distanceY, gravity);
      }
    }
    if (i !== 0) {
      planets[i].update();
    }
    else {
      planets[i].position.x = 200;
      planets[i].position.y = 200;
    }
    planets[i].display();
  }
  fill(0);
}