var Particle2 = function(startpos, dest, add, xdir) {
	this.start = startpos.copy();
	this.dest = dest.copy();
	this.theta = 0.0;
	this.add = add;
	this.xadd = xdir;
	this.h = 20;
	this.reached = false;
	this.b = 20;

	this.run = function() {
		this.update();
		this.display();
	}

	this.check = function() {
		if (this.start.x == this.dest.x) {
			this.reached = true;
			this.blink();
			this.restart();
		}
	}
	
	this.blink = function(){
		fill(80, 80, 80, 130);
		ellipse(this.dest.x, this.dest.y, this.b, this.b);
	}

	this.restart = function(){
		this.start = startpos.copy();
		this.theta = 0.0;
		this.reached = false;
	}

	this.update = function() {
		if (this.reached === false) {
			this.start.y += sin(this.theta);
			this.theta += this.add;
			this.start.x += this.xadd;
		}
	}


	this.display = function() {
		fill(245, 230, 65);
		ellipse(this.start.x, this.start.y, 18, 18);
	}
}