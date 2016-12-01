var Planet = function(r, size, c, speed) {
	this.pos = new p5.Vector(0, 0, 0);
	this.constant = 0;
	this.constanty = 0;
	this.radius = basex * r;
	this.radius2 = basex * (r / 3);
	this.radius3 = basex * (r / 3);
	this.start = random(TWO_PI);
	this.add = rspeed * speed;
	this.c = c;
	this.draw = true;
	this.s = size;
/*
	this.drawpath = function() {
		if (this.draw === true) {
			fill(255);
			ellipse(this.pos.x, this.pos.y, 5, 5);
		}
		if (this.pos.x === -this.radius) {
			this.draw = false;
		}
	}
*/

	this.run = function() {
		translate(0,0);
		this.pos.x = this.constant + sin(this.start) * this.radius;
		this.pos.y = this.constanty + cos(this.start) * this.radius2;
		this.pos.z = this.constant + cos(this.start) * this.radius3;

		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		ambientMaterial(this.c);
		ellipsoid(this.s, this.s, this.s, 64);
		pop();
		this.start += this.add;
	}
	
	
	this.selected = function() {
		
	}

}