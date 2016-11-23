var rspeed; //base rotation speed (edited in planet class)
var earthwidth = 20; //base planet size (earth)
var orbitwidth = 140; //base orbit PATH width (earth)
var x = 25; //base orbit distance (from sun)

var rfont;

//PLANETS IN OVERWORLD
var spark;
var starshow = [];
var planetArray = [];
var earth;
var mercury;
var venus;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var pluto;

var animationSeq = false; //whether animation is running or main screen is displayed
var spaceselect = true;

//FRAME RATES
var mercRate = 0;
var venRate = 0;
var marsRate = 0;
var jupRate = 0;
var satRate = 0;
var uranRate = 0;
var nepRate = 0;
var pluRate = 0;

//MERCURY VARS
var cadX;
var cadY;
var cadA = 0.0;
var cadAdd;
var cadMult = 20.0;
var cadAccel = 3.0;
var rectH = 0.0;
var msgs = [];
var p;
var p2;
var comms = [];
//images
var wings1;

//VENUS VARS
var waterrings = [];


function preload() {
	wings1 = loadImage('data/wings1.png');
	rfont = loadFont('data/Roman.ttf');
}


function setup() {
	cadY = height - 120;
	cadAdd = PI / 20;

	createCanvas(600, 600);
	background(255);
	imageMode(CENTER);
	textAlign(CENTER);
	//place each planet into an array (planetArray)
	planetArray.push(mercury = new Planet(0.6, 1.607, 0.35, "mercury"));
	planetArray.push(venus = new Planet(0.75, 1.174, 0.6, "venus"));
	planetArray.push(earth = new Planet(1, 1, 1, "earth"));
	planetArray.push(mars = new Planet(1.2, 0.802, 1.5, "mars"));
	planetArray.push(jupiter = new Planet(1.7, 0.434, 2.1, "jupiter"));
	planetArray.push(saturn = new Planet(1.5, 0.323, 2.6, "saturn"));
	planetArray.push(uranus = new Planet(1.0, 0.228, 3.1, "uranus"));
	planetArray.push(neptune = new Planet(1.0, 0.182, 3.7, "neptune"));
	planetArray.push(pluto = new Planet(0.5, 0.159, 4.2, "pluto"));

	//communication particles
	p = new Particle2(createVector(10, height / 2), createVector(590, height / 2), 0.02, 2);
	p2 = new Particle2(createVector(590, height / 2), createVector(10, height / 2), -0.02, -2);

	//star array
	for (s = 0; s < 200; s++) {
		var sparkie = new Sparkle(random(width), random(height));
		starshow.push(sparkie);
	}
}

function draw() {
	if (spaceselect === true) {
		console.log("space is on");
	}
	rspeed = radians(0.7); //rspeed when not changed in check();
	//run check first so rspeed will change for all planets 

	if (spaceselect === true) { //if space select scene is still active
		background(0);
		//the sun
		startime();

		fill(180, 190, 0);
		noStroke();
		ellipse(width / 2, height / 2, 20, 20);
		//
		//go through the array using for loops to check & run the planets in the array
		for (i = 0; i < planetArray.length; i++) {
			if (planetArray[i].possible === true) {
				if (planetArray[i].name != 'earth') {
					planetArray[i].check();
				}
			}
		}
		for (i = 0; i < planetArray.length; i++) {
			planetArray[i].run();
		}
	}

	//if the animation for one of the planets if true, space select is false, and use function
	//storyChoice to chose which animation to run by passing planet name into function
	for (i = 0; i < planetArray.length; i++) {
		if (planetArray[i].animation === true) {
			spaceselect = false;
			storyChoice(planetArray[i].name);
		}
	}

}

//story choice uses switch function and the name passed to choose which planetStory to run
function storyChoice(planetName) {
	switch (planetName) {
		case "mercury":
			mercuryStory();
			break;
		case "venus":
			venusStory();
			break;
		case "mars":
			marsStory();
			break;
		case "jupiter":
			jupiterStory();
			break;
		case "saturn":
			saturnStory();
			break;
		case "uranus":
			uranusStory();
			break;
		case "neptune":
			neptuneStory();
			break;
		case "pluto":
			plutoStory();
			break;
	}
}

