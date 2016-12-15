var Msg = function(s, e) {
	this.pos = s.copy();
	this.end = e.copy();

	this.velocity = createVector(0, 0);
	//this.accel = createVector(0, 0);


	this.run = function() {
		this.go();
		this.update();
		this.display();

	}

	this.display = function(){
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.angle);
		fill(random(120));
		triangle(-3, 0, 4, 0, 3, 4);
		pop();
	}

	this.update = function() {
		this.velocity.add(this.accel);
		this.angle = atan2(this.end.y - this.pos.y, this.end.x - this.pos.x);

		this.pos.add(this.velocity);
	}

	this.go = function(end) {
		this.dest = p5.Vector.sub(this.end, this.pos);
		this.dest.normalize();
		this.accel = this.dest;

	}

}