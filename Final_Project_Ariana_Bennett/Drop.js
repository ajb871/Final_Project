var Drop = function(x) {
	this.pos = createVector(x, 0);
	this.velocity = createVector(0.4, 2);

	this.size = random(1, 3);

	this.accel = createVector(0.1, 0.3);

	this.display = function() {
		stroke(255);
		fill(255);
		point(this.pos.x, this.pos.y);

	}

	this.update = function() {
		this.velocity.add(this.accel);
		this.pos.add(this.velocity);
	
	}

}