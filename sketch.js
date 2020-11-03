var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor="green"; 
  fixedRect.debug=true; 
  movingRect=createSprite(260,200,80,30); 
  movingRect.shapeColor="green"; 
  movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}