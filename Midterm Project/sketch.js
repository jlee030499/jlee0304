var whichStage = 0; 
var click = false; 
var myImage;
var myFont;
var myEat;
var mySave;
var myCore; 
var myAppleLogo;
var myHalf; 
var imageState = 0;
var myApple2;
var inputString = "";
var start = false;
var tiny;
var slice; 
var someString = ""
var sad; 
var anotherString = ""
var rotten;

function preload(){
	myImage = loadImage("assets/niced.jpg");
	myFont = loadFont("assets/CaviarDreams.ttf");
	myEat = loadImage("assets/eat.jpg");
	mySave = loadImage("assets/save2.jpg");
	myCore = loadImage("assets/core.jpg");
	myHalf = loadImage("assets/bitesize.jpg");
	myAppleLogo = loadImage("assets/applelogo.jpg");
	myApple2 = loadImage("assets/appleface2.jpg");
	tiny = loadImage("assets/tiny.jpg");
	slice = loadImage("assets/slice.jpg");
	sad = loadImage("assets/sad.jpg");
	rotten = loadImage("assets/rotten.jpg");
}

function setup() {
createCanvas(700,700);
background(0);
textFont(myFont);
x = 0;
y = height/2;
}

function draw() {
	if(whichStage == 0){
		stageZero();
	}else if(whichStage == 1){
		stageOne();
	}else if(whichStage == 2){
		stageTwo();
	}else if(whichStage == 3){
		stageThree();
	}else if(whichStage == 4){
		stageFour();
	}else if(whichStage == 5){
		stageFive();
	}else if(whichStage == 6){
		stageSix();
	}else if(whichStage == 7){
		stageSeven();
	}else if(whichStage == 8){
		stageEight();
	}else if(whichStage == 9){
		stageNine();
	}else if(whichStage == 10){
		stageTen();
	}else if(whichStage == 11){
		stageEleven();
	}else if(whichStage == 12){
		stageTwelve();
	}else if(whichStage == 13){
		stageThirteen();
	}
}

function stageZero(){ //Intro of the whole Narrative
	background(255,236,217);

	fill(255,0,0);
	textSize(40);
	text("Apples are great!", 175 , 150);
	textSize(15);
	text("Press space to continue to the ultimate apple story", 160, 250);
	textSize(10);
	text("Rememeber: 'An apple a day, keeps the doctor away!", 200, 350); 
	image(myImage, 230, 420);

	if(keyCode == 32){
		whichStage++; 
	}
}
	
function stageOne(){ //Given the choice between Eat/Saving

	background(255,236,217);
	textSize(40); 
	text("Choose one of the 2 Options", 80,100);
	textSize(25);
	text("Eat the Apple",120,200);
	textSize(25);
	text("Save the Apple", 400,200);
	textSize(20);
	text("Press S", 450,500);
	textSize(20);
	text("Press E", 160,500);

	image(myEat, 100, 230);
	image(mySave, 380,230);

	if(keyCode == 69){
		whichStage++;
	} else if (keyCode == 83){
		whichStage = 3; 
	}
}

function stageTwo(){ // Choice 1- Eat/ Scenario where the apple is just eaten and that is it.

	background(255,236,217);
	fill(255,0,0);
	textSize(30);
	text("Congratulations, you ate an apple!",100,100);
	textSize(20);
	text("Remember: Apples are good for you!", 170,200);
	fill(0);
	text("Please left click to return to the beginning!", 170,650);
	drawSprite();

	if(mouseIsPressed){
		whichStage = 0; 
	}
}

function stageThree(){ //Continuation of Choice 1 --> Bite taken out of the apple 
	background(255,236,217);
	fill(255,0,0);
	text("Now you must protect your apple",200,200);
	textSize(20);
	text("Press Y to accept your task", 230, 300);
	if(keyCode == 89){
		whichStage++; 		
	}
}

function stageFour(){ //Conitnuation of Choice 1 --> Apple is half eaten
	background(255,236,217);
	fill(255,0,0);
	textSize(20);
	text("YOUR APPLE HAS ROLLED AWAY!!!",200,150);
	textSize(20);
	text("type 'comeback' for the apple to come back",150,200);

	textSize(15);
	text(inputString, 280,245);


	if(inputString == "comeback"){
		image(myImage, 250, 270);
		textSize(30);
		text("Look! Your apple came back!", 150,530);
		textSize(20);
		text("Press the right arrow key to continue -->",180, 580);
	}

	if(keyCode == RIGHT_ARROW){
		whichStage ++; 
	}
}

