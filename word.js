// Word constructor

var Letter = require("./letter");

var Word = function(letters) {
	this.letters = letters;

	// An array of new Letter objects representing the letters of the underlying word
	this.show = function() {
		var letterString = "";
		for (var i = 0; i < this.letters.length; i++) {
			letterString += this.letters[i].showCharacter() + " ";
		}
		return console.log(letterString);
	};

	// A function that returns a string representing the word. This should call the function on each letter object
	//(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	this.trueCharacter = function(characterGuessed) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].trueCharacter(characterGuessed);
		}
	};

	// A function that takes a character as an argument and calls the guess function on each letter object 
	//(the second function defined in Letter.js)
	this.finishedWord = function() {
		for (var i = 0; i < this.letters.length; i++) {
			if (!this.letters[i].guessedStatus()) {
				return false;
			}
		}
		return true;
	};
};

module.exports = Word;