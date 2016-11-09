var webtext;

var first, last;

var tokens = "?,. \':;";

var parsed;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;

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
    if (parsed[i] == "immigrants") {

      //console.log(parsed[i]);
      counter1++;
      //console.log(counter1);
      var shape = new Visual(random(0,width), random(0,height));
      shape.show(color(0), random(0,6));

      //fill(0);
      //wordFormat(parsed[i], counter1);
    }
    
    if (parsed[i] == "illegal"){
      counter2++;
      //console.log(counter2);
      fill(255, 255, 0);
      wordFormat(parsed[i], counter2*2);
    }
    
    if (parsed[i] == "violence"){
      console.log(parsed[i]);
      counter3++;
      //console.log(counter3);
      fill (253, 0, 0);
      wordFormat(parsed[i], counter3*2);
    }
    
    if (parsed[i] == "america"){
      counter4++;
      //console.log(counter4);
      fill (10, 50, 80);
      wordFormat(parsed[i], counter4*2);
    }
    
    if (parsed[i] == "order"){
      counter5++;
      //console.log(counter5);
      fill (100, 200, 100);
      wordFormat(parsed[i], counter5*2);
    }
    
  }
}

function loadContent() {
  var stringarray = join(webtext, "");
  //console.log(stringarray);

  first = stringarray.indexOf("Friends");

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