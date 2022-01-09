function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  fill(150);
  noStroke();
  rect(width/3+width/10,height-50,5,50);
  circle(width/3+width/10+2,height-50,20);
  
  translate(width/2,height);
  branch(100,15);
  noLoop();
}

function branch(len,width)
{
  if(len<10)
    return;
  //fill(random(0,255),random(0,255),random(0,255))
  rect(0,-len,width,len);
  translate(0,-len);
  push();
  //rotate(radians(18));
  rotate(radians(random(10,45)));
  //line(0,0,0,-len*random(0.5,0.9));
  branch(len*0.85,width*0.8);
  pop();
  //rotate(radians(-18));
  rotate(-radians(random(10,45)));
  branch(len*0.85,width*0.8);
}
