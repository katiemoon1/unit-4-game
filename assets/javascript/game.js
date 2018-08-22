$(document).ready(() => {

var playerGuess = 0;
var playerWins = 0;
var playerLosses = 0;
var heartCrystal =0;
var blueCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;

// Function to clear values at the start of the game
var gameStart = function () {
    heartCrystal = "";
    blueCrystal = "";
    greenCrystal = "";
    redCrystal = "";
    playerGuess = 0;

    $("#heart, #blue, #green, #red, #player-guess").empty();

}

var perfectNumber = function perfectNumber(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    $("#perfect-number").attr(Math.floor(Math.random() * (120-19)) + 19);
    $("#perfect-number").text(perfectNumber);
}

// If/Else statement for keeping score, needs to be included in game function
if (playerGuess === perfectNumber) {
    $("#player-wins").append(playerWins++)
}
else if (playerGuess >= perfectNumber) {
    $("#player-losses").append(playerLosses++)
}

});