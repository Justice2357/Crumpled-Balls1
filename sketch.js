var ground, dbside1, dbside2,dbside3, ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1535, 710);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(380.5,335,1535,20);
    dbside1 = new Dustbin(605,325,200,20);
    dbside2 = new Dustbin(650,300,20,100);
    dbside3 = new Dustbin(560,300,20,100);
    ball = new PaperBall(200,300, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display();

  dbside2.display();
  dbside3.display();
  dbside1.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.position,{x:85, y:-105});

  }

}