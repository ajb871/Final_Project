var Asteroidbelt = function(num, radius){
	this.num = num;
	this.radius = radius;
	this.rotation = 0;
	this.asteroids = [];
	
	
	this.display = function(){
		for (var s = 0; s < num; s ++){
			s = new Starshape(random(3), this.radius);
			this.asteroids.push(s);
		}
		for (i = 0; i < this.asteroids.length; i ++){
			push();
			rotate(rotation);
			asteroids[i].display();
			pop();
			
			rotation += radians(360/num);
			
		}
		
		
	}
	
	
	
	
	
	
}