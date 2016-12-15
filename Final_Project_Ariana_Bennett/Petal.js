//cos movement
var Petal = function(position) {
	this.pos = position.copy();
	this.velocity;
	this.size = random(4, 8);
	//this.tilt = random(0, PI / 4);
	this.lifespan = 1000.0;
	this.angle = 0;

	this.add = random(2, 5);
	this.radius = random(7, 20);
	this.velX = random(2, 5);
	this.constant = random(width);


	this.run = function() {
		this.float();
		this.display();
	}

	this.float = function() {
		this.pos.y = cos(this.angle) * this.radius + this.constant;
		this.pos.x += this.velX;
		//this.lifespan -= 1.0;
		this.angle += radians(this.add);
	}


	this.display = function() {
		push();
		translate(this.pos.x, this.pos.y);
		//	rotate(this.tilt);
		fill(230, 190, 190);
		ellipse(0, 0, this.size, this.size);
		//triangle(0, 0, 0, this.size, this.size / 2, this.size / 2);
		pop();
	}

	this.dead = function() {
		if (this.lifespan < 0.0) {
			return true;
		} else {
			return false;
		}

	}




}