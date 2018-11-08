var myData;
var offset;
var scaleData;

function preload(){

	myData = loadJSON("assets/us_cities.json");
}

function setup(){

	createCanvas(1000,1000);

	offset = 100;
	scaleData = 1;

	console.log(myData);

	console.log(myData.cities.length);

	textSize(14);

	for(var i = 0; i < myData.cities.length; i++){
		console.log(myData.cities[i].city);
	}
}

function draw(){

	background(255);

	push();

	translate(100,100); 

	for(var i = 0; i < myData.cities.length; i++){

		var myCity = myData.cities[i].city;
		var myPop = myData.cities[i].population;
		var myState = myData.cities[i].state;

		fill(0);
		rect(i * offset, 0, 50, myPop * scaleData);
		// I am having a hard time dealing with the size of the population because it cant fit in the a screen

		text(myCity, i * offset, -60, 80, 40);
		text(myState, i *offset, -20, 80,40);


	
	}

	pop();
}