// Letter constructor

var Letter = function(character) {
	this.character = character;
	// A boolean value that stores whether that letter has been guessed yet
	this.letterCorrect = false;
	this.showChar = function () {
		// A function that returns the underlying character if the letter has been guessed, or a placeholder
		//  (like an underscore) if the letter has not been guessed
		if(this.letterCorrect) {
			return this.character;
		} else {
			return "_";
		}
	};
	// A function that takes a character as an argument and checks it against the underlying character, 
	// updating the stored boolean value to true if it was guessed correctly
	this.trueChar = function(guessCharacter) {
		if(guessCharacter == this.character) {
			this.letterCorrect = true;
		}
	};
	this.guessedStatus = function() {
		return this.letterCorrect;
	};
};

module.exports = Letter;