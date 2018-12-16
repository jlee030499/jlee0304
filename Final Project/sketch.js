var whichStage = 0; 
var myData,myDataL,url,urlL, baseUrl,baseUrlL,apiKey,input,result; 
var myData,urlP,baseUrlP, team,leagueTable,man,ball; 
var something = []; 
var players = [];
var leagues = [];
var team_code =[];
var points = [];
var placed = [];
var team_amount = [];
var myDataT, urlT, baseUrlT;
var team_name, team_logo;
var playerk = [];
var playerage, player_g, playerc, playernu, playerteam, playerna; 

function preload(){
	myFont = loadFont("assets/dope.ttf");
	leagueTable = loadImage("assets/table.png");
	man = loadImage("assets/man.png");
	ball = loadImage("assets/ball.png");
}



function setup(){

	createCanvas(800,900);

	apikey = "5376c43d56d05e57c5c4ffe478b2be44539a605d533e4ac06548d98160658447";
	baseUrl = "https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=";
	baseUrlL = "https://allsportsapi.com/api/football/?&met=Standings&leagueId="; 
	baseUrlT = "https://allsportsapi.com/api/football/?&met=Players&playerId=";

	input = createInput();
	input.position(350,0);
	input.style("width","200px");
	input.style("height","35px");
	input.style("outline-style","dashed");

	inputButton = createButton("Enter");
	inputButton.position(555,0);
	inputButton.mousePressed(printScorers);
	inputButton.style("font-family",myFont);
	inputButton.size(50,42);
}


function draw(){

	if(whichStage == 0){
		titlePage();
	}
	if(whichStage == 1){
		leaguePage();
	}
	if(whichStage == 2){
		goalPage();
	}
	if(whichStage == 3){
		playerPage();
	}
}


function titlePage(){
	background(119, 221, 119);
	if(keyCode == 76){
		whichStage = 1; 
	}
	else if(keyCode == 71){
		whichStage = 2; 
	}

	fill(119, 221, 119);
	strokeWeight(3);
	stroke(0);
	rect(0,0,350,42);
	
	stroke(0);
	strokeWeight(1);
	fill(0);
	textSize(30);
	textFont(myFont);
	text("G&S World Leaders",10,30);

	image(leagueTable, 0, 50, leagueTable.width/4, leagueTable.height/4);

	stroke(0);
	strokeWeight(1);
	fill(0);
	textSize(30); 
	textFont(myFont);
	text("Press G for Top Goal Scorers",25,550);
	text("Press L for the League Table",25,590);
}

function leaguePage(){
	background(255, 105, 97);

	if(keyCode == 66){
		whichStage = 0; 
	}	

	if(keyCode == 71){
		whichStage = 2; 
	}

	fill(255, 105, 97);
	strokeWeight(3);
	stroke(0);
	rect(0,0,350,42);
	
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	textFont(myFont);
	text("G&S World Leaders",10,30);

	for(var v = 0; v < 10; v++){

		fill(255);
		textSize(15);
		text(placed[v], 13, 140+v *55);
		fill(255);
		textSize(30);
		text(leagues[v],33, 140+v*55);
		textSize(30);
		text(points[v],410, 140+v*55);
	}

	fill(255);
	textSize(38);
	strokeWeight(1);
	text("Team",13,85);
	text("Pts",400,85);

	stroke(255);
	strokeWeight(3);
	noFill();
	rect(75,700,650,150);
	strokeWeight(1);

	fill(255);
	text("Press G for goalscorers", 90, 740);
	textSize(23);
	text("or",250,780);
	textSize(34);
	text("Press B to go to main menu",90,820);



}

function goalPage(){
	background(	221, 211, 238); 
	
	if(keyCode == 66){
		whichStage = 0; 
	}

	if(keyCode == 84){
		whichStage = 3;
	}

	if(keyCode == 76){
		whichStage = 1; 
	}

	for(var o = 0; o < 10; o++){

		image(man,o*80,50, man.width/3, man.height/3);


		fill(0);
		textSize(10);
		text(players[o], 13+o*81, 130);
		text(playerk[o], 13+o*81,150);
		
		for(var b = 0; b < something[o]; b++){

			image(ball,15+o*80, (170+b*50), ball.width/25, ball.height/25);
		}
	}

	fill(221, 211, 238);
	strokeWeight(3);
	stroke(0);
	rect(0,0,350,42);
	
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	textFont(myFont);
	text("G&S World Leaders",10,30);

	stroke(255);
	strokeWeight(3);
	noFill();
	rect(75,700,670,150);
	strokeWeight(1);

	fill(255);
	textSize(34);
	text("Use Player Code and Press T", 90, 740);
	textSize(23);
	text("or",300,775);
	textSize(34);
	text("Press L for League Table or B to go back",90,820);
}

function playerPage(){
	if(keyCode == 71){
		whichStage = 2; 
	}

	if(keyCode == 66){
		whichStage = 0; 
	}

	background(174, 198, 207);

	fill(174, 198, 207);
	strokeWeight(3);
	stroke(0);
	rect(0,0,350,42);
	
	stroke(255);
	strokeWeight(1);
	fill(255);
	textSize(30);
	textFont(myFont);
	text("G&S World Leaders",10,30);

	textSize(40);
	text("Player Name:", 20, 100);
	text("Number of Goals:",20 ,340);
	text("Country:", 20,260);
	text("Team Name:",20,420);
	text("Age:",20,180);

	textSize(40);
	fill(255);
	text(playerna,280,100);
	text(playerage, 110,180);
	text(playerc, 200,260);
	text(player_g, 350,340);
	text(playerteam,270,420);

	stroke(255);
	strokeWeight(3);
	noFill();
	rect(75,700,580,150);
	strokeWeight(1);

	fill(255);
	textSize(34);
	text("Press B to go to main menu", 90, 740);
	textSize(23);
	text("or",300,775);
	textSize(34);
	text("Press G to go to goalscorers",90,820);

}

function gotData(myData){ 

	console.log(myData);

	for(var i = 0; i < 10; i++){
		
		something[i] = myData.result[i].goals;
		players[i] = myData.result[i].player_name;
		playerk[i] = myData.result[i].player_key;
	}

}

function gotDatap(myDataL){

	console.log(myDataL);

	for(var h = 0; h < 10; h++){

		leagues[h] = myDataL.result.total[h].standing_team;
		team_code[h] = myDataL.result.total[h].team_key;
		points[h] = myDataL.result.total[h].standing_PTS;
		placed[h] = myDataL.result.total[h].standing_place; 
	}

	console.log(leagues);
	console.log(team_code);
	console.log(points);
	console.log(placed);
}


function gotDataT(myDataT){

	playerage = myDataT.result[0].player_age; 
	player_g = myDataT.result[0].player_goals;
	playerc = myDataT.result[0].player_country; 
	playernu = myDataT.result[0].player_number; 
	playerteam = myDataT.result[0].team_name;
	playerna = myDataT.result[0].player_name;
	

	console.log(playernu);
	

}

function printScorers(){

	var result = input.value();
	console.log(result);
	input.value("");

	url = baseUrl + result + "&APIkey=" + apikey;
	console.log(url);

	myData = loadJSON(url, gotData);

	urlL = baseUrlL + result + "&APIkey=" + apikey; 
	console.log(urlL)

	urlT = baseUrlT + result + "&APIkey=" + apikey; 

	myDataL = loadJSON(urlL, gotDatap);

	myDataT = loadJSON(urlT, gotDataT);

	console.log(urlT);

}



