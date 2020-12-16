
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine, ground, poly, ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var gameState="onSling";

function setup() {
	createCanvas(1100, 550);
	engine=Engine.create();
	world=engine.world;
  poly=new Polygon(150, 250, 25);
  sling=new SlingShot(poly.body, {x:150, y:250});
  ground1=new Ground(400, 450, 300, 20);
  ground2=new Ground(800, 450, 300, 20);
  box1=new Box(300, 400, "blue");
  box2=new Box(350, 400, "blue");
  box3=new Box(400, 400, "blue");
  box4=new Box(450, 400, "blue");
  box5=new Box(500, 400, "blue");
  box6=new Box(325, 350, "green");
  box7=new Box(375, 350, "green");
  box8=new Box(425, 350, "green");
  box9=new Box(475, 350, "green");
  box10=new Box(350, 300, "purple");
  box11=new Box(400, 300, "purple");
  box12=new Box(450, 300, "purple");
  box13=new Box(375, 250, "yellow");
  box14=new Box(425, 250, "yellow");
  box15=new Box(400, 200, "red");
  block1=new Box(700, 400, "lightblue");
  block2=new Box(750, 400, "lightblue");
  block3=new Box(800, 400, "lightblue");
  block4=new Box(850, 400, "lightblue");
  block5=new Box(900, 400, "lightblue");
  block6=new Box(750, 350, "pink");
  block7=new Box(800, 350, "pink");
  block8=new Box(850, 350, "pink");
  block9=new Box(800, 300, "orange");
}

function draw() {
  Engine.update(engine);
  background("black");
  poly.display();
  sling.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
}

function mouseDragged(){
  if(gameState==="onSling"){
  Matter.Body.setPosition(poly.body, {x:mouseX, y:mouseY}); 
  }
}
function mouseReleased(){
  sling.fly();
  gameState="launched";
}

function keyPressed(){
  if(keyCode===32){
    sling.attach(poly.body);
    Matter.Body.setPosition(poly.body, {x: 150, y:250});
    gameState="onSling";
  }
}
