/* 
 Author: Austin Cook
 Purpose: Homework Assignment 10
 Date: Nov 2, 2019
 Jeffrey Epstein didn't kill himself
*/
var titletextsize = 12;

var x = 190;
var y = 180;
var diameter = 120;
var speed;

var x2 = 140;
var x3 = 120;
var y2 = 170;
var y3 = 100;
var speed2;

var x4 = 240;
var x5 = 260;
var y4 = 170;
var y5 = 100;
var speed3;

var x6 = 150;
var y6 = 220;
var speed4; // do these speed variables even need to be here? Seems like it works without them.

var x7 = 210;
var y7 = 220;
var speed5;

// This function is called only once
function setup() {
  createCanvas(400,400);
  speed = Math.floor(Math.random() * 10) + 1;
  speed2 = Math.floor(Math.random() * 10) + 1;
  speed3 = Math.floor(Math.random() * 10) + 1;
  speed4 = Math.floor(Math.random() * 10) + 1;
  speed5 = Math.floor(Math.random() * 10) + 1;
}


// this function is called continuously
function draw() {
  background(0,220,0);

  fill(0,0,255);
  rect(x6,y6,20,110);
  if(y6 >= 290 || y6 <= 0)
  {
      speed4 *= -1;
  }
  y6+=speed4;

  rect(x7,y7,20,110);
  if(x7 >= 290 || x7 <= 0 || y7 >= 290 || y7 <= 0 )
  {
      speed5 *= -1;
  }
  x7+=speed5;
  y7+=speed5;

  fill(255,0,0);
  ellipse(x,y,diameter,150);
  if(y >= height - (diameter/2) || y <= diameter/2)
{

    speed *= -1; // this switches the direction
}
y+=speed; // this moves my ellipse

  line(x2,y2,x3,y3);
  if(x2 >= 400 || x3 <= 0 )
  {
      speed2 *= -1;
  }
  x2+=speed2;
  x3+=speed2; // these two lines move my arm

  line(x4,y4,x5,y5);
  if(x5 >= 400 || x4 <= 0 )
  {
      speed3 *= -1
  }
  x4+=speed3;
  x5+=speed3;

  fill(197, 140, 133)
  triangle(140,40,190,120,240,40);

  line(160,50,148,10);
  line(170,50,158,10);
  line(180,50,168,10);
  line(190,50,178,10);
  line(200,50,188,10);
  line(210,50,198,10);
  line(220,50,208,10);
  
  point(190,70);

  fill(0,0,0);
  square(175,60,5);
  square(200,60,5);
  rect(183,85,15,3);

  textSize(16);
  text('Austin Cook',280,395);

  textSize(titletextsize);
  text('Pizza Face',0,10)
  titletextsize++;
  
  if (titletextsize >= 28)
  {
      titletextsize *= -1
  }
  
  
}