class Spoke{
  
  constructor(width,height)
  {this.width =width;
   this.height=height;
    
  }
  
  //START METHODS *************
 calc_point(radius,max_ang,step, angle){
   angleMode(DEGREES);
   //console.log(radius);
   //console.log(max_ang);
   for (let angle=0;angle<max_ang;angle+=step){
     let x1=radius*cos(angle);
     let y1=radius*sin(angle);
     let x2=radius*cos(angle+(15*step));
     let y2=radius*sin(angle+(15*step));
  //now...plot the point
     let end1x=this.width+(x1*2);
     let end1y=this.height-(y1*2);
     let end2x=this.width+(x2*2);
     let end2y=this.height-(y2*2);
  //draw the line
     stroke(angle-5,100,100);  //vary the line color
     strokeWeight(2);
     line(end1x,end1y,end2x,end2y);
     //draw the circle on the end
   fill(angle,100,100);  //vary the color of the circle
   stroke(320,100,100);
   ellipse(this.width+(x1*2), this.height-(y1*2),15); //circle on 1st pt
  // ellipse(this.width+(x2*2), this.height-(y2*2),9); //circle on 2nd pt
   
   }   
 } 

 draw_grid(H,S,B) {
  colorMode(HSB);
  for(let i=0;i<width;i+=100) {
    fill(H,S,B);
    ellipse(0,i,10);  //circles down
    fill(H+50,S,B);
    ellipse(i,0,10);  //circles across    
  }
}
}