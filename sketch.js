
let spoke;
let spoke1;
let spoke2;

function setup() {
  
  createCanvas(1200, 1200);

  colorMode(HSB);
  background(220);
  //draw circles across
  let middlex=width/2;
  let middley=height/2;
  spoke = new  Spoke(middlex,middley);
  spoke1 = new Spoke(middlex,middley);
  spoke2 = new Spoke(middlex,middley);
  noLoop();
}

function draw() {
  let radius1=0;
//  spoke.draw_grid(230,100,60);
           //H,S,B
  spoke.calc_point(35,360,15,20); //inside circle
  
  //         radius,max_ang,step, angle angle
  spoke1.calc_point(130,360,15,10);   //middle circle
  //         radius,max_ang,step,
  //         , max radius, step, angle
  //         , max radius, step, angle
    spoke2.calc_point(200,360,20,25);   //outside circle
  //         radius,max_ang,step, angle
  //         , max radius, step, angle
  
  
}