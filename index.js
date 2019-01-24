// npm for Inquire, require for Word and Letter constructors
var Inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter");

// Variables to store arrays (both for guessed and already guessed) and guesses counter.
var guessedLetterArray = [];
var previouslyGuessed = [];
var totalGuesses = 15;

// Word bank and Math methods to randomize selection.
var wordBank = ["fender", "gibson", "ibanez", "epiphone", "squier", "esp", "kramer", "jackson", "washburn", "reverend", "harmony", "kay", "silvertone"];
var randomIndex = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[randomIndex];

// Randomly selects a word and uses the Word constructor to store it
for(var i = 0; i < randomWord.length; i++) {
    guessedLetterArray.push(new Letter(randomWord.charAt(i)));
}

var currentWord = new Word(guessedLetterArray);

// Prompts the user for each guess and keeps track of the user's remaining guesses
var queryUser = function() {
    if (totalGuesses > 0) {
        var wordDisplay = currentWord.show();

        console.log("You have " + totalGuesses + " guesses remaining.");

        Inquirer.prompt([
            {
                name: "letter",
                message: "Choose a letter to see what guitar you're going to use for the gig tonight!"
            }
        ]).then(function(userInput){
            
            var guessedLetter = userInput.letter.toLowerCase();

            var alreadyGuessed = false;
            for (var i = 0; i < previouslyGuessed.length; i++) {
                if (guessedLetter === previouslyGuessed[i]) {
                    alreadyGuessed = true;
                    break;
                }
            }

            if(alreadyGuessed) {
                console.log("This letter was already guessed.");
            } else {
                totalGuesses--;
                previouslyGuessed.push(guessedLetter);
                currentWord.trueChar(guessedLetter);
            }

            if(currentWord.finishedWord()) {
                console.log("♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫")
                console.log("\nCongrats, you guessed the word correctly! Enjoy your new axe!");
                console.log("\n♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫")
                return;
            }

            queryUser();
        });
    } else {
        console.log("You've used all your guesses.")
    }
};

queryUser();