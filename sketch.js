const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1= new Box(240,300,50,50);
box2 = new Box(200,200,50,80);  
Ground = new ground(200,380,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   Ground.display();
}