var myB;
var myB2;
var mySound1;
var mySound2; 
var mySound3; 

function preload(){

	mySound1 = loadSound("assets/17872.mp3");
	mySound2 = loadSound("assets/XylophoneGAR_7600-000.wav");
	mySound3 = loadSound("assets/XylophoneGAR_10000-000.wav");

}

function setup() {

	createCanvas(500,500);

	var myColor = color(233,200,10);
	var myColor2 = color(20, 200, 240);


	myB = new Shape(250, 100, 2, 3, 30, myColor);

	myB2 = new Shape (50, 300, 3, 1, 50, myColor2);

	mySound3.loop(5);

	sliderRate = createSlider(0,3,1,.01);


}

function draw() {

	background(212,212,12);

	myB.animate();
	myB.displayShape();

	myB2.animate();
	myB2.displayShape();

	mySound3.rate(sliderRate.value());

}


function Shape(xVal, yVal, velXVal, velYVal, size, thisColor){

	this.x = xVal;
	this.y = yVal;

	this.xVel = velXVal;
	this.yVel = velYVal;

	this.size = size;
	this.sizeStep = 2; 

	this.color = thisColor;


	this.animate = function(){

		this.x += this.xVel;
		this.y += this.yVel;

		if(this.x <= 0 || this.x >= width){
			this.xVel *= -1;

			mySound1.play();

			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r, this.g, this.b);
		}
		if(this.y <= 0 || this.y >= height){
			this.yVel *= -1;

			mySound2.play();

			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);		

			this.color = color(this.r, this.g, this.b);
		}
	}



	this.displayShape = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}
}

function mouseIsPressed(){
	var d = dist(mouseX, mouseY, this.x, this.y);
	if (d < 100){
		background(0);
	}
}
