class Rope {

    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX = offsetX;
      this.offsetY = offsetY ; 
      
        var options = {
        bodyA:body1,
        bodyB:body2 ,
        pointB:{x:this.offsetX, y:this.offsetY} ,
       }

       this.Rope = Constraint.create(options);
       World.add(world,this.Rope);

    }

    display () {

        var posX= this.Rope.bodyA.position;
        var posY= this.Rope.bodyB.position;

        
        strokeWeight (1)
        //var posX = pointA.x
        //var posY = pointA.y
        
        var pos2X = pointB.x+this.offsetX
        var pos2Y = pointB.y+this.offsetY
        
        line (posX,posY,pos2X,pos2Y);
        

    }
}