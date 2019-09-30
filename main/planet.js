class planet {

  constructor(mass, radius, x, y, v_x, v_y, a_x, a_y) {
    this.mass = mass;
    this.radius = radius;
    this.position = createVector(x, y);
    this.velocity = createVector(1, 1);
    this.acceleration = createVector(a_x, a_y);
    this.rotation = 0;
    this.maxSpeed = 150;
    /*this.x = 0;
    this.y = 0;
    this.v_x = 0;
    this.v_y = 0;
    this.a_x = 0;
    this.a_y = 0;*/
  }
  
  applyForce(mass, distanceX, distanceY, gravity) { 
    //gravity
    // let distance = sqrt((distanceX * distanceX) + (distanceY * distanceY));
    let distance = sqrt((distanceX * distanceX) + (distanceY * distanceY));
    let forceGravity = gravity * ((this.mass * mass) / (distance * distance));
    let forceGravityX;
    let forceGravityY;
    if (this.rotation > 90 && this.rotation <= 180) {
      forceGravityX = forceGravity * cos(this.rotation);
      forceGravityY = forceGravity * -sin(this.rotation);
    }
    else if (this.rotation > 180 && this.rotation <= 270) {
      forceGravityX = forceGravity * -cos(this.rotation);
      forceGravityY = forceGravity * -sin(this.rotation);
    }
    else if (this.rotation > 270 && this.rotation <= 360) {
      forceGravityX = forceGravity * -cos(this.rotation);
      forceGravityY = forceGravity * sin(this.rotation);
    }
    else {
      forceGravityX = forceGravity * cos(this.rotation);
      forceGravityY = forceGravity * sin(this.rotation);
    }
    /*if (distanceX > mass) {
      forceGravityX = gravity * ((this.mass * mass) / (distanceX * distanceX));
    }
    else {
      forceGravityX = gravity * ((this.mass * mass) / (distanceX * -distanceX));
    }
    if (distanceY > mass) {
      forceGravityY = gravity * ((this.mass * mass) / (distanceY * distanceY));
    }
    else {
      forceGravityY = gravity * ((this.mass * mass) / (distanceY * -distanceY));
    }*/
    this.acceleration.x = forceGravityX / this.mass;
    this.acceleration.y = forceGravityY / this.mass;

  }
  display() {
    fill(0, 0, 0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
  update() {
    //this.velocity.add(this.acceleration);
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.velocity.limit(this.maxSpeed);
    if(this.velocity.x < 0 && this.velocity.y > 0 || this.velocity.y < 0 && this.velocity.x > 0) {
      this.rotation = atan(this.velocity.y / this.velocity.x) + 90;
    }
    else{
      this.rotation = atan(this.velocity.y / this.velocity.x);
    }
    print(this.velocity.x + ", " + this.velocity.y);
    //this.velocity.div(1);
    //this.position.add(this.velocity);
    //this.acceleration.mult(0);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.x < 0) {
      this.position.x = 400;
    
    }
    if (this.position.y < 0) {
      this.position.y = 400;
    
    }
    if (this.position.x > 400) {
      this.position.x = 0;
    
    }
    if (this.position.y > 400) {
      this.position.y = 0;
    
    }
  }

}