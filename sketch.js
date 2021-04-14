const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, box;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  stat = {
    isStatic : true
  }

  box = Bodies.rectangle(400,200,50,50,stat);
  World.add(myWorld, box);
  console.log(box);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  rectMode(CENTER); 
  rect(box.position.x,box.position.y,100,100)
}