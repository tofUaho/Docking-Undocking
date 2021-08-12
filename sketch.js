var astronaut;
var bg, bgImg;
var sleep;
var gym;
var eat;
var drink;
var move;

function preload() {
  bgImg = loadAnimation("assets/iss.png");
  sleep = loadAnimation("assets/sleep.png");
  brush = loadAnimation("assets/brush.png");
  gym = loadAnimation("assets/gym1.png", "assets/gym2.png", "assets/gym11", "assets/gym12");
  eat = loadAnimation("assets/eat1.png", "assets/eat2.png");
  drink = loadAnimation("assets/drink1", "assets/drink2");
  move = loadAnimation("assets/move.png", "assets/move1.png");
  bath = loadAnimation("assets/bath1.png", "assets/bath2.png");

}



function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300,230);
  astronaut.scale = 0.1;

  bg = createSprite(300,300);
  bg.addImage("bg", bgImg);
  
}

function draw() {
  background(255,255,255);  

  astronaut.bounceOff(edges);

  if(keyDown("Up")) {
    astronaut.addAnimation("brushing", brush);
  }

  if(keyDown("Down")) {
    astronaut.addAnimation("gymming", gym);
  }

  if(keyDown("Left")) {
    astronaut.addAnimation("eating", eat);
  }

  if(keyDown("Right")) {
    astronaut.addAnimation("bathing", bath)
  }

  if (keyDown("M")) {
    astronaut.velocityX = -5;
    astronaut.velocityY = 5
  }

  createEdgeSprites();
  drawSprites();
}