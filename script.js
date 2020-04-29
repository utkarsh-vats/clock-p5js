


var wid = window.innerWidth;
var hig = window.innerHeight;
var h = hig * 2/3;

function setup() {
	createCanvas(wid, hig);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(wid/2, hig/2);
	rotate(-90);

	let hr = hour();
	let min = minute();
	let sec = second();

	strokeWeight(4);
	noFill();
	stroke(255);
	ellipse(0, 0, h, h);

	stroke(152,24,214);
	strokeWeight(8);
	noFill();
	let end1 = map(sec, 0, 60, 0, 360);
	arc(0, 0, h-25, h-25, 0, end1);

	push();
	rotate(end1);
	stroke(255);
	line(0, 0, h/3, 0);
	pop();

	stroke(255, 103, 125);
	strokeWeight(8);
	noFill();
	let end2 = map(min, 0, 60, 0, 360);
	arc(0, 0, h-50, h-50, 0, end2);

	stroke(255, 164, 27);
	strokeWeight(8);
	noFill();
	let end3 = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, h-75, h-75, 0, end3);

	// fill(255, 255, 255);
	// noStroke();
	// text(hr + ':' + min + ':' + sec, 10, 200);
	// console.log(sec);
}