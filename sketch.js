
var monkey , monkey_running
var banana ,bananaImage, obstacle, oImage
var FoodGroup, obstacleGroup
var score;
var ground;
var rNumber;
var NumberR;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  oImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
  
  

  monkey = createSprite(40,370,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.12;

  
  ground = createSprite(400,400,900,5);
  ground.velocityX = -4;
  
  FoodGroup = createGroup();
}
function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black"); 
  textSize(20); 
  fill("black");      survivalTime=Math.ceil(frameCount/frameRate());      text("Survival Time: "+ survivalTime, 100,50); 
  
  if (ground.x > 0){
   ground.x = ground.width/2;
    }
if(keyDown("space")){
  monkey.velocityY = -10;
}
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}
function spawnBanana(){
  if(frameCount % 80 === 0){
  rNumber = Math.round(random(120,200));
  banana = createSprite(400,rNumber,30,30);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 130;
  FoodGroup.add(banana);
}
}
function spawnObstacles(){
  if(frameCount % 100 === 0){
  NumberR = Math.round(random(450,500));
  obstacle = createSprite(NumberR,375,20,20);
  obstacle.addImage(oImage);
  obstacle.scale = 0.13;
  obstacle.velocityX = -3;
  }
}







