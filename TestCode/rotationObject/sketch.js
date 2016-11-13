var rspeed; //base rotation speed (edited in planet class)
var earthwidth = 20; //base planet size (earth)
var orbitwidth = 140; //base orbit PATH width (earth)
var x = 50; //base orbit distance (from sun)

//PLANETS IN OVERWORLD
var earth;
var mercury;
var venus;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var pluto;


function setup() {
	createCanvas(600, 600);
	background(255);
	fill(0);
	rspeed = radians(2);
	earth = new Planet(1, 1, 1, 0);
	mercury = new Planet(0.5, 1.607, 0.387, 0);
	venus = new Planet(0.75, 1.174, 0.723, 0);
	mars = new Planet(1.2, 0.802, 1.524, 0);
	jupiter = new Planet(1.7, 0.434, 1.99, 0);
	saturn = new Planet(1.5, 0.323, 2.3, 0);
	uranus = new Planet(1.2, 0.228, 2.8, 0);
	neptune = new Planet(1.2, 0.182, 3.3, 0);
	pluto = new Planet(0.2, 0.159, 4.0, 0);
}

function draw() {
	background(255);
	fill(180, 190, 0);
	noStroke();
	ellipse(width/2, height/2, 20, 20);
	//planet 
	earth.spin();
	mercury.spin();
	venus.spin();
	mars.spin();
	jupiter.spin();
	saturn.spin();
	uranus.spin();
	neptune.spin();
	pluto.spin();

}