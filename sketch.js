var bullets;
var wall;
var speed;
var weight;
var thickness;
var bulletsRightEdge;
var wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  bullets = createSprite(50, 200, 50, 10);
  bullets.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullets,wall)){
    bullets.velocityX = 0;
    var damage = 0.5 * weight* speed* speed/thickness*thickness*thickness;
    
    if(damage>10){
      wall.shapeColor = "red";
    }
    /*if(damage>180 && damage>100){
      wall.shapeColor = color(230,230,0);
    }*/
    if(damage<10){
      wall.shapeColor = "green";
    }

  }
  drawSprites();
}
function hasCollided(bullets,wall){
  bulletsRightEdge = bullets.x + bullets.width;
  wallLeftEdge = wall.x;
  
  if(bulletsRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
  
}