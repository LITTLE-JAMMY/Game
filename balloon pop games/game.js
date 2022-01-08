var score = document.getElementById('score');
var popped = 0;
var boombed = 0;




var balloons = document.getElementById('balloons');
var text = document.querySelector('h4');
var play = document.getElementById('play');
var pause =  document.getElementById('pause');
var tryAgain = document.getElementById('tryAgain');
var hints = document.getElementById('hints');
var credit = document.getElementById("credit");
var startButton = document.getElementById('start');
var help = document.getElementById('help');
var inter = document.getElementById('int');
var message = document.getElementById('message');
var playAgain = document.getElementById('playAgain');
var creator = document.getElementById('creator');
var textMessage = document.getElementById('textMessage');
var image = document.getElementById('image');
var image2 = document.getElementById('image2');
var word = document.getElementById('word');
var giphy = document.getElementById('giphy');
var giphy2 = document.getElementById('giphy2');
var reload = document.getElementById('reload');

function displayTime() {
var time = document.getElementById("countdown");
var upate = time.innerHTML -- ;
if(upate == 1){
clearInterval(count);
balloons.style.display = 'none';
text.style.display = 'block';
play.style.display = "none";
pause.style.display = "none";
tryAgain.style.display = "inline-block";
var timeOut = new Audio("../sound/loser.wav");
timeOut.play();
credit.style.display = "none";
hints.style.display = "inline-block";
startButton.style.display = "none";
help.style.display = "inline-block";
inter.style.display = "none";
playAgain.innerHTML = "Thank you for playing!"
message.innerHTML = "You can click the button try again to start your game again! "
creator.style.display = "inline-block";
textMessage.style.display = "none";
word.innerHTML = "Oops !! You have just popped the wrong balloon."
image2.style.display = "inline-block";
giphy.style.display = "inline-block";
reload.style.display = "none";
}
}

var count ;
startButton.addEventListener("click", () => {
   count = setInterval(displayTime , 1000);
   startButton.style.display = "none";
   this.addEventListener('click', (event) => {
if(event.target.className == 'balloon') {
    event.target.innerHTML = "Pop ! !";
    event.target.style.backgroundColor = "rgb(18, 114, 240)";
    score.innerHTML ++ ;
    popped ++ ;
    var pop = new Audio('../sound/pop.wav');
    pop.play();
    gameDecision();
}else if (event.target.className == 'boom'){
    event.target.innerHTML = "Boom ! !";
    event.target.style.backgroundColor = "rgb(18, 114, 240)";
    score.innerHTML -- ;
    boombed ++;
    var boom = new Audio('../sound/boom.wav');
    boom.play();
    gameDecision();
}
});
})
 
reload.addEventListener('click', () => {
    window.location.reload();
})


function gameDecision(){
    if(popped == 6 ){
        balloons.style.display = "none";
        text.style.display = "block";
        text.innerHTML = "You win!! All the balloons are popped ! !";
        clearInterval(count);
        play.style.display = "none";
        pause.style.display = "none";
        tryAgain.style.display = "inline-block";
        tryAgain.innerHTML = "Play Again";
        help.style.display = "inline-block";
        startButton.style.display = "none";
        inter.style.display = "none";
        credit.style.display = "none";
        playAgain.innerHTML = "Thank you for playing!"
        message.innerHTML = "You can click the button play again to start your game again! "
        image.style.display = "inline-block"
        giphy2.style.display = "inline-block"
        word.style.display = "inline-block"
        reload.style.display = "none";
        textMessage.style.display = "none";
        creator.style.display = "inline-block";
        var winner = new Audio("../sound/winner.wav");
        winner.play();
        gameSound.pause();
        loser.pause();
        timeOut.pause();
        

    }else if (boombed >= 3){
        balloons.style.display = "none";
        text.style.display = "block";
        text.innerHTML = "Oops! You lost!! Try Again ! !";
        clearInterval(count);
        play.style.display = "none";
        pause.style.display = "none";
        tryAgain.style.display = "inline-block";
        startButton.style.display ="none";
        credit.style.display = "none";
        inter.style.display = "none";
        help.style.display = "inline-block";
        playAgain.innerHTML = "Thank you for playing!"
        word.style.display = "inline-block";
        word.innerHTML = "Oops !! You have just popped the wrong balloon."
        message.innerHTML = "You can click the button try again to start your game again! "
        image2.style.display = "inline-block";
        giphy.style.display = "inline-block";
        textMessage.style.display = "none";
        reload.style.display = "none";
        creator.style.display = "inline-block";
        var loser = new Audio("../sound/loser.wav");
        loser.play();
        hints.style.display = "inline-block";
        gameSound.pause();
        timeOut.pause();
       
    }
}

var gameSound = new Audio("../sound/gamesound.mp3");

play.addEventListener("click", () => {
    gameSound.play();
    gameSound.loop = true;
    pause.style.display = "inline-block";
    play.style.display = "none";
})
pause.addEventListener("click", () => {
    gameSound.pause();
    gameSound.loop = false;
    pause.style.display = "none";
    play.style.display = "inline-block";
})
 tryAgain.addEventListener("click", () => {
     window.location.reload();
 })