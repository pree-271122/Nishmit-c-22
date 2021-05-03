const Engine = Matter.Engine;
const World = Matter . World;
const Bodies = Matter . Bodies;

var engine , world;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
   
    var ground_options={
      isStatic:true
    }
    ground=Bodies.rectangle(600,390,40,0,ground_options);
    World.add(world,ground);
    
}

function draw(){
    background("skyblue");
   Engine.update(engine)

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    
}