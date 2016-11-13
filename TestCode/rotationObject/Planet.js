var Planet = function(relsize, relspeed, relradius, starting) {
	this.size = relsize * earthwidth;
	this.speed = relspeed * rspeed * -1; //speed of individual planet
	this.start = starting - (PI / 6); //starting position
	this.orbit = orbitwidth * relradius; //size of orbit cirle
	this.radius = relradius * x; //radius size 

	this.constant = width / 2; //middle x position of rotation
	this.x; //x and y positions of planet
	this.y;

	this.spin = function() {
		noFill();
		stroke(2);
		ellipse(width / 2, height / 2, this.orbit, this.orbit);

		this.x = this.constant + sin(this.start) * this.radius;
		this.y = this.constant + cos(this.start) * this.radius;
		ellipse(this.x, this.y, this.size, this.size);
		this.start += this.speed;

		//used this ^ rotation function instead of translate&rotate so i could track x&y positions
		/*
		push();
		translate(width / 2, height / 2);
		rotate(this.start);
		fill(0);
		ellipse(this.radius, this.radius, this.size, this.size);
		this.start += this.speed;
		pop();
		*/
	}

}