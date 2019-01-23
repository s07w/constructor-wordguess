//Letter constructor

var Letter = require("./letter.js");

// Word constructor
function Word(word) {
    //Word and array letters in word
    this.word = word;
    this.letterArray = word.split("");
    this.letterObjectArray = [];
    this.currentGuess = [];
    this.res = false;

    this.makeWord = function() { 
        // runs Letter constructor for each letter of word
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterObjectArray[i] = new Letter(this.letterArray[i]);
        }
    };

    this.displayGuess = function(userGuess) {
        // Triggers result function for guessedRight in index.js
        var guessedRight = false;

        // Updates and displays the user's current guesses
        for (var i = 0; i < this.letterArray.length; i++) {
            // checks user's guess
            guessedRight = false;

            // Updates and displays the user's current guessing progress
            for (var i = 0; i < this.letterArray.length; i++) {
                //Checks if user guess is correct
                guessedRight = this.letterObjectArray[i].returnLetter();
            }

            // If guess is correct, results are invoked.
            if (guessedRight == true) {
                this.res = true;
            }
        }
    }

    // Results logic

    if(this.res == true) {
        //User guessed correct letter
        console.log("Correct!");
        console.log("Current guess: " + this.currentGuess.join(" ") + "\n");
        return false;
    }

};