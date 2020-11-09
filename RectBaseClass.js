class Rect{
    constructor(x, y, width, height, angle) {
        //JSON 
        var options = {
            isStatic: true
        }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          push();
          var pos =this.body.position;
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("red");
          rect(pos.x, pos.y, this.width, this.height);
          pop();
        }
  

}
