var Planet = function(relsize, relspeed, relradius, name, pcolor, start) {
	this.name = name;
	this.size = relsize * earthwidth; //size of planet
	this.speed; //speed of individual planet
	this.start = start; //starting position

	this.orbit = orbitwidth * relradius; //size of drawn orbit cirle

	this.radius = x * relradius * 2.8; //radius size multiplied by x then by 2.8 so it lines up with orbit widths
	this.constantx = width / 2; //middle x position of rotation 
	this.constanty = height / 2;
	this.x; //x and y positions of planet
	this.y;

	this.selected = false; //bool for planet selection
	this.pfill = pcolor; //planet changes color when selected 

	this.animation = false;
	this.possible = true;

	//this function checks if a planet is rolled over, and is run before planet.run so all planets are affected by rspeed change
	this.check = function() {
		this.rollover();
		this.reaction();
	}

	//updates speed and rotates planet
	this.run = function() {
		if (spaceselect === true) {
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
		stroke(50);
		ellipse(width / 2, height / 2, this.orbit, this.orbit);

		this.x = this.constantx + sin(this.start) * this.radius;
		this.y = this.constanty + cos(this.start) * this.radius;
		fill(this.pfill);
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
		this.start += this.speed;
	}

	this.reaction = function() {
		if (this.selected === true) {
			this.pfill = color(120, 60, 0);
			//rotation animation around selected planets, more detail?
			//ellipse(this.x, this.y, this.size * 1.25, this.size * 1.25);
			rspeed = radians(0.2);
			if (mouseIsPressed) {
				this.animation = true;
			}
		} else {
			this.animation = false;
			this.pfill = pcolor;
		}

	}
}