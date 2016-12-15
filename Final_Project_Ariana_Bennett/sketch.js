//In addition to visuals relating the the Roman gods, I'm adding sounds & text, and images of the planets
// &surfaces of the planets
//will probably only complete 3 or 4 planets by thursday 2:30

var rspeed; //base rotation speed (edited in planet class)
var earthwidth = 20; //base planet size (earth)
var orbitwidth = 140; //base orbit PATH width (earth)
var x = 25; //base orbit distance (from sun)

var rfont;

//PLANETS IN OVERWORLD
var spark;
var starshow = [];
var planetArray = [];
var latinnames;
var nameY;
var starDetails = [];
var starY;
var astRotation = 0;
var pstar;

var earth;
var mercury;
var venus;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
var pluto;

var textT = 235;
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

var fieldpoints = [];
var fieldmsgs = [];

var msgs = [];
var p;
var p2;
var comms = [];
var space = 100;
//mercimages
var wings1;
/////////////////////////////

//VENUS VARS
var petals = [];
var gradientAngle = 0;
var moonangle = 0;
var branchr;

var waterrings = [];
var circlecount;

/////////////////////////////
//MARS VARS
var beattime = false;
var base = 30;
var r_max = 180;
var beat;
var analyzer;
var amp;
var lightangle;
var shieldsize;

var xbomb;
var ybomb;
var bvel;
var bomber;
var bombarray = [];
var up = 0;
var over = 0;
//marsimages
var mars1;
var spear;

/////////////////////////////
//JUPITER VARS
var windy = [];
var windR = 0;
var rayspin = 0;
//jupimg&video
var analyzer2;
var boltbright;
var thundersound;
var windsound;

var mount1;
var jupiter1;
var hurricane;
var windscenes;

function preload() {
	//fonts
	rfont = loadFont('data/Roman.ttf');
	rfont2 = loadFont('data/Trajanus.TTF');

	//images
	wings1 = loadImage('data/wings1.png');
	mars1 = loadImage('data/mars1.png');
	hurricane = loadImage('data/hurricane1.gif');
	jupiter1 = loadImage('data/jupiter.png');
	mount1 = loadImage('data/mountain.jpg');
	spear = loadImage('data/spear.png');

	//sounds
	beat = loadSound('data/heartbeat.mp3');
	windsound = loadSound('data/wind.mp3');
	thundersound = loadSound('data/thunder.wav');

	//video
}

