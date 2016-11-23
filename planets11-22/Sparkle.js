var Sparkle = function(sx, sy) {
  //the starsize is going to be inverse to the difference between the star and mouse pos
  this.starsize = 5;
  this.distance;
  this.mx;
  this.my;
  this.sx = sx;
  this.sy = sy;
  //this.mousepos = createVector(this.mx, this.my);
  //this.starpos = starpos.copy();

  this.run = function() {
    this.update();
    this.display();
  }


  this.update = function() {
    this.mx = mouseX;
    this.my = mouseY;
    this.distance = dist(this.mx, this.my, this.sx, this.sy);
    this.distTrue = map(this.distance, 530, 0, 1, 5);
    this.starsize = this.distTrue;

  }

  this.display = function() {
    noStroke();
    fill(255);
    ellipse(this.sx, this.sy, this.starsize, this.starsize);
  }
}