var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src ="bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";

//some variables
var gap = 75;
var constant = pipeNorth.height+gap;


//draw images

function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeNorth,100,0);
    ctx.drawImage(pipeSouth,100,0+constant);

}

draw();



