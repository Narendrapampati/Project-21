var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 500);

  speed=random(90,170)
  weight=random(30,52)


  thickness=random(22,83);




  
    bullet=createSprite(50, 200, 50,8);  
    bullet.velocityX = speed;
    bullet.shapeColor=color("white");

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor = "grey";
  
}


function draw() {
  background("blue");  

  bullet.depth = wall.depth;
  bullet.depth = wall.depth+1;

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color("red");
		
  }
  
	if(damage<10)
	{
		wall.shapeColor=color("green");
	}
	
  }


  drawSprites();
 
}


function hasCollided(bullett, walll)
{
	bulletRightEdge=bullett.x +bullett.width;
	wallLeftEdge = walll.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}