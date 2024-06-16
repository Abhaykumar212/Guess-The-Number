let RandomNumber = parseInt(Math.random() * 100 + 1)
let userInput = document.getElementById('text')
let submit = document.getElementById('submit')
let userGuesses = document.getElementById('guesses')
let remaining = document.getElementById('remaining')
let lowOrHigh = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultPara');

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please Enter a Valid Number")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${RandomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === RandomNumber){
        displayMessage(`Congrats🎉 You Guessed it Right`)
        endGame()
    }
    else if(guess < RandomNumber){
        displayMessage(`Your Number is Too small`)
    }

    else if(guess > RandomNumber){
        displayMessage(`Your Number is Too Large`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    userGuesses.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    playGame = false;
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "new"> Start New Game</h2>`
    startOver.appendChild(p);
    newGame()
}

function newGame(){
    const newGameButton = document.getElementById('new');
    newGameButton.style.cursor = 'pointer'
    newGameButton.style.backgroundColor = '#1e6a5b'
    newGameButton.style.paddingLeft = '46px'
    newGameButton.style.border = '1px solid #1e6a5b'
    newGameButton.style.borderRadius = '15px'
    newGameButton.style.marginTop = '9px'
    newGameButton.style.marginBottom = '16px'
    
    newGameButton.addEventListener('click', (e)=>{
        RandomNumber = parseInt(Math.random() * 100 + 1)
        numGuess = 1;
        prevGuess = [];
        userGuesses.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')

        playGame = true;
    })
}