var canvas = document.querySelector(".canvas");
var pressedKey; // the key you press
var playerhit = false; // check if player hited the ball
var score = 0; //game score
var random = 0; //random number from 0-9
var counter = 10; //just a counter
var scoreincrease = 1; //justscoreincrease
var colors = [
  "blue",
  "green",
  "black",
  "purple",
  "pink",
  "Crimson",
  "DarkGreen",
  "DarkSlateGray",
  "DarkTurquoise",
  "DarkViolet",
  "red"
];
canvas.height = window.outerHeight - window.outerHeight / 6;
canvas.width = window.outerWidth - window.outerWidth / 6;
//console.log("ScoreNumber:"+scorenumber);
//pass window height,width on vars
var windowHeight = canvas.height;
var windowWidth = canvas.width;
//console.log("WindowHeight:" + windowHeight + "\nWindowWidth:" + windowWidth);
//stopAnimation
var stopAnimation = true;
//stopAnimation
//declare var c=canvas.getContext("2d");
var c = canvas.getContext("2d");
//declare player varables
var pSH = windowHeight / 3.0; //210
var pSW = windowWidth / 102; //10
var bH = windowHeight / 2.5 + windowHeight / 4 - pSH; //200
var bW = windowWidth / 35; //50
var pEH = pSH + bH; //410
var pEW = bW + pSW; //60
var bcolor = "blue"; //ball color
//console.log("BorderHeight:" + bH + "\nBorderWidth:" + bW);
/*console.log(
  "PlayerStartingHeight:" +
    pSH +
    "\nPlayerStartingWidth:" +
    pSW +
    "\nPlayerEndingHeight:" +
    pEH +
    "\nPlayerEndingWidth:" +
    pEW
);
*/
var arcRadius = 20;
//testing variables
var i = 0;
//tasting variables ends
//declare circle variables
var cX = windowWidth / 2;
var cY = windowHeight / 2;
var cradius = 50;
var circle1 = Math.PI * 2;
var anticlockwise = false;
var velocityX = 6.5;
var velocityY = 6.5;
var cHT = 0; //circle high top
var cHB = 0; //circle high bottom
var cWR = 0; //circle width right
var cWL = 0; //circle width left
var dmovement = 30; //default movement
var movement = 0;
var e;
//DeclarationEnds
//style.js variables moved
var startgame2; //start game div
var start; //id when game starts
var saveid; //id when you are save table
var lost; //id when you lost
var borderid; //id of the border
//pass variabales with the ids
borderid = document.querySelector("#border");
start = document.querySelector("#start");
lost = document.querySelector("#lost");
saveid = document.querySelector("#save");
//pass variabales with the ids ends
start.style.display = "block";
lost.style.display = "none"; //lost context starts hidden
saveid.style.display = "none";
//styl.js varaibbles moved above
//if you press a key
$(window).keypress(function(e) {
  pressedKey = e.key;
  //console.log("You pressed:"+pressedKey);
  if (pressedKey === " ") {
    StartStopScreen(e);
  } else if (
    pressedKey == "ArrowUp" ||
    pressedKey == "ArrowDown" ||
    pressedKey == "w" ||
    pressedKey == "s"
  ) {
    move(e);
  }
});
//if you press a key ends
//run animate
animate();
//run animate ends
//drow the player rectangle function
function player() {
  c.beginPath();
  c.rect(pSW, pSH, bW, bH);
  c.strokeStyle = "black";
  c.fillStyle = "black";
  c.fill();
  c.stroke();
}
//player Rectange ended
//draw the circle function
function circle() {
  //circle position on map
  cHT = cY - cradius; //Circle height Top
  cHB = cY + cradius; //Circle Height Buttom
  cWR = cX + cradius; //Circle Width Right
  cWL = cX - cradius; //Circle Width Left
  //To testing
  //TO testing ends
  //circle postion on map ends
  //continue circle
  c.beginPath();
  c.arc(cX, cY, cradius, 0, circle1, anticlockwise);
  c.strokeStyle = bcolor;
  c.stroke();
  c.fillStyle = bcolor;
  c.fill();
  if (cWR > windowWidth) {
    velocityX = -velocityX;
    //velocityY = -velocityY;
    playerhit = false;
  } else if (cWL < 0) {
    stopAnimation = true;
    back();
    /*
    console.log("CircleCenterWidth:"+cX+"\nCircleCenterHeight:"+cY);
    console.log("CircleWidthLeft:"+(cWL)+"\nCircleWidthRight:"+(cWR)
               +"\nCircleHeightTop:"+(cHT)+"\nCircleHeightBottom:"+(cHB));
    console.log("BorderHeight:"+bH+"\nBorderWidth:"+bW);
    console.log("PlayerStartingHeight:"+pSH+"\nPlayerStartingWidth:"+pSW+"\nPlayerEndingHeight:"+pEH+"\nPlayerEndingWidth:"+pEW);
    */
  } else if (cWL <= pEW && (cHB > pSH && cHT < pEH) && playerhit == false) {
    velocityX = -velocityX;
    //velocityY = -velocityY;
    playerhit = true;
  } else if (cHB > windowHeight || cHT < 0) {
    velocityY = -velocityY;
  }
  cX += velocityX;
  cY += velocityY;
}
//draw the circle ended
//Move function player
function move() {
  //console.log("You press arrow key");
  if (
    (pressedKey == "w" || pressedKey == "W" || pressedKey == "ς") &&
    pSH - dmovement > -20
  ) {
    movement = -55;
    pSH += movement;
    pEH = pSH + bH;
  } else if (
    (pressedKey == "S" ||
      pressedKey == "s" ||
      pressedKey == "Σ" ||
      pressedKey == "σ") &&
    pEH + dmovement < windowHeight
  ) {
    movement = 55;
    pSH += movement;
    pEH = pSH + bH;
  }
  // console.log("PlayerStartHeight:" + pSH + "\nPlayerEndingHeight:" + pEH);
}
//Move function player ends
//freezeScreen()
function StartStopScreen(e) {
  //console.log("StopAnimation:"+stopAnimation+"\nYou pressed:Space");
  if (stopAnimation == true) {
    stopAnimation = false;
    animate();
  } else if (stopAnimation == false) {
    stopAnimation = true;
    /*console.log("CircleCenterWidth:" + cX + "\nCircleCenterHeight:" + cY);
    console.log(
      "CircleWidthLeft:" +
        cWL +
        "\nCircleWidthRight:" +
        cWR +
        "\nCircleHeightTop:" +
        cHT +
        "\nCircleHeightBottom:" +
        cHB
    );
    console.log("BorderHeight:" + bH + "\nBorderWidth:" + bW);
    console.log(
      "PlayerStartingHeight:" +
        pSH +
        "\nPlayerStartingWidth:" +
        pSW +
        "\nPlayerEndingHeight:" +
        pEH +
        "\nPlayerEndingWidth:" +
        pEW
    );
    */
  }
}
//freeScreen() ends
//ChangeScore function
function changeScore() {
  i++;
  if (i % 100 == 0) {
    score += scoreincrease;
    if (score > counter) {
      //counter starts at 10
      scoreincrease += 1;
      counter = counter * 2;
    }
    if (Math.abs(velocityX < 15) && Math.abs(velocityY < 15)) {
      if (velocityX < 0) {
        velocityX -= 0.03;
      } else {
        velocityX += 0.03;
      }
      if (velocityY < 0) {
        velocityY -= 0.03;
      } else {
        velocityY += 0.03;
      }
    }
    if (score % 9 == 0) {
      randomColor();
      if (cradius > 12) {
        cradius -= 4;
      }
      //console.log("Circle radius:" + cradius);
      //console.log("Ball color:" + bcolor);
    }
    document.getElementById("scorenumber").innerHTML = "" + score;
    //console.log("Score:" + score + "scorenumber:" + scorenumber);
  }
}
//chengeScrore function ends
//refresh game function
function refreshGame() {
  initialize();
  stopAnimation = false;
  animate();
}
//refresh game function done

