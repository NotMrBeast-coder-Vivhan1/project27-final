const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	
	roof1=new Roof(400,50,700,50)
	
	bob1=new Bob(400,100)
	chain1 = new Chain(bob1.bob,{x:400,y:50})

	bob2=new Bob(350,100)
	chain2 = new Chain(bob2.bob,{x:350,y:50})

	bob3=new Bob(300,100)
	chain3= new Chain(bob3.bob,{x:300,y:50})
	
	bob4=new Bob(450,100)
	chain4 = new Chain(bob4.bob,{x:450,y:50})

	bob5=new Bob(500,100)
	chain5 = new Chain(bob5.bob,{x:500,y:50})

	bob6=new Bob(550,100)
	chain6= new Chain(bob6.bob,{x:550,y:50})
	
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  roof1.display()
  chain1.display()
  bob1.display()
  chain2.display()
  bob2.display()
  chain3.display()
  bob3.display()
  chain4.display()
  bob4.display()
  chain5.display()
  bob5.display()
  chain6.display()
  bob6.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Body.applyForce(bob3.bob,bob3.bob.position,{x:-85,y:-85})
	}
}




