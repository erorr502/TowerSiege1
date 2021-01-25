const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var polygon;
var slingShot;

function setup() {
  var canvas = createCanvas(1440,825);
  engine  = Engine.create();
  world = engine.world;

  ground = new Ground(720,440,1440,20);
  
  stand1 = new Stand(770,420,480,10);
  stand2 = new Stand(1100,230,320,10);
  
 //set1
  block1 = new Block(600,375,50,50);  
  block2 = new Block(650,375,50,50);
  block3 = new Block(700,375,50,50);
  block4 = new Block(750,375,50,50);
  block5 = new Block(800,375,50,50);
  block6 = new Block(850,375,50,50);
  block7 = new Block(900,375,50,50);
  block8 = new Block(950,375,50,50);

  block9 = new Block(650,325,50,50);
  block10 = new Block(700,325,50,50);
  block11 = new Block(750,325,50,50);
  block12 = new Block(800,325,50,50);
  block13 = new Block(850,325,50,50);
  block14 = new Block(900,325,50,50);

  block15 = new Block(700,265,50,50);
  block16 = new Block(750,265,50,50);
  block17 = new Block(800,265,50,50);
  block18 = new Block(850,265,50,50);

  block19 = new Block(750,215,50,50);
  block20 = new Block(800,215,50,50);

  block21 = new Block(775,165,50,50);
//set2
  blocks1 = new Block(1000,185,50,50);
  blocks2 = new Block(1050,185,50,50);
  blocks3 = new Block(1100,185,50,50);
  blocks4 = new Block(1150,185,50,50);
  blocks5 = new Block(1200,185,50,50);

  blocks6 = new Block(1050,135,50,50);
  blocks7 = new Block(1100,135,50,50);
  blocks8 = new Block(1150,135,50,50);

  blocks9 = new Block(1100,75,50,50);

  polygon = new Polygon(50,200,70,70);

  slingShot = new SlingShot(polygon.body,{x:250,y:250});

}

function draw() {
  

    
 background(60,46,46)
 Engine.update(engine);
 
  
  ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("orange")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("violet")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();

  stroke(15)
  fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("yellow")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("pink")
  blocks9.display();
 
  slingShot.display();
  polygon.display();
  stroke(255,255,255)
  fill(60,46,46);
  strokeWeight(10);
  textSize(70);
  text("RULES",645,530);
  strokeWeight(5);
  textSize(40);
  text("1. Drag and Release the 'Polygon' towards the blocks and watch them falling.",10,600);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
//changed