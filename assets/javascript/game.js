$(document).ready(() => {

var playerGuess = 0;
var playerWins = 0;
var playerLosses = 0;
var heartCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;
var perfect = "";

// Function to clear values at the start of the game
var gameStart = function () {
    playerGuess = 0;

    $("#heart, #blue, #green, #red, #player-guess, #perfect-number").empty();
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
    perfect = (Math.floor(Math.random() * (120-19)) + 19);
    $("#perfect-number").text(perfect);
}

// Winning function that adds 1 each time the player wins
var winning = function () {
    playerWins++;
    $("#player-wins").text(playerWins);
    gameStart();
    perfectNumber();
}

// Losing function that adds 1 each time the player loses
var losing = function () {
    playerLosses++;
    $("#player-losses").text(playerLosses);
    gameStart();
    perfectNumber();
}


$("#heart").on("click", function() { 
    playerGuess = playerGuess + heartCrystal;
    $("#player-guess").text(playerGuess);
    console.log(playerGuess);
    console.log(perfect);

    if (playerGuess === perfect) {
        winning();
    } else if (playerGuess > perfect) {
        losing();
    }
});

$("#blue").on("click", function() { 
    playerGuess = playerGuess + blueCrystal;
    $("#player-guess").text(playerGuess);
    console.log(playerGuess);
    console.log(perfect);

    if (playerGuess === perfect) {
        winning();
    } else if (playerGuess > perfect) {
        losing();
    }
});

$("#green").on("click", function() { 
    playerGuess = playerGuess + greenCrystal;
    $("#player-guess").text(playerGuess);
    console.log(playerGuess);
    console.log(perfect);

    if (playerGuess === perfect) {
        winning();
    } else if (playerGuess > perfect) {
        losing();
    }
});

$("#red").on("click", function() { 
    playerGuess = playerGuess + redCrystal;
    $("#player-guess").text(playerGuess);
    console.log(playerGuess);
    console.log(perfect);

    if (playerGuess === perfect) {
        winning();
    } else if (playerGuess > perfect) {
        losing();
    }
});

// Calling the functions
gameStart();
setCrystals();
perfectNumber();

});