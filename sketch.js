const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box11,box12,box13,box14,box15,box16,box17;
var box21,box22,box23,box24,box25,box26l
var box31,box32,box33,box34,box35,box36,box37;
var box41, box42,box43,box44,box45,box46;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //first row
  box11 = new Box(600, 100, 70, 70);
  box12 = new Box(600, 100, 70, 70);
  box13 = new Box(600, 100, 70, 70);
  box14 = new Box(600, 100, 70, 70);
  box15 = new Box(600, 100, 70, 70);
  box16 = new Box(600, 100, 70, 70);
  box17 = new Box(600, 100, 70, 70);

  //second row
  box21 = new Box(700, 100, 70, 70);
  box22 = new Box(700, 100, 70, 70);
  box23 = new Box(700, 100, 70, 70);
  box24 = new Box(700, 100, 70, 70);
  box25 = new Box(700, 100, 70, 70);
  box26 = new Box(700, 100, 70, 70);

  //third row
  box31 = new Box(800, 100, 70, 70);
  box32 = new Box(800, 100, 70, 70);
  box33 = new Box(800, 100, 70, 70);
  box34 = new Box(800, 100, 70, 70);
  box35 = new Box(800, 100, 70, 70);
  box36 = new Box(800, 100, 70, 70);
  box37 = new Box(800, 100, 70, 70);

  //fourth row
  box41 = new Box(900, 100, 70, 70);
  box42 = new Box(900, 100, 70, 70);
  box43 = new Box(900, 100, 70, 70);
  box44 = new Box(900, 100, 70, 70);
  box45 = new Box(900, 100, 70, 70);
  box46 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();

  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
