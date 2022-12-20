let rectY = 900;
let rectX = 0;
let fr = 30;
let clr;

function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    createCanvas(900,900);
    background(125);
    frameRate(fr);
    clr = color(230,150,210);

}

function draw(){
    
    rectX = rectX + 1 * (deltaTime / 10);
   
  if (rectX >= width) {
    
    if (fr === 30) {
      clr = color(180, 125, 235);
      fr = 10;
      frameRate(fr); 
    } else {
      clr = color(230,150,210);
      fr = 30;
      frameRate(fr); 
    }
    rectX = 0;
  }
  rectY = rectY - 1 * (deltaTime / 10);

  if (rectY >= height) {
    
    if (fr === 30) {
      clr = color(150, 145, 215);
      fr = 30;
      frameRate(fr); 
    } else {
      clr = color(275,110,250);
      fr = 10;
      frameRate(fr); 
    }
    rectY = 900;
  }
  fill(clr);
  rect(rectX,rectX,40,40);
  rect(rectX,rectY,40,40);
  rect(rectY,rectX,40,40);
  rect(rectY,rectY,40,40);
  
  
    console.log("draw - frameCount:"+frameCount);
    fill(  191, 180, 247  )
    ellipse(450,450,550,550)
    fill(  228, 140, 241  )
    triangle(775,625,450,150,125,625)
    fill(  228, 140, 241  )
    triangle(775,275,450,750,125,275) // Move Rectangle in relation to deltaTime
    fill(  180, 236, 247  );
    ellipse(height/2,width/2,450,450)
    fill(  191, 180, 247  )
    square(270,280,360,20);
    fill(  117, 126, 239  )
    triangle(625,380,275,380,450,640)
    fill(  117, 126, 239  )
    triangle(625,540,275,540,450,280)
    arc(235,220,80,80,90,270, PIE);
    arc(235,680,80,80,0,180, PIE);
    arc(665,680,80,80,225,135, PIE);
    arc(665,220,80,80,9.65,309.25, PIE); 


}
