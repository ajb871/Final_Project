var earth;
var planets = [];
var starshow = [];
var basex = 130;
var rspeed;


var pg;
var wings1;

function preload() {
	//wings1 = loadImage('data/wings1.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	rspeed = radians(0.7);
	planets.push(earth = new Planet(1, 10, color(60, 80, 280), 1));
	planets.push(mercury = new Planet(0.35, 6, color(160, 115, 60), 1.607));
	planets.push(venus = new Planet(0.6, 9, color(160, 115, 170), 1.174));
	planets.push(mars = new Planet(1.5, 10, color(110, 13, 0), 0.802));
	planets.push(jupiter = new Planet(2.1, 25, color(180, 160, 120), 0.434));
	planets.push(saturn = new Planet(2.6, 17, color(180, 80, 30), 0.323));
	planets.push(uranus = new Planet(3.1, 13, color(150, 180, 240), 0.228));
	planets.push(neptune = new Planet(3.7, 12, color(65, 75, 105), 0.182));
	planets.push(pluto = new Planet(4.6, 4, color(220, 220, 255), 0.159));


	//star array
	for (s = 0; s < 200; s++) {
		var sparkie = new Sparkle(random(width), random(height));
		starshow.push(sparkie);
	}

	pg = createGraphics(300, 300);
}




function draw() {
	background(10);

	//pg.background(255);
	rspeed = radians(0.7);


	push();
	translate(0, 0);
	fill(210, 220, 35);
	ellipse(0, 0, 40, 40);
	pop();

	push();
	translate(0, 0, 0);
	ambientLight(250);
	pointLight(250, 250, 250, 0, 0, 0);
	pop();

	startime();

	for (i = 0; i < planets.length; i++) {
		planets[i].run();
	}

}

function startime() {
	for (var i = 1; i < starshow.length; i++) {
		starshow[i].run(); //run every star in array
	}
}