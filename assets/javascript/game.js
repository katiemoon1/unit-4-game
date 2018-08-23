$(document).ready(() => {

var playerGuess = 0;
var playerWins = 0;
var playerLosses = 0;
var heartCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;
var perfect = 0;

// Function to clear values at the start of the game
var gameStart = function () {
    playerGuess = 0;

    $("#heart, #blue, #green, #red, #player-guess").empty();
}

// Function to set the values of the crystals
var setCrystals = function () {
    heartCrystal = Math.floor(Math.random() * 13);
    blueCrystal = Math.floor(Math.random() * 13);
    greenCrystal = Math.floor(Math.random() * 13);
    redCrystal = Math.floor(Math.random() * 13);
}

// Function to create the desired value
var perfectNumber = function perfectNumber() {
    var min = Math.ceil(19);
    var max = Math.floor(120);
    var perfect = (Math.floor(Math.random() * (120-19)) + 19);
    $("#perfect-number").append(perfect);
}

// If/Else statement for keeping score
var checking = function () {
    if (playerGuess === perfectNumber) {
        $("#player-wins").append(playerWins++)
    }
    else if (playerGuess >= perfectNumber) {
        $("#player-losses").append(playerLosses++)
    }};

// Calling the functions
gameStart();
setCrystals();
perfectNumber();

});