const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ball;
var object;
var box1;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var options={
   isStatic: true
  }
  object=Bodies.rectangle(200,380,400,50,options);
World.add(myworld,object);
console.log(object.position.x)
var boptions={
  restitution:1
}
ball = Bodies.circle(100,100,20,boptions);
World.add(myworld,ball)

box1=new Box(300,300,60,60);
box2=new Box(280,100,60,100);



}

function draw() {
  background(0);  
  Engine.update(myengine)
  rectMode(CENTER);
  fill("brown");
  rect(object.position.x,object.position.y,400,50);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);

box1.display()
box2.display()




}

