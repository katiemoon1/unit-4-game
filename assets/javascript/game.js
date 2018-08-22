$(document).ready(() => {

var playerGuess = 0;
var playerWins = 0;
var playerLosses = 0;
var reachPerfectNumber = false;

// Attempt to create one method for the images 
$("img").on("click", function() {
    var crystalValue = ($(this).attr(Math.floor(Math.random() * 13)));
    crystalValue = parseInt(crystalValue);
    playerGuess += crystalValue;
    $("#player-guess").append(playerGuess);
});

// Console log of the random numbers created for each crystal image
$("#heart").on("click", function(){
    console.log(Math.floor(Math.random() * 13))
});
$("#blue").on("click", function(){
    console.log(Math.floor(Math.random() * 13))
});
$("#green").on("click", function(){
    console.log(Math.floor(Math.random() * 13))
});
$("#red").on("click", function(){
    console.log(Math.floor(Math.random() * 13))
});


var perfectNumber = function perfectNumber(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    $("#perfect-number").append(Math.floor(Math.random() * (120-19)) + 19);
    $("#perfect-number").text(perfectNumber);
}



});