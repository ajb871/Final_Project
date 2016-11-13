var x;
var y;
var start = 0.05;
var constant;
var speed;
var scalar;

function setup() {
	scalar = 125;
	speed = 0.05;
	constant = 250;
	createCanvas(500, 500);
	background(255);
}

function draw() {
	background(255);
	noFill();
	strokeWeight(3);
	ellipse(width/2, height/2, constant, constant);
	x = constant + sin(start) * scalar;
	y = constant + cos(start) * scalar;
	fill(0);
	ellipse(x, y, 50, 50);
	start = start + speed;
}