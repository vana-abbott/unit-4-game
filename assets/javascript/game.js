var random = Math.floor(Math.random()*102)+19;
var userTotal = 0; 
var wins = 0; 
var losses = 0; 
$("wins").html(wins); 
$("losses").html(losses);
// This will hold all of the user's score and total points. Now grab it in HTML with jQuery
// Added the random number var so user can guess // 
function reset(){
    random = Math.floor(Math.random*101)+19
    userTotal = 0; 
    console.log(random);
    $("#randomNumber").html(random);
    $("#finalScore").html(userTotal);
}
// Above I added reset function to start,reset game, and make the random numbers guess while including jQuery to 
// display random number and final score onto display 
function winner(){
    wins++;
    $("wins").text(wins); 
    reset();
}
function losses(){
    losses++;
    $("losses").text(losses);
    reset();
}
// Functions here is if user loses or wins while incrementing either one.
// Jquery will follow after to add a tally and reset the whole game.
// Below add click buttons for crystals, make sure to add up each time you click 
// Use if/else to included win/lose functions

$(document).ready(function()