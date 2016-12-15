var ParticleFloat = function(position) {
	this.velocity = createVector(random(1,2), random(0, 1));
	this.position = position.copy();
	this.lifespan = 255.0;
	this.size = 1;

	this.run = function() {
		//this.dead();
		this.update();
		this.display();
	}

	this.update = function() {
		var r = random(1);

		//40% chance of moving to the right
		if (r < 0.4) this.velocity.x++;
		else if (r < 0.7) this.velocity.x++;
		//else if (r < 0.9) this.velocity.y++;
		//else this.velocity.y--;

		this.position.add(this.velocity);
		this.lifespan -= 2;
		if (this.size < 5) {
			this.size += 1;
		}
	}

	this.display = function() {
		fill(255, this.lifespan);
		stroke(255, this.lifespan);
		//strokeWeight(map(this.size, 1, 5, 4, 1));
		ellipse(this.position.x, this.position.y, this.size, this.size);
	}

	this.dead = function() {
		if (this.lifespan < 0.0) {
			return true;
		} else {
			return false;
		}
	}

}