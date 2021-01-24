function setup() {
  canvasx = 1000
  canvasy = 1000
  rectlength = 300
  rectheight = 20
  y_pos1 = 200 
  y_pos2 = y_pos1 + 40
  y_pos3 = y_pos2 + 40
  y_pos4 = y_pos3 + 40
  y_pos5 = y_pos4 + 40
  y_pos6 = y_pos5 + 40
  
  
  createCanvas(canvasx, canvasy);
  
  centerx = (canvasx/2)-(rectlength/2);
  centery = (canvasy/2)-(rectheight/2);
  console.log(centerx);
}

function draw() {
  background(10, 70, 0.1, 0.6);
  rect(centerx, y_pos1, rectlength, rectheight)
  rect(centerx, y_pos2, rectlength, rectheight)
  rect(centerx, y_pos3, rectlength, rectheight)
  
  rect(centerx, y_pos4, rectlength, rectheight)
  rect(centerx, y_pos5, rectlength, rectheight)
  rect(centerx, y_pos6, rectlength, rectheight)
  
}