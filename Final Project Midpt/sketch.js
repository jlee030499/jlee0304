var myData;
var url;
var baseUrl;
var apiKey;
var input; 
var result; 

function setup(){


	background(0);
	createCanvas(100,100);

	baseUrl = "https://allsportsapi.com/api/football/?&met=Topscorers&leagueId="
	apikey = "5376c43d56d05e57c5c4ffe478b2be44539a605d533e4ac06548d98160658447";

	input = createInput("Enter an number code to search");
	input.position(50,200);
	input.style("width","150px");

	inputButton = createButton("Enter");
	inputButton.position(220,200);
	inputButton.mousePressed(printScorers);

}

function draw(){
}

function gotData(myData){ 
	
	console.log(myData);
}



function printScorers(){

	var result = input.value();
	console.log(result);
	input.value("");

	url = baseUrl + result + "&APIkey=" + apikey;
	console.log(url);

	myData = loadJSON(url, gotData);
	console.log(myData); 

	var scorer = myData.result
	console.log(scorer);
}