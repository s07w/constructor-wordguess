// letter constructor
class Letter {
    constructor(letter) {
        this.letter = letter;
        this.placeholder = "_";
        this.status = false;
    }

    //checks every letter in word and returns letter or underscore
    checkGuess() {
        if (this.status) {
            return this.letter;
        }
        else {
            return this.placeholder;
        }
    }

    // takes a letter as a guess and checks it against each letter of the word
    takeGuess() {
        if (this.letter === guess) {
            this.status = true;
        }
    }
}

module.exports = Letter;