


function setup() {
  createCanvas(800,400);
  
fr = createSprite(200,200,50,80)
fr.shapeColor = "green"
fr.velocityX = 3

mr = createSprite(800,200,80,30)
mr.shapeColor = "blue" 
mr.velocityX = -3
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(mr.x-fr.x < mr.width/2 + fr.width/2 &&
    fr.x- mr.x < fr.width/2 + mr.width/2 &&
    mr.y-fr.y < mr.height/2 + fr.height/2 &&
    fr.y-mr.y < fr.height/2 + mr.height/2)
    {
       mr.velocityX = mr.velocityX * (-1)
       fr.velocityX = fr.velocityX * (-1)
    }
    else
     {
      fr.shapeColor = "green"
      mr.shapeColor = "blue"
     }
}