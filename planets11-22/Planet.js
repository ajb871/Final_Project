var Planet = function(relsize, relspeed, relradius, name) {
	this.name = name;
	this.size = relsize * earthwidth; //size of planet
	this.speed; //speed of individual planet
	this.start = 0; //starting position

	this.orbit = orbitwidth * relradius; //size of drawn orbit cirle

	this.radius = x * relradius * 2.8; //radius size multiplied by x then by 2.8 so it lines up with orbit widths
	this.constant = width / 2; //middle x position of rotation 
	this.x; //x and y positions of planet
	this.y;

	this.selected = false; //bool for planet selection
	this.pfill = color(255); //planet changes color when selected 

	this.animation = false;
	this.possible = true;

	//this function checks if a planet is rolled over, and is run before planet.run so all planets are affected by rspeed change
	this.check = function() {
		this.rollover();
		this.reaction();
	}

	//updates speed and rotates planet
	this.run = function() {
		if (spaceselect = true) {
			this.speedupdate();
			this.spin();
		}
	}

	this.speedupdate = function() {
		this.speed = relspeed * rspeed * -1; //speed of individual planet
	}

	this.rollover = function() {
		//if mousex & mousey within certain parameters
		if (mouseX > this.x - this.size / 2) {
			if (mouseX < this.x + this.size / 2) {
				if (mouseY > this.y - this.size / 2) {
					if (mouseY < this.y + this.size / 2) {
						this.selected = true;
					} else {
						this.selected = false;
					}
				} else {
					this.selected = false;
				}
			} else {
				this.selected = false;
			}
		} else {
			this.selected = false;
		}
	}

	this.spin = function() {
		noFill();
		strokeWeight(1);
		stroke(255);
		ellipse(width / 2, height / 2, this.orbit, this.orbit);

		this.x = this.constant + sin(this.start) * this.radius;
		this.y = this.constant + cos(this.start) * this.radius;
		fill(this.pfill);
		ellipse(this.x, this.y, this.size, this.size);
		this.start += this.speed;
	}

	this.reaction = function() {
		if (this.selected === true) {
			this.pfill = color(255, 0, 0);
			fill(255, 120);
			ellipse(this.x, this.y, this.size * 1.25, this.size * 1.25);
			rspeed = radians(0.2);
			if (mouseIsPressed) {
				this.animation = true;
			}
		} else {
			this.animation = false;
			this.pfill = color(255);
		}

	}
}