var bg ;
var iss , issimg;
var spacecraft , scimg;
var hasDocked = false;

function preload(){

  // adding images for this game 
   bg= loadImage("spacebg.jpg");
   issimg = loadImage("iss.png");
   scimg = loadImage("spacecraft1.png");
   scimg2 = loadImage("spacecraft2.png");
   scimg3 = loadImage("spacecraft3.png");
   scimg4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(700,600);

  spacecraft = createSprite(280,420);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.30;

  iss = createSprite(330,230);
  iss.addImage(issimg);
  iss.scale = 0.80;
 
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){
     spacecraft.x = spacecraft.x + random(-1,1);
    
     if(keyDown("UP_ARROW")){
       spacecraft.y = spacecraft.y -2;
      }
    
       if(keyDown("LEFT_ARROW")){
          spacecraft.addImage(scimg3);
          spacecraft.x = spacecraft.x - 1;
          }
    
     if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(scimg4);
        spacecraft.x = spacecraft.x + 1;
        }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg2);
     }
   }

if(spacecraft.y <= (iss.y+85) && spacecraft.x <= (iss.x-10)){
  hasDocked = true;
  textSize(35);
  fill("white")
  text("Docking Successful!", 200, 500);
}

  drawSprites();
}