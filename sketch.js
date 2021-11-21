var crane, craneImg;
var background, bkImg;
var building, buildImg, demoImg;
var rock, rockImg;
var rope;
var rock_con;
var blower;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Constraint = Matter.Constraint;

function preload(){
  craneImg = loadImage("crane.png");
  bkImg = loadImage("bk.png");
  buildImg = loadImage("building.png");
  demoImg = loadImage("demolishedBuilding.png");
  rockImg = loadImage("rock.png");
  


}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  var crane_options = {
    isStatic: true
  }

  crane = Bodies.rectangle(50, 200, 250, 500, crane_options);
  World.add(world,crane);

  building = Bodies.rectangle(500,250,250,500,crane_options);
  World.add(world, building);

  rock = Bodies.rectangle(250,450,200,200,crane_options);

  blower = createImg("blower.png");
  blower.position(10, 460);
  blower.size (70,50);
  blower.mouseClicked(airBlow);
}


function draw() 
{
  background(51);
  image(bkImg,0,0,width,height);
  Engine.update(engine);

  if(crane!=null){
    image(craneImg,crane.position.x,crane.position.y,250,500);
  }

  if(building!=null){
    image(buildImg,building.position.x,building.position.y,250,500);
  }
  
  if(rock!=null){
    image(rockImg,rock.position.x,rock.position.y,50,50);
  }

  if(Matter.SAT.collides(rock,building)){
    if(building!=null){
      image(demoImg,building.position.x,building.position.y,250,500);
    }
  }


  

}

function airBlow(){
  rock.position.x += 100;
}


