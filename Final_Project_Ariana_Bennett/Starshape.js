var Starshape = function(size, pos){
	this.pos = pos.copy();
	this.size = size;
	this.choiceVar = random(1);
	//this.rotation = random(0, TWO_PI);
	
	this.shapechoice = function(){
		
	}
	
	
	this.display = function(){
		push();
		//rotate(this.rotation);
		translate(this.pos.x, this.pos.y);
		scale(size);
		noStroke();
		fill(255);
		for (i = 0; i < 5; i ++){
			triangle(-1, 0, 0, 3, 1, 0);
			rotate(radians(360/5));
		}
		pop();
	}
	
	
	
}