// Arrays for colour patterns.
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;
var started = false;
// Generate next in sequence
function nextSequence () {
    userClickedPattern = []; 
    //increment level
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    //record sequence
    gamePattern.push(randomChosenColour);
    //flash button
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //play sound
    playSound(randomChosenColour);

};

//Add next colour to userClickedPattern array on click and play associated sound.
$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    //record user choices
    userClickedPattern.push(userChosenColour);
    //call sound
    playSound(userChosenColour);
    //call animation
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

//plays associated Sound for both user clicks and auto-generated sequence.
function playSound(name) {
    var audio = new Audio("./sounds/" + name + '.mp3');
    audio.play();
}
// Adds animation to user clicked buttons
function animatePress(currentColour) {
    var currentColour = $("#" + currentColour);
    currentColour.addClass("pressed");
    setTimeout(function(){
        currentColour.removeClass("pressed");
    }, 100)
};

//Starts game.
$("body").on("keypress", function(){
   if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
   }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {       
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
                $("#level-title").text("Level " + level);
            }, 1000);
            
            
        }
    }
    else {
        console.log("Wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200);
        startOver();
        
        }
        
};

function startOver() {
            level = 1;
            gamePattern = [];
            started = !started;
    } 


