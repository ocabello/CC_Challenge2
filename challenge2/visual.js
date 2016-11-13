function Visual(locX, locY){   //visual class to create random sized shapes
  this.x = locX;
  this.y = locY;
  
  this.show = function(c, vtxnum){     //takes vertex number and color as parameters
    stroke(4);
    fill(c)
    beginShape();
    for (var i = 0; i< vtxnum; i++){
    vertex(this.x, this.y);
    this.x += random(20,100);       //random position of vertices
    this.y += random(20,80);
    }
    endShape(CLOSE);               //connects all vertices
  }
  

}