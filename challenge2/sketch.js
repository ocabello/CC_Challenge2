var webtext;

var first, last;

var delimiters = "?,. \':;";

var parsed;
var counter = 0;
var x;
var y;

function preload(){
  webtext = loadStrings("data/trumpspeech.txt");
  
}


function setup() {
  createCanvas(500, 500);
    background(255);
  noLoop();
  loadContent();

}

function draw() {
  
  for (var i=0; i<parsed.length; i++){
    //console.log(parsed[i]);
    if (parsed[i] == "immigration"){
      
      //console.log(parsed[i]);
      counter++;
      //console.log(counter);
      fill(0);
      textSize(100);
      text(parsed[i], 200, 200)
      /*text(parsed[i],x,y);
     // y+=50;
      x = x + 50;
      
      if (x > width){
        x = 0;
        y = y + 50;
      }
      
      if (y > height){
        x = 0;
      } */
      
    }
  }
}

function loadContent(){
  var stringarray = join(webtext, "");
  //console.log(stringarray);
  
  first = stringarray.indexOf("Wow.");
  
  last = stringarray.lastIndexOf("important.");
  
  speech = stringarray.substring(first, last);
  parsed = speech.toLowerCase();
  //console.log(parsed);
  
  parsed = splitTokens(speech, delimiters);


}