function setup() {
	//	windscenes = createVideo('data/windscenes.mp4');

	//	windscenes.hide();

	createCanvas(900, 600);
	background(255);
	imageMode(CENTER);
	textAlign(CENTER);

	cadY = height;
	cadAdd = PI / 20;

	windsound.setVolume(0.2);
	beat.setVolume(40.0);
	analyzer = new p5.Amplitude();
	analyzer.setInput(beat);

	analyzer2 = new p5.Amplitude();
	analyzer2.setInput(thundersound);

	latinnames = ['mercurius', 'venus', 'terra', 'mars', 'jupiter', 'saturnus', 'uranus', 'neptunus', 'pluto'];

	//place each planet into an array (planetArray)
	planetArray.push(mercury = new Planet(0.6, 1.607, 0.35, "mercury", color(255, 195, 30), random(TWO_PI), 0));
	planetArray.push(venus = new Planet(0.75, 1.174, 0.8, "venus", color(130, 190, 200), random(TWO_PI), 1));
	planetArray.push(earth = new Planet(1, 1, 1.25, "earth", color(80, 160, 90), random(TWO_PI), 2));
	planetArray.push(mars = new Planet(1.2, 0.802, 1.7, "mars", color(155, 20, 40), random(TWO_PI), 3));
	planetArray.push(jupiter = new Planet(1.7, 0.434, 2.15, "jupiter", color(255, 100, 60), random(TWO_PI), 4));
	planetArray.push(saturn = new Planet(1.5, 0.323, 2.6, "saturn", color(100, 40, 170), random(TWO_PI), 5));
	planetArray.push(uranus = new Planet(1.0, 0.228, 3.05, "uranus", color(150, 220, 255), random(TWO_PI), 6));
	planetArray.push(neptune = new Planet(1.0, 0.182, 3.5, "neptune", color(70, 105, 205), random(TWO_PI), 7));
	planetArray.push(pluto = new Planet(0.5, 0.159, 3.95, "pluto", color(110), random(TWO_PI), 8));

	//communication particles
	p = new Particle2(createVector(10, height / 2), createVector(width - 10, height / 2), 0.02, 5);
	p2 = new Particle2(createVector(width - 10, height / 2), createVector(10, height / 2), -0.02, -5);
	//	comms.push(p);
	//	comms.push(p2);

	var ppostest = createVector(random(width), random(height));
	var pveltest = random(2);
	pstar = new Particle(ppostest, pveltest);

	//star array
	for (s = 0; s < 300; s++) {
		var sparkie = new Sparkle(random(width), random(height));
		starshow.push(sparkie);
	}

	//msgs array
	for (var l = 0; l < 10; l++) {
		l = new Line(createVector(random(width), random(height)), createVector(random(-5, 5), random(-5, 5)));
		msgs.push(l);
	}

	starY = height / 2 + 43;
	for (var i = 0; i < 8; i++) {
		star = new Starshape(2, createVector(width / 2, starY))
		starDetails.push(star);
		starY += 32;
	}

	for (var x = 80; x < width; x += random(60, 100)) {
		for (var y = 80; y < height; y += random(60, 100))
			var pnt = createVector(x, y);
		fieldpoints.push(pnt);
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
		shootingstars();

		//height of mercury latin name.. middle minus relative
		//raidus to earth, plus 17 for positioning
		nameY = height / 2 - (31.5) + 17;

		for (var n = 0; n < latinnames.length; n++) {
			if (planetArray[n].selected === true) {
				fill(0, 0, 230);
			} else {
				fill(230);
			}
			textFont(rfont2, 20);
			text(latinnames[n], width / 2, nameY);
			nameY = height / 2 - (70 * .45 * (n + 2)) + 17;
		}

		//DETAILING
		for (var i = 0; i < starDetails.length; i++) {
			starDetails[i].display();
		}

		asteroidbelt();

		//this is the sun.
		strokeWeight(4);
		fill(230, 230, 0, 150);
		ellipse(width / 2, height / 2, 30, 30);
		//	fill(230, 230, 0);
		ellipse(width / 2, height / 2, 25, 25);
		//	fill(230, 230, 0);
		//fill(230, 230, 0);
		ellipse(width / 2, height / 2, 20, 20);
		//fill(255);
		//noStroke();
		//ellipse(width / 2, height / 2, 8, 8);
		noFill();
		strokeWeight(2);
		stroke(150);
		ellipse(width / 2, height / 2, 570, 570);
		strokeWeight(1);
		ellipse(width / 2, height / 2, 580, 580);

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

		if (textT > 0) {
			fill(textT);
			textFont(rfont, 90);
			text('the planets', width / 2, height - 10);
		}
		textT -= 5;
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
//////////////////////////////////////////////////
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
	if ((mercRate > 345) && (mercRate < 400)) {
		background(0, 20);
		fill(235, 210, 25, 200);
		textFont(rfont2, 25);
		text('the winged messenger', width / 2, height / 2);
	}
	if ((mercRate > 400) && (mercRate < 840)) {
		background(175, 135, 145, 50);
		//fieldtime();
		communicate();
		//wind sound effects, more movement, 
	}

	if (mercRate > 840) {
		spaceselect = true;
		mercury.animation = false;
		mercury.possible = false;
	}
	console.log(mercRate);
	mercRate += 1;
}

//frame difference, image, animation
//peace, beauty, desire, love, teal, turquoise, etc
//begins with a scene of a moon rising & moving, shows peace & serenity
function venusStory() {
	if (venRate < 20) {
		background(0, 50);
	}
	if ((venRate > 20) && (venRate < 300)) {
		background(0);
		for (var c = 70; c > 0; c--) {
			fill(180 * cos(gradientAngle), map(mouseX, 0, width, 0, 150), 110 + 2 * c * sin(gradientAngle), 200);
			ellipse(width / 2, height / 2, 100 + c * 20);
		}
		gradientAngle -= radians(5);
		venusmoon();
		fill(0);
		rect(0, 3 * height / 5, width, height / 2);
	}


	if ((venRate > 70) && (venRate < 200)) {
		branchr = map(mouseX, 0, width, 5.8, 6.8);
		push();
		translate(width / 3, 2 * height / 3);
		branch(120);
		pop();

		push();
		translate(2 * width / 3, 2 * height / 3);
		branch(120);
		pop();
	}

	if ((venRate > 40) && (venRate < 200)) {
		textFont(rfont2, 38);
		fill(0);
		text('Bringer of Peace', width / 2, 2 * height / 3 - 40);
	}

	if (venRate > 200) {
		background(10, 10, 100, 100);
		flowers();
		textFont(rfont2, 48);
		fill(255);
		text('Goddess of Love', width / 2, 2 * height / 3 - 40);
	}

	//effect where you drop flower petals into water.. mouse interactive

	if ((venRate > 450) && (venRate < 500)) {
		background(0, 230);
	}

	if (venRate > 500) {
		spaceselect = true;
		venus.animation = false;
		venus.possible = false;
	}
	console.log(venRate);
	venRate += 1;
}

function marsStory() {
	if (marsRate == 1) {
		beat.loop();
	}
	if (marsRate < 100) background(0, 20);
	if ((marsRate > 80) && (marsRate < 300)) {
		shield();
	}

	if ((marsRate > 50) && (marsRate < 100)) {
		//fill(60, 0, 0);
		//ellipse(width / 2, height / 2, 30, 30);
		tint(255, 120);
		image(mars1, width / 2, height / 2, 30, 30);
		fill(255, 120);
		noStroke();
		textFont(rfont, 20);
		text('bringer of war', width / 2, 400);
	}

	//effect added around 200 frames
	//interactivity? alter graphics in background, etc
	if ((marsRate > 200) && (marsRate < 700)) {
		background(0, 20);
		bombs();
	}

	if ((marsRate > 100) && (marsRate < 300)) {
		push();
		translate(width / 2, height / 2);
		rotate(radians(marsRate % 20));
		tint(255, 120);
		image(mars1, 0, 0, 30, 30);
		pop();
	}

	if ((marsRate > 400)) {
		background(0, 30);
		push();
		translate(width / 2, height / 2);
		rotate(PI / 6);
		image(spear, 0, 0);
		pop();
		push();
		translate(width / 2, height / 2 - 40);
		rotate(-PI / 6);
		image(spear, 0, 0);
		pop();
	}
	//occurence at 400 frames, horizontal movement & interaction?

	if (marsRate > 500) {
		beat.stop();
		spaceselect = true;
		mars.animation = false;
		mars.possible = false;
	}
	console.log(marsRate);
	marsRate += 1;
}

function jupiterStory() {
	if (jupRate < 150) {
		background((200 * jupRate) % 255, (20 * jupRate) % 255, 255, 20);
		windsound.loop();
		//raining & thunder soundclip... when amp increases suddenly(thunder) background flashes white
	}

	if ((jupRate > 40) && (jupRate < 120)) {
		//windSpin();
		sunRays(15, 50, 500);
		sunRays(6, 30, 300);
		sunRays(30, 10, 100);
	}
	if ((jupRate > 30) && (jupRate < 120)) {
		tint(200, 200, 255, 20);
		image(jupiter1, width / 2, height / 2, 100, 100);

		fill(255, 100);
		textFont(rfont2, 40);
		text('Bringer of Jollity', width / 2, 540);
	}

	if ((jupRate > 130) && (jupRate < 210)) {
		textFont(rfont2, 30);
		noStroke();
		text('god of the sky', width / 2, height / 2);
	}
	if (jupRate == 131) thundersound.loop();

	if ((jupRate > 130) && (jupRate < 540)) {
		boltbright = analyzer2.getLevel();
		background(0 + boltbright * 1000, 10);
		randombolts(width / 2, 0, 0, 0);
		//randombolts
	}
	if ((jupRate > 450) && (jupRate < 540)) {
		fill(0);
		text('king of the gods', width / 2, height - 200);
		tint(200, 200, 255, 90);
		image(mount1, width / 2, height / 2);
	}
	//lighting animation, rain?

	if (jupRate > 540) {
		thundersound.stop();
		windsound.stop();
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
//////////////////////////////////////////
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

//trying to create field of point that send msgs randomely between one another, not working as of now
function fieldtime() {
	for (var f = 0; f < fieldpoints.length; f++) {
		fill(100 + f * 30, 200, 40);
		ellipse(fieldpoints[f].x, fieldpoints[f].y, 10, 10);
		fill(255);
		ellipse(fieldpoints[f].x, fieldpoints[f].y, 7, 7);
	}
	if (mouseIsPressed) {
		var rpoint = random(fieldpoints.length);
		var rpoint2 = random(fieldpoints.length);
		sendmsg(fieldpoints[rpoint], fieldpoints[rpoint2]);
	}
}
/*
function sendmsg(start, end) {
	var m = new Msg(start, end);
	if (m.pos != m.end) {
		m.run();
	}
}
*/


function communicate() {
	fill(255);
	textFont(rfont, 24);
	text('god of communication', width / 2, height / 2);
	//two particle 2 objects will run and go towards one another, and when the reach their destination, and
	//"recieved" animation will play
	for (var o = 0; o < comms.length; o++) {
		comms[o].check();
		comms[o].run();
	}

	if (space < 900) {
		var newboy = new Particle2(createVector(10, space), createVector(width - 10, space), 0.02, 8);
		var newboy2 = new Particle2(createVector(width - 10, space), createVector(10, space), -0.02, -8);
		comms.push(newboy);
		comms.push(newboy2);
	}
	//	}

	space += 100;
}


//////////////////////////////////////////

function venusmoon() {
	startime();
	push();
	translate(width / 2, 3 * height / 5);
	rotate(moonangle);
	fill(255, 200);
	ellipse(-300, 0, 80, 80);

	pop();
	moonangle += radians(1.2);
}

function branch(l) {
	l *= ((2 / 3));
	strokeWeight(2);
	stroke(0, 100);
	if (l > 5) {
		push();
		rotate(branchr);
		line(0, 0, 0, -l);
		translate(0, -l);
		branch(l);
		pop();

		push();
		rotate(-branchr);
		line(0, 0, 0, -l);
		translate(0, -l)
		branch(l);
		pop();

	}
}

function flowers() {
	var f = new Petal(createVector(0, random(height)));
	petals.push(f);

	for (i = 0; i < petals.length; i++) {
		petals[i].run();
		if (petals[i].dead() === true) {
			petals.splice(i, 1);
		}
	}
}


//////////////////////////////////////////

//ellipse that "pulses" to heartbeat/drumming sound in background
//used analyzer and var amp (assigned in setup) to change size
function shield() {
	amp = analyzer.getLevel();
	shieldsize = base + amp * 10;

	noStroke();
	fill(random(40, r_max), 0, 0, 100);
	ellipse(width / 2, height / 2, shieldsize, shieldsize);

	//the most-red the shield can get decreases over time
	r_max -= 0.5;
	if (base < 280) base += 1;
}

//red black & gray bombs/meteors for Mars, used class and arrays
function bombs() {
	xbomb = random(1, 3);
	ybomb = xbomb * 2;
	bvel = createVector(xbomb, ybomb);
	bomber = new Bomb(random(width), bvel);
	bombarray.push(bomber);
	for (i = 0; i < bombarray.length; i++) {
		bombarray[i].run();
	}
}

function spear(start) {
	strokeWeight(20);
	stroke(90);
	//line(start.x, start.y, start.x + over, start.y + up);
	quad(start.x, start.y, star.x + 10, start.y + 10, start.x + 10 + over, start.y + 10 + up, start.x + over, start.y + up);
	if (start.x + over < width - 100) {
		up -= 2;
		over += 5;
	}
}

//////////////////////////////////////////
//rotated triangles with certain widths, numbers, &  random lengths to represent "shining"/"glowing" for jupiter
//also constantly rotating for added effect
function sunRays(num, wide, long) {
	for (var s = 0; s < num; s++) {
		push();
		translate(width / 2, height / 2);
		rotate(s * (TWO_PI) / num + rayspin);
		fill(200, 120);
		triangle(0, 0, -wide / 2, random(long - 200, long), wide / 2, random(long - 200, long));
		pop();
	}
	rayspin += radians(1);
}

//bad trash
function windParticles(X0, Y0, X, Y) {
	windI = new ParticleFloat(createVector(random(X0, X), random(Y0, Y)));
	windy.push(windI);
	for (var i = 0; i < windy.length; i++) {
		windy[i].run();
	}
}

function windSpin() {
	windR = atan2(width / 2 - mouseY, width / 2 - mouseX);
	push();
	translate(width / 2, height / 2);
	rotate(windR);
	windParticles(0, 0, 0, 100);
	pop();
	//windR += radians(5);
}

//lighting generation using recursion(?) to call function over and over
//will add "branching" based on randomely generated value for further effect
function randombolts(x, y, lenx, leny) {
	var boltX = map(mouseX, 0, width, -70, 70);
	strokeWeight(1.5);
	stroke(255, 230);
	line(x, y, x + lenx, y + leny);
	if ((x + lenx < width) && (x + lenx > 0)) {
		if (mouseX == width / 2) {
			boltX = width / 2 + 3
		}
		randombolts(x + lenx, y + leny, random(0, boltX), random(0, 70));
		//randombolts(x + lenx, y + leny, random(10), random(10));
	}
}

//////////////////////////////////////////

//my asteroid belt, between mars and jupiter
function asteroidbelt() {
	for (i = 0; i < 20; i++) {
		push();
		translate(width / 2, height / 2);
		rotate(astRotation);
		fill(120, 110, 90);
		ellipse(0, 130, 9, 9);
		pop();
		astRotation += radians(360 / 20);
	}
}

//randomely positioned shooting star, look in class for details
function shootingstars() {
	//console.log(pstar.sinvalue);
	pstar.run();

	//if(p.isfinished)
}



//placeholder for animations i haven't done
function nada() {
	background(0);
	fill(255);
	textFont(rfont2, 20);
	text("there's nothing here.", width / 2, height / 2);
}




//////////////////////////////////////////
//UNUSED

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

/*
function messages() {
	for (i = 0; i < msgs.length; i++) {
		msgs[i].run();
	}
}
*/