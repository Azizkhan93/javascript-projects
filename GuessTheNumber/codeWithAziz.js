const RandomNumber = parseInt(Math.random()*100+1)

// console.log(Random);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


const p = document.createElement("p")


let prevGuess = []
let numGuess = 1;

let playGame = true;


if(playGame)
{
    submit.addEventListener('click', function(e){
        e.preventDefault();
         const guess = parseInt(userInput.value)
         console.log(guess);
         validateGuess(guess);
         
    } )
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid Number');
    }
    else if(guess < 1)
    {
        alert("please enter a number greater then 1")
    }
    else if(guess > 100)
    {
        alert("please enter a number less then 100")
    }
    else
    {
        prevGuess.push(guess)

        if(numGuess === 11)
        {
           displayGuess(guess)
         displayMessage(`game over. Random number was ${RandomNumber}`);
         endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }

}

function checkGuess(guess)
{
    if(guess === RandomNumber)
    {
        displayMessage(`you guessed it right`)
        endGame();
    }
    else if(guess < RandomNumber)
    {
        displayMessage(`Number is to low`)

    }
    else if(guess > RandomNumber)
    {
        displayMessage('number is to high')
    }

}


function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 -numGuess}`;

}
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start your New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();

}



function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        RandomNumber = parseInt(Math.random()*100 +1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        userInput.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    })

}