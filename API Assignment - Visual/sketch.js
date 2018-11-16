var myData; 
var places = [];
var baseUrl; 
var apikey; 
var query; 
var map; 
var baseUrl = "https://developers.zomato.com/api/v2.1/search?";
var apiKey = "59b21c63fb81b76a49f1da661b57d4a3"; 
var search = "Shake%20Shack";


function preload(){

	map = loadImage("assets/maps.jpg") 
}

function setup(){

	createCanvas(1000,1000);

	var url = baseUrl + "q=" + search + "&apikey=" + apiKey; 
	
	console.log(url);

	myData = loadJSON(url,gotData);


}

function draw(){

	image(map,0,0);

}



function gotData(myData){
	console.log(myData);


	for(var i = 0; i < myData.restaurants.length; i++){
		var lat = myData.restaurants[i].restaurant.location.latitude;
		var long = myData.restaurants[i].restaurant.location.longitude; 
		var rest = new Restaurant(lat,long);

		places.push(rest);
	}

	console.log(places);

	for(var i = 0; i < places.length; i++){
		console.log(places[i]);
	}


}

function Restaurant(lat,long){

	this.display= function(){
		ellipse(this.lat, this.long, 20,20);
	}
}