function stageFive(){

	background (255,236,217);

	textSize(20);
	text("Your apple is hiding, please find it", 200,650);
	text("hi", 250,240);

	for(var j = 0; j < 10; j++){

		var y = (60* j) + 50;

		for(var i = 0; i < 10; i++){

			var x = (70*i) + 50

			ellipse(x, y, 20, 20);
		} 
		// Referenced from previous lecture
	}
}

function stageSix(){
	background(0);


}

function stageSeven(){
	background(255,236,217);
	fill(255,0,0);
	textSize(20);
	text("Great job finding your apple!", 200,100);
	text("Now you have save your apple from being sliced!", 130,200);
	
	fill(255,0,0);
	ellipse(x,y, 30,30);
	
	x = x + 2;
	fill(0);
	textSize(30);
	text("Type 'stop'",280, 400);

	fill(255,0,0);
	textSize(15);
	text(someString, 280,245);
	if(someString == "stop"){
		whichStage = 9; 
	}

	if(x > 520){
		whichStage = 8;
	} 

	push();
  	translate(2.5*width/3, height*0.5);
  	rotate(frameCount *100);
  	stroke(0);
  	strokeWeight(5);
  	triangle(4,15 ,56, 4, 1, 15); 
  	pop();

}

function stageEight(){
	background(255,236,217);
	image(slice, 200, 200);
	fill(255,0,0);
	textSize(30);
	text("Sliced perfect to eat!", 200, 160);
	textSize(30);
	text("Press enter to restart",200,600);


	if(keyCode === ENTER){
		whichStage = 0;
	}

}

function stageNine(){
	background(255,236,217);

	image(sad, 200,200);
	textSize(30);
	text("Way to save your apple!", 180, 100);
	text("Your apple is scared now", 180,160);
	textSize(20);
	text("Type 'peace' to reassure it", 200,530);
	fill(0);
	text(anotherString, 200, 500);
	
	if(anotherString == "peace"){
		textSize(20);
		image(myApple2,200,200); 
		text("Your apple is happy again!",200,600);
		text("Press the right arrow to continue", 200,650);
	}

	if(keyCode == RIGHT_ARROW){
		whichStage = 10;
	}
}

function stageTen(){
	background(255,236,217);

	fill(255,0,0);
	text("however....", 200, 200); 
	text("You took such great care", 200,300);
	text("That, this happened...",200,400);
	text("Press d to see what happened", 200,500);

	if(keyCode == 68){
		whichStage ++;
	}
}

function stageEleven(){
	background(255,236,217);
	image(rotten,200,200);
	text("All that work for a rotten apple", 200,150);
	text("I appreciate it", 280, 180);
	text("Somethings in life, you shouldn't invest your time in", 130,550);
	text("Press r to go to the beginning",200,600);

	if(keyCode == 82){
		whichStage = 0; 
	}
}

function stageTwelve(){
	background(255,236,217); 


}

function drawSprite(){

	var count = frameCount % 30;
	if (count == 0){ 
		imageState ++;
		if(imageState > 3){
			imageState = 0; 
		}
	}

	
	switch(imageState){
		case 0:
			image(myApple2, 210,230);
			break;
		case 1:
			image(myAppleLogo,210,230);
			break;
		case 2:
			image(myHalf,210,230);
			break;
		case 3:
			image(myCore,210,230);
			break;
		default:
			break;
	}
}

function keyPressed(){

	if(whichStage == 4){
		inputString +=key; 
		console.log(inputString);	
	}

	if(whichStage == 7){
		someString += key; 
		console.log(someString);
	}

	if(whichStage == 9){
		anotherString += key; 
		console.log(anotherString);
	}
}
	
function mousePressed(){
	if(whichStage == 5){
		 var d = dist(mouseX, mouseY, 250,240);
		 if (d < 30) {
		 	whichStage  = 7; 
  		} 
  	} 
} //reference from p5.js websitereferences 