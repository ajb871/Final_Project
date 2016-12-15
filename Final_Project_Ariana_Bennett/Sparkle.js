var Sparkle = function(sx, sy) {
	//the starsize is going to be inverse to the difference between the star and mouse pos
	this.starsize = 5;
	this.distance;
	this.mx;
	this.my;
	this.sx = sx;
	this.sy = sy;
	this.sparkledecider = random(0, 1);

	this.run = function() {
		this.update();
		this.display();
	}

	//
	this.update = function() {
		this.mx = mouseX;
		this.my = mouseY;
		this.distance = dist(this.mx, this.my, this.sx, this.sy);
		this.distTrue = map(this.distance, 700, 0, 1, 5);
		if (this.sparkledecider < 0.4) {
			this.starsize = this.distTrue / 4 + random(0.5);
		} else {
			this.starsize = this.distTrue / 2;
		}

	}

	this.display = function() {
		noStroke();
		fill(255);
		ellipse(this.sx, this.sy, this.starsize, this.starsize);
	}
}