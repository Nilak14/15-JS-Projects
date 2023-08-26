const button = document.querySelector('#guess')
const guessInputElement = document.querySelector('#guess-input')
let randomNum = Math.floor((Math.random() * 100) + 1)
let userGuesses = []
let guessRemaining = 7;
showRemainingGuess(guessRemaining)

// Submit guess when enter key is pressed from keyboard
guessInputElement.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Enter') {
        let userInputValue = parseInt(guessInputElement.value);
        validateUserInput(userInputValue);
        guessInputElement.value = ''
    }
})

button.addEventListener('click', () => {
    let userInputValue = parseInt(guessInputElement.value);
    validateUserInput(userInputValue);
    guessInputElement.value = ''
})

// Check if the user input is valid or not and also check the remaining guesses.
function validateUserInput(userInput) {
    if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
        alert("Please Enter a value between 1-100 only")
    }
    else {
        userGuesses.push(userInput)
        showUserInput(userGuesses);
        checkRandomNum(userInput)
    }
    if (guessRemaining === 0) {
        showMessage(" ")
        newGameMsg(`You Loose!! The number was ${randomNum}`)
        endGame()
    }

}

// check if the user input is equal or greater or lower than the random number
function checkRandomNum(userInput) {
    if (userInput > randomNum) {
        showMessage('Your Guessed number is greater')
        guessRemaining--
        showRemainingGuess(guessRemaining)

    }
    else if (userInput < randomNum) {
        showMessage('Your Guessed number is lower ')
        guessRemaining--
        showRemainingGuess(guessRemaining)

    }
    else if (userInput === randomNum) {
        showMessage(" ")
        newGameMsg(`You Won!! You Guessed the right number:  ${randomNum}`)
        endGame()
    }
}

// update the user if they have enter a greater or lower number
function showMessage(message) {
    document.querySelector('.r-js').innerText = message;
}

// shows all the previous guesses of the user
function showUserInput(userGuess) {
    document.querySelector('.previous-guess').innerText = userGuess;
}

// shows how many guesses are remaining for the user
function showRemainingGuess(remainingGuess) {
    document.querySelector('.remaining-guess').innerText = remainingGuess;
}

// show message of the win or loose
function newGameMsg(message) {
    document.querySelector('.text').innerText = message;
}

document.querySelector('.playGame').addEventListener('click', () => {
    startGame()
})


// function to start the game after game ends
function startGame() {
    randomNum = Math.floor((Math.random() * 100) + 1)
    document.querySelectorAll('.container').forEach((container) => {
        container.classList.remove('active')
    })
    document.querySelector('.restartGame').classList.add('none');
    button.disabled = false;
    guessInputElement.disabled = false;
    guessRemaining = 7;
    showRemainingGuess(guessRemaining)
    userGuesses = []
    showUserInput(userGuesses)

}

// function to end the game after user looses or wins
function endGame() {
    document.querySelectorAll('.container').forEach((container) => {
        container.classList.add('active')
    })
    document.querySelector('.restartGame').classList.remove('none');
    guessInputElement.value = " "
    button.disabled = true
    guessInputElement.disabled = true
}