$(document).ready(() => {

var playerGuess = 0;
var perfectNumber = 0;
var playerWins = 0;
var playerLosses = 0;
var reachPerfectNumber = false;

function initializeGame () {
    playerGuess = "";
    perfectNumber = "";
    reachPerfectNumber = false;

    $("#heart, #blue, #green, #red, #player-guess").empty();
}


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






});