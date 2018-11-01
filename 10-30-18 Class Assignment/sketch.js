var myB;
var myB2;

function setup() {

	createCanvas(500,500);

	var myColor = color(233,200,10);
	var myColor2 = color(20, 200, 240);

	myB= new Shape(250, 100, 2, 3, 30, myColor);

	myB2 = new Shape (50, 300, 3, 1, 50, myColor2);

}

function draw() {

	background(212,21,12);

	myB.animate();
	myB.displayShape();

	myB2.animate();
	myB2.displayShape();
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

			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r, this.g, this.b);
		}
		if(this.y <= 0 || this.y >= height){
			this.yVel *= -1;

			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.size += 10;

		

			this.color = color(this.r, this.g, this.b);
		}
	}


	this.displayShape = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}
}
