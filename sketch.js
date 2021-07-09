var garden,rabbit;
var gardenImg,rabbitImg;
var applesImg;
var leafImg
 
 
 function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    applesImg=loadImage("apple.png");
    leafeImg=loadImage("leaf.png");
}


function setup(){
  createCanvas(400,400);
  spawnApples();  
  
  
  
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  console.log(mouseY);
  
  
  var selectsprites=Math.round(random(1,2));
  
  if(frameCount%80 == 0){
    if(selectsprites == 1){
       spawnApples();
    }
    else{
       spawnLeaves();
    }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  drawSprites();
}


function spawnApples(){
 var apples;
 
   apples=createSprite(Math.round(random(50,350)),40,10,10)
   apples.addImage(applesImg);
   apples.velocityY=5;
   apples.scale=0.1;
if(apples>323){
  apples.remove;
}
}


function spawnLeaves(){
  var leaves;
  
  leaves=createSprite(Math.round(random(50,350)),40,10,10);
  leaves.addImage(leafImg);
  leaves.velocityY=5
  leaves.scale=0.1;
  if(leaves>323){
    leaves.remove;
  }
}