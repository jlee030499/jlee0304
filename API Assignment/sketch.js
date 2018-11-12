var myData; 

var baseUrl; 
var apikey; 

var query; 

function setup(){
	baseUrl = "https://developers.zomato.com/api/v2.1/search?";
	apiKey = "59b21c63fb81b76a49f1da661b57d4a3"; 

	search = "Shake%20Shack";
	country = "USA";

	url = baseUrl + "q=" + search + "&apikey=" + apiKey; 

	console.log(url);

}

function draw(){

}

function gotData(myData){
	console.log(myData);

	var headline = myData.response.docs[1].headline.print_headline;
	console.log(headline);
}

function mouseClicked(){

	myData = loadJSON(url, gotData); 

}