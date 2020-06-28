const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
  var plinkos = [];
  var divisions = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,480,20);
  for(var i = 0;i<=480;i += 80){
    divisions.push(new Ground(i,650,10,300));
  }
  for(var p = 50;p <= 470;p+=50){
    plinkos.push(new Plinko(p,100));
  }
  for(var p = 40;p <= 470;p+=50){
    plinkos.push(new Plinko(p,150));
  }
  for(var p = 30;p <= 470;p+=50){
    plinkos.push(new Plinko(p,200));
  }
  for(var p = 20;p <= 470;p+=50){
    plinkos.push(new Plinko(p,250));
  }
  for(var p = 10;p <= 470;p+=50){
    plinkos.push(new Plinko(p,300));
  }
  for(var p = 25;p <= 470;p+=50){
    plinkos.push(new Plinko(p,350));
  }
  for(var p = 35;p <= 470;p+=50){
    plinkos.push(new Plinko(p,400));
  }
  for(var p = 5;p <= 470;p+=50){
    plinkos.push(new Plinko(p,450));
  }
}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  if(frameCount%60===0){
    particles.push(new Particle(random(50,450),10));
  }
  for(var i  = 0;i < particles.length;i++){
    particles[i].display();
  }
  for(var i  = 0;i < divisions.length;i++){
    divisions[i].display();
  }
  for(var i  = 0;i < plinkos.length;i++){
    plinkos[i].display();
  }
  ground.display();
  drawSprites();
}
