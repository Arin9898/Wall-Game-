var wall1
var wall2
var wall3
var wall4
var ball


function setup() 
{
  createCanvas(500,700);
wall1 = createSprite(250,25,500,50)
  wall2 = createSprite(250,675,500,50)
  wall3 = createSprite(25,300,50,700)
  wall4 = createSprite(475,300,50,700)
  ball = createSprite(250,350,50,50)
  ball.velocityX = 4;
  ball.velocityY = -4;

}

function draw() 
{
  background(51);
 
  //ball.bounceOff(wall1);
  //ball.bounceOff(wall2);
  //ball.bounceOff(wall3);
  //ball.bounceOff(wall4);

  ball.shapeColor = "green"
  wall1.shapeColor = "yellow"
wall2.shapeColor = "yellow"
wall3.shapeColor = "yellow"
 wall4.shapeColor = "yellow"

if(ball.bounceOff(wall1)){
  ball.shapeColor = "red"
  background("blue");
}
if(ball.bounceOff(wall2)){
ball.shapeColor = "brown"
background("green")
}
if(ball.bounceOff(wall3)){
ball.shapeColor = "black"
background("cyan")
}
if(ball.bounceOff(wall4)){
ball.shapeColor = "grey"
background("white")
}

   drawSprites();
}