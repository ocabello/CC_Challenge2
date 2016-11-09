function Visual(locX, locY){
  this.x = locX;
  this.y = locY;
  
  this.show = function(c, vtxnum){
    stroke(4);
    fill(c)
    beginShape();
    for (var i = 0; i< vtxnum; i++){
    vertex(this.x, this.y);
    this.x += random(0,20);
    this.y += random(0,50);
    }
    endShape(CLOSE);
  }
}