
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 


var roof;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope;
var rope1;
var rope2;
var rope3;
var rope4;



function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  roof = new Roof(400,200,300,20);
  

    bob1=new Bob(300,350,50);
    bob2=new Bob(350,350,50);
    bob3=new Bob(400,350,50);
    bob4=new Bob(450,350,50);
    bob5=new Bob(500,350,50);

  rope= new Rope(bob1.body,roof.body,-50*2,0);
  rope1= new Rope(bob2.body,roof.body,-25*2,0);
  rope2 = new Rope(bob3.body,roof.body,-0*2,0);
  rope3 = new Rope(bob4.body,roof.body,25*2,0);
  rope4= new Rope(bob5.body,roof.body,50*2,0);

	
}


function draw() {
  rectMode(CENTER);
  background(233,231,233);
  
  drawSprites();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
  
  
  
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 



