class PaperBall{

    constructor(x, y, radius) {
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.width, this.height);
        pop();

      }
}