//PLANET ANIMATIONS
//starts with func "caduceus" which creates an image of mercury's staff with sin & wing.png image
//may change calls of caduceus() to changes in cariable cadColor to clean up 
function mercuryStory() {
	if (mercRate < 170) {
		background(0, 10);
		caduceus(color(255));
	}
	if ((mercRate > 170) && (mercRate < 235)) {
		background(110, 205, 245, 5);
	}
	//sin points change color
	if ((mercRate > 175) && (mercRate < 260)) {
		caduceus(color(230, 210, 25, 100));
	}
	//sin points change color
	if ((mercRate > 260) && (mercRate < 320)) {
		caduceus(color(230, 145, 30, 60));
	}
	//the staff "drops" down from the top of the screen
	if ((mercRate > 230) && (mercRate < 260)) {
		noStroke();
		fill(255, 10);
		rect(width / 2 - 10, 100, 20, rectH);
		rectH += 20.0;
	}
	//wings & top of staff fade in
	if ((mercRate > 260) && (mercRate < 320)) {
		tint(255, 20);
		image(wings1, width / 2, 150);
		noStroke();
		fill(235, 210, 25, 20);
		ellipse(width / 2, 100, 35, 35);
		fill(255, 20);
		ellipse(width / 2, 100, 50, 50);
	}
	if ((mercRate > 320) && (mercRate < 400)) {
		background(0, 20);
	}
	if ((mercRate > 360) && (mercRate < 940)) {
		background(175, 135, 145, 50);
		communicate();
	}

	if (mercRate > 1000) {
		spaceselect = true;
		mercury.animation = false;
		mercury.possible = false;
	}
	console.log(mercRate);
	mercRate += 1;
}

function venusStory() {
	if (venRate < 100) {
		background(10, 10, 100, 70);
	}

	if (venRate > 120) {
		background(255);
		//water();
	}

	if (venRate > 700) {
		spaceselect = true;
		venus.animation = false;
		venus.possible = false;
	}
	console.log(venRate);
	venRate += 1;
}

function marsStory() {
	if (marsRate < 90) {
		nada();
	}
	if (marsRate > 90) {
		spaceselect = true;
		mars.animation = false;
		mars.possible = false;
	}
	console.log(marsRate);
	marsRate += 1;
}

function jupiterStory() {
	if (jupRate < 90) {
		nada();
	}
	if (jupRate > 90) {
		spaceselect = true;
		jupiter.animation = false;
		jupiter.possible = false;
	}
	console.log(jupRate);
	jupRate += 1;
}

function saturnStory() {
	if (satRate < 90) {
		nada();
	}
	if (satRate > 90) {
		spaceselect = true;
		saturn.animation = false;
		saturn.possible = false;
	}
	console.log(satRate);
	satRate += 1;
}

function uranusStory() {
	if (uranRate < 90) {
		nada();
	}
	if (uranRate > 90) {
		spaceselect = true;
		uranus.animation = false;
		uranus.possible = false;
	}
	console.log(uranRate);
	uranRate += 1;
}

function neptuneStory() {
	if (nepRate < 90) {
		nada();
	}
	if (nepRate > 90) {
		spaceselect = true;
		neptune.animation = false;
		neptune.possible = false;
	}
	console.log(nepRate);
	nepRate += 1;
}

function plutoStory() {
	if (pluRate < 90) {
		nada();
	}
	if (pluRate > 90) {
		spaceselect = true;
		pluto.animation = false;
		pluto.possible = false;
	}
	console.log(pluRate);
	pluRate += 1;
}

function startime() {
	for (var i = 1; i < starshow.length; i++) {
		starshow[i].run(); //run every star in array
	}
}


//ANIMATION FUNCTIONS
function caduceus(c) {
	cadX = width / 2 + cos(cadA) * cadMult;
	stroke(c);
	strokeWeight(15);
	point(cadX, cadY);
	point(width / 2 - cos(cadA) * cadMult, cadY);
	cadA += cadAdd;
	cadY -= cadAccel;
	cadMult += 1.4;
	cadAccel += 0.1;
	if (cadY < 0) {
		cadY = height;
		cadAccel = 3.0;
		cadA = 0.0;
		cadMult = 20.0;
	}
}

function communicate() {
	fill(255);
	textFont(rfont, 24);
	text('the messenger', width / 2, height / 2);
	//two particle 2 objects will run and go towards one another, and when the reach their destination, and
	//"recieved" animation will play, and those instances will end. then 2 more will be created
	p.check();
	p.run();
	p2.check();
	p2.run();
}



function messages() {
	for (l = 0; l < 10; l++) {
		l = new Line(createVector(random(width), random(height)), createVector(random(-5, 5), random(-5, 5)));
		msgs.push(l);
	}
	for (i = 0; i < msgs.length; i++) {
		msgs[i].run();
		/*if (msgs[i].stop){
			msgs[i].splice(1, i);
		}
		*/
	}
}

/*
function water() {
	for (w = 0; w < 10; w += 2) {
		var w = new Waves(createVector(mouseX, mouseY), 80, 120, 150, 3);
		waterrings.push(w);
	}
	//}

	for (i = 0; i < waterrings.length; i++) {
		waterrings[i].run();
	}
}
*/

//placeholder for animations i haven't done
function nada() {
	background(0);
	fill(255);
	textSize(20);
	text("there's nothing here.", width / 2, height / 2);
}




/*
function messages() {
	for (m = 0; m < 30; m++) {
		m = new Particle(createVector(random(width), random(height)), createVector(random(-3, 3), random(-3, 3)), createVector(0, 0));
		msgs.push(m);
	}
	for (i = 0; i < msgs.length; i++) {
		msgs[i].run();
		if (msgs[i].gone === true) {
			msgs.splice(i, 1);
		}
	}
}
*/