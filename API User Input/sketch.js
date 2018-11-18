var myData;
var url;
var baseUrl;
var apiKey;
var input; 
var result; 

function setup() {
	background(0);
	createCanvas(100,100);

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	apiKey = "5dc45f3f38434338be3f162f9cfc06fa";

	input = createInput("Enter an article to search");
    input.position(50, 200);
    input.style('width', '150px');
    
    inputButton = createButton("Enter");
    inputButton.position(220,200);
    inputButton.mousePressed(printArticle);

}

function draw() {

}

function gotData(myData){ 
	
	console.log(myData);

	var headline = myData.response.docs[2].headline.print_headline;
	console.log(headline);
}



function printArticle(){

	var result = input.value(); 
	console.log(result);
	input.value("");
	
	url = baseUrl + "q=" + result + "&api-key=" + apiKey; 
	console.log(url);
	print(myData);

	myData = loadJSON(url, gotData);
	console.log(myData);

}