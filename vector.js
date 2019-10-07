class Vector {
  constructor(startX, startY, endX, endY) {
    this.x1 = startX;
    this.y1 = startY;
    this.x2 = endX;
    this.y2 = endY;
  }
  
  draw() {
    fill(200, 100, 0);
    line(this.x1, this.y1, this.x2, this.y2);
    //triangle(this.x2, this.y2, this.x2 - 10, this.y2 - 20, this.x2 + 10, this.y2 - 20);
  }
  
}


