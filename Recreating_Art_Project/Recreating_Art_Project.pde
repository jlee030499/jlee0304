void setup(){
  size(500,500);
  background(0); 
 
  
}

void draw(){
 noFill();
 stroke(255);
 rectMode(CENTER);
 rect(250,250,250,250); 
 
 for(int x = 0; x < 375; x = x+12){
      if((125 < x) && (x < 375)){
         line(x, 125,x, 375);
      }  
  }
  
  for(int y = 0; y < 500; y = y + 10){
    if((0 < y) && (y<125)){
      line(0,y,500,y);
    }
    if((375 < y) && (y<500)){
      line(0,y,600,y);
    }
    if((125<y) && (y<375)){
      line(0,y,125,y);
      line(375,y,500,y);
    }
  }
  
}
