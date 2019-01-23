// Imports Word constructor from word.js

var Word = require("./word.js");

// Require for inquirer npm
var inquirer = require("inquirer");

// Global variables

var alreadyGuessed = false; // true if user already guessed this letter
var chosenWord; // randomly selected word the user will guess
var guessesLeft = 10; 
var guessedLetters = ["You have guessed: "];
var guessedRight = false; // true if user guesses correct letter
var userGuess;
var win = false;
var wordChoices = ["gibson", "fender", "harmony", "silvertone", "kay", "g and l", "esp", "epiphone", "ibanez"];
var wordMatches = true; // true if user guesses word

runGame();

// game logic

function runGame() {
    console.log("Welcome! This game will choose the right guitar for you.");

    var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //console.log(word);

    //runs Word constructor
    chosenWord = new Word(word);
    chosenWord.makeWord();

    //displays word as underscores
    var newWord = [];
    for (var i = 0; i < chosenWord.letterArray.length; i++) {
        if (chosenWord.letterArray[i] == " ") {
            newWord.push(" ");
        } else {
            newWord.push("_");
        }
    }
    console.log(blankWord.join(" ")+ "\n");

    // Prompts user to guess a letter
    promptUser();
}

function promptUser() {
    inquirer.prompt([
        {
            message: "Guess a letter!",
            name: "userguess"
        }
    ]).then(function(answer) {
        // Convert to lowercase
        userguess = answer.userguess.toLowerCase();

        // Display guessed letter
        console.log("You guessed: " + userguess);

        // checks if this letter was already guessed
        for (var i = 0; i < guessedLetters.length; i++) {
            if (userguess = guessedLetters[i]) {
                console.log("You've already guessed this letter");
                alreadyGuessed = true;
                break;
            }
        }

        // Value corresponds to res from word.js
        guessedRIght = chosenWord.showGuess(userguess);

        //updates guessed letter array and remaining guesses
        if (alreadyGuessed == true) {
            // user already guessed this letter
            alreadyGuessed = false;
        } else if (guessedRight == false) {
            //user guessed incorrect letter
            guessesLeft--;
            guessedLetters.push(userguess);
        } else {
            // user has guessed a (new) correct letter
            guessedLetters.push(userguess);
            guessedRight = false;
        }

        // sort already guessed letters alphabetically and display them
    })
}

