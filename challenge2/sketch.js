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

value = 0;

function preload() {
  webtext = loadStrings("data/trumpspeech.txt");

}


function setup() {
  createCanvas(500, 500);
  background(255, 204, 153);
  //noLoop();
  loadContent();

}

function draw() {

  background(255, 204, 153);


  generateWords();

  if (keyIsPressed) {  //shapes are generated if m key is pressed
    if (key == 'm') {
      generateShapes();
    }
  }

}

function loadContent() {                       //loads and parses data from speech
  var stringarray = join(webtext, "");
  //console.log(stringarray);

  first = stringarray.indexOf("Friends");

  last = stringarray.lastIndexOf("important.");

  speech = stringarray.substring(first, last);
  parsed = speech.toLowerCase();
  //console.log(parsed);

  parsed = splitTokens(speech, tokens);


}

function wordFormat(word, size) {  //adjust word size and position in canvas
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

function generateWords() {
  // noLoop();
  frameRate(0.5);                          //decreased frameRate to make words seem like they're slowly multiplying
  for (var i = 0; i < parsed.length; i++) {  //
    //console.log(parsed[i]);
    if (parsed[i] == "immigrants") {
      //console.log(parsed[i]);
      counter1++;
      //console.log(counter1);
      fill(0);
      wordFormat(parsed[i], counter1);     //words adopt size of counter (the more frequent the word, the bigger it is)

    }

    if (parsed[i] == "illegal") {
      counter2++;
      //console.log(counter2);

      fill(255, 255, 0);
      wordFormat(parsed[i], counter2 * 2);
    }

    if (parsed[i] == "violence") {
      // console.log(parsed[i]);
      counter3++;
      //console.log(counter3);

      fill(253, 0, 0);
      wordFormat(parsed[i], counter3 * 2);
    }

    if (parsed[i] == "america") {
      counter4++;
      //console.log(counter4);

      fill(10, 50, 80);
      wordFormat(parsed[i], counter4 * 2);

    }

    if (parsed[i] == "order") {
      counter5++;
      //console.log(counter5);

      fill(100, 200, 100);
      wordFormat(parsed[i], counter5 * 2);

    }

  }
}

function generateShapes() {         //generates random shapes taken from the visual class
  //loop();
  frameRate(5);                     //increased frameRate to create feeling of being overwhelmed

  for (var i = 0; i < parsed.length; i++) {
    if (parsed[i] == "immigrants") {                                  //shape color matches corresponding shape color
      var shape1 = new Visual(random(0, width), random(0, height));   //in order to make the connection between both
      shape1.show(color(0), random(0, 6));
    }

    if (parsed[i] == "illegal") {
      var shape2 = new Visual(random(0, width), random(height));
      shape2.show(color(255, 255, 0), random(0, 6));
    }

    if (parsed[i] == "violence") {
      var shape3 = new Visual(random(0, width), random(0, height));
      shape3.show(color(253, 0, 0), random(0, 6));
    }

    if (parsed[i] == "america") {
      var shape4 = new Visual(random(0, width), random(0, height));
      shape4.show(color(10, 50, 80), random(0, 6));
    }

    if (parsed[i] == "order") {
      var shape5 = new Visual(random(0, width), random(0, height));
      shape5.show(color(100, 200, 100), random(0, 6));
    }
  }
}