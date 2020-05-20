
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

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  console.log(randomNumber);
}

var randomChosenColor = buttonColors[nextSequence() - 1];
gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

switch(randomChosenColor) {
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
    console.log(randomChoseColor);
}
