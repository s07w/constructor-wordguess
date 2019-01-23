// Compares user's guess to the correct answer, and displays the result 

function Letter(answer) {
    this.answer = answer;
    this.guessed = false;
    this.returnLetter = function () {
        // Returns letter if guess is correct, otherwise returns "_".
        if (this.guessed == true) {
            return answer;
        } else {
            return "_";
        }
    }

    this.checkGuess = function(guess) {
        // This returns a value depending on whether the user's guess is correct
        // Updates status of letter (guessed/not guessed)
        if (this.guessed == true) {
            this.guessed = true;
            return false;
        } else if (correctLetter == " ") {
            this.guessed = true;
            return false;
        } else if (guess == correctLetter) {
            this.guessed = true;
            return true;
        } else {
            this.guessed = false;
            return false;
        }
    };

}

module.exports = Letter;