var backgroundimage
var cat, catimage1,catimage2,catimage3
var mouse,mouseimage1,mouseimage2,mouseimage3
function preload() {
    //load the images her
    backgroundimage = loadImage("images/garden.png")
catimage1 = loadAnimation("images/cat1.png")
catimage2 = loadAnimation("images/cat2.png","images/cat3.png")
catimage3 = loadAnimation("images/cat4.png")
mouseimage1 = loadAnimation("images/mouse1.png")
mouseimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addAnimation("sleeping",catimage1)
cat.scale = 0.2
mouse = createSprite(200,600)
mouse.addAnimation("standing",mouseimage1)
mouse.scale = 0.15
}

function draw() {

    background(backgroundimage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("last",catimage3)
    cat.changeAnimation("last")
    mouse.addAnimation("lastimage",mouseimage3)
    mouse.changeAnimation("lastimage")

    cat.x = 300
    mouse.scale = 0.15
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("walking",catimage2)
    cat.changeAnimation("walking")
mouse.addAnimation("teasing",mouseimage2)
mouse.changeAnimation("teasing")
}

}
