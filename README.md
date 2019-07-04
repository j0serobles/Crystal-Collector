# Crystal-Collector


Crystal Collector is a simple game where the objective is to exactly match a random number between 1 and 120 by clicking on a set of four images, each one representing a random number between 1 and 12.

Here's how the app works:

   * There are four crystals displayed as buttons on the page.

   * The player is shown a random number at the start of the game.

   * When the player clicks on a crystal, it adds a specific amount of points to the player's total score. 

     * The game hides this amount until the player clicks a crystal.
     * When they do click one, the player's score counter is updated.

   * The player wins when their total score matches the random number from the beginning of the game.

   * The player loses when their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player will see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app shows the number of games the player wins and loses.  When the page is reloaded, these values start at 0 again. 
   
   The game is build using the following languages:
   * HTML
   * Javascript
   * Bootstrap
   * jQuery
   
   ### File directory structure:

```
+-- assets
|  +-- css
|  |  +-- style.css (Contains CSS styling)
|  +-- images       (Contains the image files for each crystal)
|  +-- javascript
|  |  +-- game.js   (Contains the game logic in Javascript)
+-- index.html      (Contains the HTML used in the page)
|
+-- README.md      (This file)
```

General app design:
An object oriented design was used for the game's objects and logic. Two objects provide all the functionality in javascript:
* UI() - Contains all the attributes and methods necessary to handle the user interface (HTML) elements, using plain javascript and jQuery calls. 
* Game() - Contains the attributes and methods for playing the game. Contains attributes for the gameState, the random score number, the value of each crystal and game counters.  The following methods provide the logic:
* Game() - constructor
* initGame() - initializes a game.
* playGame() - called whenever a play is made (a crystal is clicked).  Updates the game state accordingly.


