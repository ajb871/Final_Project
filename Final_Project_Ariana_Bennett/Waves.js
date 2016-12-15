var Waves = function(pos, d1, d2, d3, g) {
	this.pos = pos.copy();
	this.waves = new Array(d1, d2, d3);
	this.growth = g;
	//this.run = true;

	this.run = function() {
		this.update();
	//	this.toobig();
		this.display();
	}


	this.update = function() {
		for (i = 0; i < this.waves.length; i++) {
			this.waves[i] += this.growth;
		}
	}

	this.display = function() {
		noFill();
		strokeWeight(4);
		stroke(0);
		for (i = 0; i < this.waves.length; i++) {
			ellipse(this.pos.x, this.pos.y, this.waves[i], this.waves[i]);
		}
	}
	/*
	this.toobig = function() {
		for (i = 0; i < waves.length; i++) {
			if (waves[i] > width) this.run = false;
		}
	}
	*/


}