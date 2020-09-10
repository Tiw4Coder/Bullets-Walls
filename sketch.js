
var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(300, 200, 50, 10);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  
  movingrect.x=mouse.x;
  movingrect.y=mouse.y;
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<movingrect.width/2-fixedrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
  &&fixedrect.y-movingrect.y<movingrect.width/2-fixedrect.width/2) {
    movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  }

  else{
    movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }
  drawSprites();
}