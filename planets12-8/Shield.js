//An ellipse that "pulses" to a beat
//starting size, grows to a size2

var Shield = function(s1, s2) {
	this.size1 = s1;
	//this.midsize = s2 - s2 / 6;
	this.size2 = s2;
	this.growth = 2;
	this.growrate = 0;
	this.jerk = 0.02;
	//this.distance1 = this.size2 - this.size1;
	this.realsize = this.size1;
	this.smaller = true;
	this.bigger = false;



	this.run = function() {
		this.decider();
		this.display();
	}

	//starts off at default size 1,quickly grows to one size, then another, then shrinks back to size 1

	this.decider = function() {
		if (this.smaller === true) {
			this.grow();
		}
		if (this.smaller === false) {
			this.shrink();
		}
	}

	this.grow = function() {
		this.jerk = 0.02;
		this.growrate += this.jerk;
		this.growth += this.growrate;
		this.realsize += this.growth;
		if (this.realsize > this.size2) {
			this.smaller = false;
		}
	}

	this.shrink = function() {
		this.realsize -= this.growth;
		if (this.realsize < this.size1) {
			this.smaller = true;
			this.growth = 0;
			this.growrate = 0;
		}
	}

	this.display = function() {
		stroke(190, 0);
		strokeWeight(6);
		fill(random(20, 255), 0, 0);
		ellipse(width / 2, height / 2, this.realsize, this.realsize);
	}

}