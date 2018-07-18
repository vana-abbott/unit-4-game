var target = Math.floor(Math.random() * 102) + 19;
var userTotal = 0; 
var wins = 0; 
var losses = 0; 
var gems = $("#gems").children();
var gemValues = {};
var colors = ["blue", "green", "red", "yellow"];
$("#randomNumber").text(target);


function setGemValues(){
    for(var color of colors){
        gemValues[color] = Math.floor(Math.random() * 12 + 1);
    }
}

setGemValues();
$("#wins").text(wins); 
$("#losses").text(losses);
// This will hold all of the user's score and total points. Now grab it in text with jQuery
// Added the random number var so user can guess // 
function reset() {
    target = Math.floor(Math.random() * 102) + 19;
    userTotal = 0; 
    
    $("#randomNumber").text(target);
    $("#finalScore").text(userTotal);
    setGemValues();
}
// Above I added reset function to start,reset game, and make the random numbers guess while including jQuery to 
// display random number and final score onto display 
function winner() {
    wins++;
    $("#wins").text(wins); 
    reset();
}

function loser() {
    losses++;
    $("#losses").text(losses);
    reset();
}

// Functions here is if user loses or wins while incrementing either one.
// Jquery will follow after to add a tally and reset the whole game.
// Below add click buttons for crystals, make sure to add up each time you click
function calculateScore() {
    if (userTotal === random) {
        winner();
        $("#wins").text(wins);
        console.log(wins);
    } else if (userTotal > random) {
        losses();
        $('#losses').text(losses);
        console.log(losses)
    }


}
// Below create win losses with if else to see if their score matches up or not with randomNumber// 
$('#blue').on ('click', function() {
    userTotal = userTotal + gemValues.blue;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal); 
    if (userTotal === target){
       winner();
    } else if ( userTotal > target) {
       loser();
    }
  });

 $("#green").on ('click', function() {
    userTotal = userTotal + gemValues.green;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal); 
    if (userTotal === target){
       winner();
    } else if ( userTotal > target) {
       loser();
    }
  });

 $("#red").on ('click', function() {
    userTotal = userTotal + gemValues.red;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal);
    if (userTotal === target){
       winner();
    } else if ( userTotal > target) {
       loser();
    }
  });   

 $("#yellow").on ('click', function() {
    userTotal = userTotal + gemValues.yellow;
    console.log("New userTotal= " + userTotal);
    $('#finalScore').text(userTotal); 
    if (userTotal === target){
       winner();
    } else if ( userTotal > target) {
       loser();
    }
  });   
