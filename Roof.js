class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.roof = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.roof);
    }
    display(){
      var pos =this.roof.position;
      rectMode(CENTER);
      fill(131,130,131);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }