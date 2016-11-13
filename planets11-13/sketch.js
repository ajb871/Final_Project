var rspeed; //base rotation speed (edited in planet class)
var earthwidth = 20; //base planet size (earth)
var orbitwidth = 140; //base orbit PATH width (earth)
var x = 25; //base orbit distance (from sun)

//PLANETS IN OVERWORLD
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

function setup() {
	createCanvas(600, 600);
	background(255);

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
}

function draw() {
	background(0);

	//the sun
	fill(180, 190, 0);
	noStroke();
	ellipse(width / 2, height / 2, 20, 20);
	//

	rspeed = radians(0.7); //rspeed when not changed in check();
	//run check first so rspeed will change for all planets 

	//go through the array using for loops to check & run the planets in the array
	if (spaceselect === true) { //if space select scene is still active
		for (i = 0; i < planetArray.length; i++) {
			if (planetArray[i].possible === true) {
				planetArray[i].check();
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

//planet animations: 
function mercuryStory() {
	background(170, 0, 0);
	if (mercRate > 10) {
		noFill();
		stroke(255);
		strokeWeight(3);
		ellipse(width / 2, height / 2, 200, 200);
	}
	if (mercRate > 80) {
		spaceselect = true;
		mercury.animation = false;
		mercury.possible = false;
	}
	console.log(mercRate);
	mercRate += 1;
}

function venusStory() {
	console.log(venRate);
	venRate += 1;
}

function marsStory() {
	console.log(marsRate);
	marsRate += 1;
}

function jupiterStory() {
	console.log(jupRate);
	jupRate += 1;
}

function saturnStory() {
	console.log(satRate);
	satRate += 1;
}

function uranusStory() {
	console.log(uranRate);
	uranRate += 1;
}

function neptuneStory() {
	console.log(nepRate);
	nepRate += 1;
}

function plutoStory() {
	console.log(pluRate);
	pluRate += 1;
}