var Line = function(start, dir){
	this.start = start.copy();
	this.direction = dir.copy();
	this.end = start.copy();
	this.time = random(1, 5);
	this.strokeW = random(2, 6);
	
	this.run = function(){
		this.update();
		this.stop();
		this.display();
	}
	
	
	this.update = function(){
		this.end.add(this.direction);
		this.lifespan -= this.time;
	}
	
	this.display = function(){
		stroke(255);
		strokeWeight(this.strokeW);
		line(this.start.x, this.start.y, this.end.x, this.end.y);
	}
	
	this.stop = function(){
		if (this.lifespan < 0){
			return true;
		} else{
			return false;
		}
	}
	
	
}