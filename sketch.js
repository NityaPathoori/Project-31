const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;
var engine, world;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground1 = new Ground(240,780,480,20);

  for(var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j<=width; j=j+50)
  {
    plinko.push(new Plinko(j,75,10));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width-20; j=j+50)
  {
    plinko.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-30; j=j+50)
  {
    plinko.push(new Plinko(j,375));
  }

 



}

function draw() {
  background(0);  
  Engine.update(engine);
  if(frameCount%60===0) {
    particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var k = 0; k <division.length; k++) {
    division [k].display();
  }
 
  for(var i = 0; i <particle.length; i++) {
    particle[i].display();
  }

  for (var j = 0; j<plinko.length; j++)
  {
    plinko[j].display();
  }


  drawSprites();
}

