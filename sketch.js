var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("dark.jpg")
  //load image for the treasure background
  bg2=loadImage("key.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    stroke("black")
    
    fill("red")
    textSize(60);
    text("congrats!! You found the key",100, 250);
    textSize(20);
    text("Click Next To Move On The Next Stage",400,450)
    next=createButton("next");
    next.position(750,450);
    next.mousePressed(() => {
      window.open("https://gerisha.github.io/cs2/", '_top')
  
    })
  }
   
  

  drawSprites()
}