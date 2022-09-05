/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/




//define function for winning number


//record the turn the players is on starting at 1

//record the guess so player can see previous guesses

//check if guess is correct
    // if correct display winning message
        //stop player from guessing more
        //allow reset of game
    //if guess is wrong with turns left
        //tell player guess is wrong
        //allow them to guess again
        //calculate turn number
    //if guess is wrong with no turns left
        //tell player game is over
        //stop player from guessing more
        //allow reset of game


//set winning number
let randomNumber = Math.floor(Math.random() * 100) + 1;
//set variables to connect js elements to html
const guess = document.querySelector('.guess');
const lastResult = document.querySelector('.lastResult');
const numDirection = document.querySelector('.numDirection');const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const startNewGame = document.querySelector('.playAgain')

let guessCount = 1;
let resetButton;

//define function to check guess
function checkGuess() {
let userGuess = Number(guessField.value);
//if statement that shows previous guesses
if (guessCount === 1) {
guess.textContent = 'Previous guesses: ';
}
guess.textContent += userGuess + ' ';
//if statement if correct number is guessed
if (userGuess === randomNumber) {
lastResult.textContent = 'Correct! You win!!';
setGameOver();
//if 5 guesses have been made game is over
} else if (guessCount === 5) {
lastResult.textContent = 'GAME OVER';
setGameOver();
} else {
//mesage if guess is wrong
lastResult.textContent = 'Wrong!';
if(userGuess < randomNumber) {
//message if guess is too low
numDirection.textContent = 'Too Low!';
//message is guess is too high
} else if(userGuess > randomNumber) {
numDirection.textContent = 'Too High!';
}
}

guessCount++;
guessField.value = '';
}
// add listener when guess is made
guessSubmit.addEventListener('click', checkGuess);

//disable guessing after 5 guesses have been made
function setGameOver() {
guessField.disabled = true;
guessSubmit.disabled = true;
}

//reset game 

