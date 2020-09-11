
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig3,pig6;
var backgroundImg,platform;
var bird, slingshot;
var gamestate = "on sling";
var g;
var pig10;
var score = 0;
    
function preload() {
    backgroundImg = loadImage("sprites/father.png");
 

}

function setup(){
  
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig9 = new pig2(700,75);
    land1 = new land(700,85,150,10);               
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
   car = new pigy (800,340);
    land4 = new land(900,10,10,200)
    land6 = new land(1000,250,150,10);
    land5 = new land(900,350,10,290)
    land2 = new land(500,300,150,10);
    boy = new piggy(1000,200);
    land3 = new land(800,350,150,10);
pig7 = new Pig(500,240);
    pig3 = new Pig(1000,400);
land0 = new land(690,400,10,200);
   land09 = new land (390,400,10,300);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
    background(backgroundImg);
    textFont('Helvetica');
    textSize(20);
    text("HELP ME TO GET  GIFT FOR MY FATHER",250,50);
    Engine.update(engine);
    //strokeWeight(4);
land6.display();
land09.display();
land0.display();
    ground.display();
  pig9.display();
  car.score();
  pig7.score();
  boy.score();
  pig9.score();  
pig7.display();
land1.display();
    land5.display();
    boy.display();
    
land3.display();
land4.display();
land2.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
car.display();


}

function mouseDragged(){

        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }


    

   
  
  

     

   





function mouseReleased(){
    slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       Matter.Body.setAngle(bird.body,0);
    }
}