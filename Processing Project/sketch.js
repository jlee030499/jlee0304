function setup() {
createCanvas(1000,1000);
background(0,0,255);

}

function draw (){

//top left	
for(var i = 0; i < 10; i++) {

		var green = map(i, 0, 10, 255,150); 
		var red = map(i, 0, 4, 255,150)
		
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(1, height/2);
		rotate(2*PI * i / 8);
		ellipse(100, 0,40, 30);
		
		pop();
	
}
	//middle left
	
for(var j = 0; j < 10; j++){
		
		push();
		translate(1,150);
		fill(255,160,0);
		strokeWeight(4);
		rotate(2*PI * j / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	//left bottom
for(var k = 0; k < 10; k++){
		
		push();
		fill(255,165,0);
		strokeWeight(4);
		translate(1,850);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	
	//left middle bottom
for(var k = 0; k < 10; k++){
		
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(width/3,850);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	//left middle middle
	for(var k = 0; k < 10; k++){
		
		push();
		fill(255,165,0);
		strokeWeight(4);
		translate(width/3,height/2);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	//left middle top
	for(var k = 0; k < 10; k++){
		
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(width/3,150);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	// right middle top 
		for(var k = 0; k < 10; k++){
		
		push();
		fill(255,165,0);
		strokeWeight(4);
		translate(2*width/3,150);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	//right middle middle
		for(var k = 0; k < 10; k++){
		
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(2*width/3,height/2);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	
			for(var k = 0; k < 10; k++){
		//right middle bottom
		push();
		fill(255,165,0);
		strokeWeight(4);
		translate(2*width/3,850);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	
	//right top 
				for(var k = 0; k < 10; k++){
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(width,150);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	
	//right middle
	
	
		for(var k = 0; k < 10; k++){
		push();
		fill(255,165,0);
		strokeWeight(4);
		translate(width,height/2);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	
		//right bottom
		for(var k = 0; k < 10; k++){
		push();
		fill(red,green,0);
		strokeWeight(4);
		translate(width,850);
		rotate(2*PI * k / 8);
		ellipse(100, 0,40, 30);
		pop();
}
	




}