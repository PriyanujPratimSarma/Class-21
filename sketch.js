var fixedRect, movingRect, rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 150);
  movingRect = createSprite(150, 150, 100, 40);
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
  rect1 = createSprite(50, 200, 50, 150);
  rect1.shapeColor = "yellow";
  rect1.velocityX = 2;
  rect2 = createSprite(250, 200, 50, 100);
  rect2.shapeColor = "yellow";
  rect2.velocityX = -2;
  rect3 = createSprite(600, 200, 50, 100);
  rect3.shapeColor = "yellow";
  rect4 = createSprite(700, 200, 50, 150);
  rect4.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect, rect3)){
    rect3.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    rect3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  bounce(rect1, rect2);
  drawSprites();

}
