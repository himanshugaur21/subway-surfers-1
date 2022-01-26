var jakeImg, pathImg, path, jake, left_boundary, right_boundary, subway, subwayImg, coin, coinImg;
function preload(){
  jakeImg=loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg=loadImage("path.png");
  subwayImg=loadImage("subway.png");
  coinImg=loadImage("coin.png");
}
function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  jake.scale=0.6
  subway=createSprite(200,40,50,50);
  subway.addImage(subwayImg);
  subway.scale=0.5
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}
function draw() {
  background(0);
  path.velocityY=5;
 
  jake.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  
}
  jake.collide(left_boundary);
  jake.collide(right_boundary);
 
drawSprites();
}