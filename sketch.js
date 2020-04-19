// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var Box1;
 
var ground;
var gSlider;

var list1 = [];
 
function setup() {
    createCanvas(1200, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
     ground = new Ground(1100,380,1200,20);
}
 
function mousePressed() {
    if (mouseY < 350) {
        Box1 = new Box(mouseX,mouseY,30,30);
        list1.push(Box1);
        console.log(list1[0]);
        
        // Every time a mouse press occures create a new box.
    }
}

 
function draw() {
   // Draw all the elements including the slider that 
     ground.display();
    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    if (list1 != undefined){

        for(var i = 0;i < list1.length; i ++){
            list1[i].display();
         }
    }
   


}