 // GLOBALS:global variables

 function UI() {
   this.updatePage = function() {
    $("#score_span").text("Score="    + currentGame.randomNumber);
    $("#wins_div").text("Wins : "     + currentGame.wins); 
    $("#losses_div").text("Losses : " + currentGame.losses); 
    $("#user_score").text(currentGame.userScore);

   }
 }
///////////////////////////////////////////////////////////////////////////
// Constructor for Game object.
// The Game() object has the attributes and methods needed
// for playing the Crystal collector game.
// Clicking any of the 4 crystals calls the playGame() function to keep 
// adding the points from the crystal to the user's running score. 
// The game ends when:
// -- The user arrives exactly at the points in game's random number (a win).
// -- The user surpasses the game's random number (a loss) .
///////////////////////////////////////////////////////////////////////////
function Game(theme) {

  /////////////////////////
  // Attributes:
  /////////////////////////
  
  this.gameState = "stopped" ; // The game state.  Used for knowing when to start or end.
  this.randomNumber   = 0;     // The game's random number.
  this.userScore      = 0;     // The current score
  this.wins           = 0;     // How many wins
  this.losses         = 0;     // How many losses
  this.crystalValue   = [0,0,0,0,0];

  /////////////////////////////////////////////////////////////////////////////
  this.initGame =  function() {
    //Sets the Game's state to its initial state
    // Generate the random number between 19 and 120
    this.randomNumber =  (Math.floor(Math.random() * 101) + 19); // Range is 19-120 inclusive

    //Update each element of this.crystalValue with a random number from 1 to 12
    for (var i=1; i < this.crystalValue.length; i++) {
      this.crystalValue[i] = (Math.floor(Math.random() * 11) + 1)      // Range is 1-12 inclusive
    }

    this.userScore     = 0; 
    this.gameState     = "started"; 
    userInterface.updatePage();
  }
  /////////////////////////////////////////////////////////////////////////////
  this.playGame = function(crystalIndex) {

    //A crystal has been clicked on.  Increase the user's score by the amount
    //and check for game-ending condition.
    
    if (this.gameState = "started") {

      this.userScore += this.crystalValue[parseInt(crystalIndex)];

      if (this.userScore === this.randomNumber) {
        //User wins!
        this.wins++;
        this.gameState = "ended";
      }
      else if ( this.userScore > this.randomNumber) {
        //User lost the game!
        this.losses++;
        this.gameState = "ended";
      }

      userInterface.updatePage(); 
      
      // //After game is over, click anywhere in the html body to restart game.
      // var saveThis = this;
      // $("body").keyup(function() {
      //   saveThis.initGame();
      // }); 

    }
  }

} // End Of Game() constructor


//CALLS:
/////////////////////////////////////////////////////////////////////////////////////////////
// When page is loaded, create the game and wait for a key input.

var currentGame   = new Game(); 
var userInterface = new UI(); 
  
currentGame.initGame();
 

$("#crystal1").on("click", function() {
  //Call playGame() in the Game object, passing the value attribute from the crystal div clicked on.
  currentGame.playGame( $(this).attr("value"));
}); 

$("#crystal2").on("click", function() {
  currentGame.playGame($(this).attr("value"));
});

$("#crystal3").on("click", function() {
  currentGame.playGame($(this).attr("value"));
});

$("#crystal4").on("click", function() {
  currentGame.playGame($(this).attr("value"));
});