//initialize the starting values
function initialize() {
  playerhit = false; // check if player hited the ball
  score = 0; //game score
  stopAnimation = true;
  //declare player varables
  pSH = windowHeight / 3.0; //210
  pSW = windowWidth / 102; //10
  bH = windowHeight / 2.5 + windowHeight / 4 - pSH; //200
  bW = windowWidth / 35; //50
  pEH = pSH + bH; //410
  pEW = bW + pSW; //60
  arcRadius = 20;
  i = 0;
  //declare circle variables
  cX = windowWidth / 2;
  cY = windowHeight / 2;
  cradius = 50;
  circle1 = Math.PI * 2;
  anticlockwise = false;
  velocityX = 6.5;
  velocityY = 6.5;
  cHT = 0; //circle high top
  cHB = 0; //circle high bottom
  cWR = 0; //circle width right
  cWL = 0; //circle width left
  dmovement = 30; //default movement
  movement = 0;
  //DeclarationEnds
}
//initiliazation done
//the animation function this is all the canvas
function animate() {
  if (stopAnimation == false) {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, windowWidth, windowHeight);
    player();
    circle();
    changeScore();
  }
}
//animation function done
//function to select random color
function randomColor() {
  random = Math.floor(Math.random() * 10); //random number from 0-9
  bcolor = colors[random];
  console.log("Random Color:" + colors[random]);
}
