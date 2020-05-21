var userClickedPattern = [];
var gameStarted = false;
var level = 0;
var gamePattern = [];

var redSound = new Audio("sounds/red.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var greenSound = new Audio("sounds/green.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");

var buttonColors = [
  "red",
  "blue",
  "green",
  "yellow"
];

function playSound(name) {
  switch(name) {
    case "red":
      redSound.play();
    break;
    case "blue":
      blueSound.play();
    break;
    case "green":
      greenSound.play();
    break;
    case "yellow":
      yellowSound.play();
    break;
    default:
      console.log(randomChosenColor);
  }
}

function animatePress(currentColor) {
  $("btn").addClass("pressed");

  setTimeOut(function() {
    $("btn").removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var randomChosenColor = buttonColors[randomNumber - 1];
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);
  $("h1").text("Level " + ++level);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(".btn").click(function() {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
});

$("body").on("keydown", function() {
  if(gameStarted == false) {
    nextSequence();
    gameStarted = true;
    $("h1").text("Level " + level);
  }
});
