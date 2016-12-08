var Bomb = function(xstart, velocity) {
	this.pos = new p5.Vector(xstart, 0);
	this.velocity = velocity.copy();
	this.bcolor;
	this.ranvar = random(1);
	this.size = random(35);

	this.run = function() {
		this.update();
		this.display();
	}

	this.edgecheck = function() {
		if (this.pos.y > height) {
			return true;
		} else {
			return false;
		}
		if (this.pos.x > width) {
			return true;
		} else {
			return false;
		}
	}


	this.update = function() {
		if (this.ranvar < 0.3) {
			this.bcolor = color(random(255), 0, 0);
		}
		if ((this.ranvar > 0.3) && (this.ranvar < 0.6)) {
			this.bcolor = color(random(90, 255));
		}
		if (this.ranvar > 0.6) {
			this.bcolor = color(random(120), 0, random(120));
		}
		this.pos.add(this.velocity);
	}

	this.display = function() {
		fill(this.bcolor);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}



}