var bananaImage,bananaGroup,obstacleImage,obstacleGroup,monkey,score,backgroundImage,backGround,monkeyRunning,ground,survivalTime;        



function preload(){
  bananaImage= loadImage("Banana.png");
  obstacleImage= loadImage("ground.jpg");
  monkeyRunning= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png",
              "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
backgroundImage=loadImage("jungle.jpg");
  
}


function setup() {
  createCanvas(600,400);
  backGround=createSprite(300,150,600,300);
  backGround.addImage(backgroundImage);
  backGround.scale=1.3;
  backGround.width/2
  ground=createSprite(300,390,600,10);
 ground.visible=false;
  
  monkey=createSprite(100,350,50,50);
  monkey.addAnimation("running",monkeyRunning);
  monkey.scale=.2; 
  
  bananaGroup= new Group();
  obstacleGroup = new Group();
survivalTime=0;
  score=0;
}


function draw(){
 background(255);
 backGround.velocityX=-5    ;  
  monkey.collide(ground) 
  if (backGround.x < 0){
    backGround.x = backGround.width/2;
   } 
if(keyDown("space")&&monkey.y>=324){
  monkey.velocityY=-20;
}
  monkey.velocityY++  
  
if(bananaGroup.isTouching(monkey)){
   score=score+2
  bananaGroup.destroyEach();
   }
  switch(score){
    case 10 :monkey.scale=0.22
     break ;
    case 20  :monkey.scale=0.24
    break;
    case 30:monkey.scale=0.26
      break;
      case 40:monkey.scale=0.28
      break;
      case 100:monkey.scale=0.3
      break;
      default:break;
  }
 if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.2;
 }
  
  drawSprites();
  spawnBananas();
  console.log(getFrameRate())
  spawnObstacles();
  survivalTime=survivalTime+Math.ceil((getFrameRate()/frameCount)/2);
  fill("yellow")
  text("SURVIVAL TIME: "+ survivalTime,450,50);  
  fill("black")
  text("SCORE: "+ score,150,50);
}
function spawnBananas(){
 if(frameCount%80===0){
   var banana=createSprite(600,random(220,370),50,50);
   banana.addImage(bananaImage);
   banana.scale=.05;
   banana.velocityX=-5;
   banana.lifetime=500;
   bananaGroup.add(banana);
   
 }
}
function spawnObstacles(){
 if(frameCount%300===0){
  var obstacle=createSprite(600,370,30,30);
   obstacle.addImage(obstacleImage);
   obstacle.scale=.05;
   obstacle.velocityX=-12;
   obstacle.lifetime=500;
   obstacleGroup.add(obstacle);
 }
} 