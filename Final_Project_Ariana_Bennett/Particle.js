var Particle = function(position, velocity) {
	this.pos = position.copy();
	this.velocity = createVector(4, 4);
	this.size = random(3, 6);
	this.half = this.size / 2;
	//this.c = color(this.r, this.g, this.b);
	//this.r = 255;
	//this.g = 255;
	//this.b = 255;
	this.life = 20;
	this.sinvalue = 0;


	this.run = function() {
		if (this.life > 0) {
			this.update();
			this.display();
		}
	}

//create star that starts at random location, starts off dark, gets brights, goes dark again
//used sinvalue to achieve that result
//and this.life so it can reset position, sin, velocity, etc.
	this.update = function() {
		this.pos.add(this.velocity);
		
		this.life -= 1;
		this.sinvalue += PI/12;
		
		if (this.life === 0){
			this.pos.x = random(width);
			this.pos.y = random(height);
			this.sinvalue = 0;
			this.life = 20;
		}
	}

	this.display = function() {
		fill(255 * sin(this.sinvalue));
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}


}