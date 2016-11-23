var Particle = function(position, velocity, acceleration){
	this.pos = position.copy();
	this.velocity = velocity.copy();
	this.acceleration = acceleration.copy();
	this.size = 10;
	this.half = this.size/2;
	this.c = color(this.r, this.g, this.b);
	this.r = 255;
	this.g = 255;
	this.b = 255;
	
	this.run = function(){
		this.gone();
		this.update();
		this.display();
	}
	
	
	this.update = function(){
		this.pos.add(this.velocity);
		this.r -= 2.0;
		this.g -= 2.0;
		//this.b -= 2.0;
	}
	
	this.display = function(){
		fill(this.c);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
	
	this.gone = function(){
		if (this.pos.x < 0 - this.half){
			return true;
		}
		if (this.pos.x > width + this.half){
			return true;
		}
		if (this.pos.y < 0 - this.half){
			return true;
		}
		if (this.pos.y > height + this.half){
			return true;
		}
	}
	
	
}