var classscore; //score
// delete the above protash
var leaderboard; //leaderboard
var height; //total height
var width; //total width
var database;//the json database
var inputname;//the name user typed
var done = false;//done == true tote kane kati,done == false tote stamata na kaneiw kati
var myJSON// einai to json poy stelnv sthn bash otan ginetai update
//xmlHttprequest starts
let req = new XMLHttpRequest();
//xmlHttprequest done
var players=[{username:"zekes",
              score:"200"
             },
             {username:"zekes",
              score:"200"
             },
             {username:"zekes",
              score:"200"
             },
             {username:"zekes",
              score:"200"
             },
             {username:"zekes",
              score:"200"
             }
            ];
var updatedplayers={"Leaderboard":[
            {username:"zekes",
              score:"5000"
             },
             {username:"zekes2",
              score:"400"
             },
             {username:"zekes3",
              score:"300"
             },
             {username:"zekes4",
              score:"200"
             },
             {username:"zekes5",
              score:"100"
             }
            ]};
//
//updateDatabase();
//
var instructions = document.getElementById("instructions");
height = document.documentElement.clientHeight;//full window height
width = document.documentElement.clientWidth; // full window width
widthleft = width - windowWidth;
classscore = document.getElementsByClassName("score");
classscore[0].style.left =  ""+ (windowWidth + 16) +"px";
classscore[0].style.height = ""+ (height/4) +"px";
classscore[0].style.width = ""+ widthleft +"px";
leaderboard = document.getElementsByClassName("leaderboard");
leaderboard[0].style.left =  ""+ (windowWidth + 16) +"px";
leaderboard[0].style.top =  ""+ (height/4) +"px";
leaderboard[0].style.height = ""+  (height-(height/4))+"px";
leaderboard[0].style.width = ""+ widthleft +"px";
//margin instructions so they are centered
//console.log("Instructions:"+document.getElementsByClassName("instructions"));
instructions.style.width = ""+windowWidth    +"px"; 
//console.log("leaderboard:"+classscore[0]);
//console.log("leaderboard:"+leaderboard[0]);
//Url: https://api.jsonbin.io/b/5bc742b4adf9f5652a600a5a
//json test

$.getJSON('https://api.jsonbin.io/b/5bc742b4adf9f5652a600a5a/latest', function(data) {
  console.log("Player:"+data[0].username+"\tScore"+data[0].score);
    for( i=0; i<players.length;i++){
        players[i].username = data[i].username;
        players[i].score = data[i].score;
    }
    console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////");
    for (i =0; i<players.length; i++){
    console.log("Player:"+players[i].username+"\tScore"+players[i].score);
    }
    console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////");
    changeLeaderboard();//changes the leaderboard with the data from the database
});

//read from json done
//readDatabase();
//update json function
function updateDatabase(){
req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "http://api.jsonbin.io/b/5bc742b4adf9f5652a600a5a", true);
req.setRequestHeader("Content-type", "application/json");
req.send(myJSON);
}
//update json done


//read json function
//read
function readDatabase(){
    req = new XMLHttpRequest();
    
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
        database = req.responseText;
      }
    };
    
    req.open("GET", "http://api.jsonbin.io/b/5bc742b4adf9f5652a600a5a/latest", true);
    req.setRequestHeader("secret-key", "<SECRET_KEY>");
    req.send();
    }
//read json function ends
//change leaderboard from database function
function changeLeaderboard(){
  document.getElementById("firstName").innerHTML = ""+players[0].username;
  document.getElementById("firstScore").innerHTML = ""+players[0].score;
  document.getElementById("secondName").innerHTML = ""+players[1].username;
  document.getElementById("secondScore").innerHTML = ""+players[1].score;
  document.getElementById("thirdName").innerHTML = ""+players[2].username;
  document.getElementById("thirdScore").innerHTML = ""+players[2].score;
  document.getElementById("forthName").innerHTML = ""+players[3].username;
  document.getElementById("forthScore").innerHTML = ""+players[3].score;
  document.getElementById("fifthName").innerHTML = ""+players[4].username;
  document.getElementById("fifthScore").innerHTML = ""+players[4].score;
}
//style start game
startGame2 = document.querySelector(".startGame");
startGame2.style.width = windowWidth/2;
//startGame2.style.height = windowHeight/2;
startGame2.style.left =  (windowWidth/2) - (windowWidth/4);  
startGame2.style.top = (windowHeight/2) - (windowHeight/4);
//style start game ends
//function startGame()
function startGame(){
  console.log("Mphka");
  if (stopAnimation == true){
      startGame2.style.display ="none";
      stopAnimation = false;
      animate();
  }
}
//fucntion startGame ends
//function save starts

function save(){
  done = false;
  inputname = $( ".input" ).val();
  console.log("InputName:"+inputname);
  for(i=0;i<5;i++){
    if ((score > players[i].score) && done == false){
      players[i].username = inputname;
      players[i].score = score;
      myJSON = JSON.stringify(players);
      updateDatabase();
      done = true;
    }
  }
}
//fucntion save ends
function back(){
  start.style.display = "none";
  lost.style.display = "block";
  saveid.style.display = "none";
  borderid.style.display = "block";
}
function saveGame(){
  start.style.display = "none";
  lost.style.display = "none";
  saveid.style.display = "block";
}
function lost2(){
  start.style.display = "none";
  lost.style.display = "block";
  saveid.style.display = "none";
}
function hideAll(){
  start.style.display = "none";
  lost.style.display = "none";
  saveid.style.display = "none";
  borderid.style.display = "none";
  refreshGame();
}