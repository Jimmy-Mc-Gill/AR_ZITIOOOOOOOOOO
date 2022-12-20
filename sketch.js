//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    createCanvas(900,900);
    background(125);


}

function draw(){
    console.log("draw - frameCount:"+frameCount);
    fill(  191, 180, 247  )
    ellipse(450,450,550,550)
    fill(  228, 140, 241  )
    triangle(775,625,450,150,125,625)
    fill(  228, 140, 241  )
    triangle(775,275,450,750,125,275)
    fill(  180, 236, 247  );
    ellipse(height/2,width/2,450,450)
    fill(  191, 180, 247  )
    square(270,280,360,20);
    fill(  117, 126, 239  )
    triangle(625,380,275,380,450,640)
    fill(  117, 126, 239  )
    triangle(625,540,275,540,450,280)
    arc(235,220,80,80,90,270, PIE);
    arc(665,220,80,80,15,315, PIE);
    arc(235,680,80,80,0,180, PIE);
    arc(665,680,80,80,225,135, PIE);
    


}
