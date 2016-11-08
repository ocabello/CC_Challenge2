var webtext;

var first, last;

var tokens = "?,. \':;";

var parsed;
var counter = 0;
var x = 0;
var y = 0;

function preload() {
  webtext = loadStrings("data/trumpspeech.txt");

}


function setup() {
  createCanvas(500, 500);
  background(255, 204, 153);
  noLoop();
  loadContent();

}

function draw() {

  for (var i = 0; i < parsed.length; i++) {
    //console.log(parsed[i]);
    if (parsed[i] == "immigration") {

      //console.log(parsed[i]);
      counter++;
      //console.log(counter);
      fill(0);
      wordFormat(parsed[i], counter);
    }
    
    if (parsed[i] == "illegal"){
      counter++;
      fill(255, 255, 0);
      wordFormat(parsed[i], counter);
    }
    
    if (parsed[i] == "murder"){
      counter++;
      fill (253, 0, 0);
      wordFormat(parsed[i], counter);
    }
    
    if (parsed[i] == "refugees"){
      counter++;
      fill (10, 50, 80);
      wordFormat(parsed[i], counter);
    }
    
    if (parsed[i] == "safety"){
      counter++;
      fill (100, 200, 100);
      wordFormat(parsed[i], counter);
    }
    
  }
}

function loadContent() {
  var stringarray = join(webtext, "");
  //console.log(stringarray);

  first = stringarray.indexOf("Wow.");

  last = stringarray.lastIndexOf("important.");

  speech = stringarray.substring(first, last);
  parsed = speech.toLowerCase();
  //console.log(parsed);

  parsed = splitTokens(speech, tokens);


}

function wordFormat(word, size) {
  var wordSize = size;
  var word = word;

  textSize(wordSize);
  text(word, x, y);

  y = random(0, 500);
  x = random(0, 500);

  if (x > width) {
    x = 0;
    y = y + 20;
  }

  if (y > height) {
    x = 0;
  }
}