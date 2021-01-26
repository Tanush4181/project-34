const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

GamingBackgroundImg=loadImage("GamingBackground.png")

}


function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1600,20);
   

    box1 = new Box(900,100,60,60);
    box2 = new Box(900,100,60,60);
    box3 = new Box(900,100,60,60);
    box4 = new Box(900,100,60,60); 
    box5 = new Box(900,100,60,60);
    box6 = new Box(900,100,60,60);
    box7 = new Box(800,100,60,60); 
    box8 = new Box(800,100,60,60);
    box9 = new Box(800,100,60,60);
    box10 = new Box(800,100,60,60);
    box11 = new Box(800,100,60,60);
    box12 = new Box(800,100,60,60);
    box13 = new Box(700,100,60,60);
    box14 = new Box(700,100,60,60);
    box15 = new Box(700,100,60,60);
    box16 = new Box(700,100,60,60);
    box17 = new Box(700,100,60,60);
    box18 = new Box(700,100,60,60);
    box19 = new Box(700,100,60,60);
    box20 = new Box(700,100,60,60);


    hero = new Hero(200,200,130,130);

    monster= new Monster(1300,100,140,140)
   
    fly = new Fly(hero.body,{x:500, y:50});
}

function draw(){
 background(GamingBackgroundImg);
    
       
    Engine.update(engine);
    //strokeWeight(4);
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
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    monster.display()

    ground.display();

    hero.display();
    fly.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    //}
}


