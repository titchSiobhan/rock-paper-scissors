function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
   const randomIndex = Math.floor(Math.random() * choice.length);
   console.log('Computer ' + choice[randomIndex])
   return choice[randomIndex];
}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let humanChoice = document.querySelector('.humanChoice');



function getHumanChoice(event) {
     const clickedElement = event.target;

     if (clickedElement === rock) {
        console.log('Rock')
        return 'Rock';
     } else if (clickedElement === paper) {
        console.log('Paper')
        return 'Paper';
    } else if (clickedElement === scissors) {
        console.log('Scissors')
        return 'Scissors';
    } else {
        return null;
    }
}

let computerScore = 0;
let humanScore = 0;

const win = () => {
console.log('Win');
return;
};

const lose = () => {
console.log('You lose');
return;
};

const draw = () => {
console.log('Draw');
return;
};



function playRound(getHumanChoice, getComputerChoice) {
    

    //draw
    
    if (getHumanChoice === getComputerChoice) {
        draw();
        return 'Draw';
    }

    if ((getHumanChoice === 'Rock' && getComputerChoice === 'Scissors') ||
    (getHumanChoice === 'Paper' && getComputerChoice === 'Rock')  || (getHumanChoice === 'Scissors' && getComputerChoice === 'Paper')) {
        win();
        humanScore++;
        return 'Win';
    } 

    lose();
    computerScore++;
    return 'Lose';
}

function scoreTotal() {
    return `Human Score ${humanScore}: Computer Score ${computerScore}`
}
function gameOver() {
  if (humanScore === 5) {
    return 'Game over: You win!';
  } else if (computerScore === 5) {
    return 'Game over: You lose';
  }
  return null;
} 
function game(event) {
  const humanMove = getHumanChoice(event);
  const computerMove = getComputerChoice();
  const result = playRound(humanMove, computerMove);

  // update scores and result on page
  document.querySelector('#humanScore').innerHTML = humanScore;
  document.querySelector('#computerScore').innerHTML = computerScore;
  document.querySelector('#win').innerHTML = result;

  // check for game end and show message in DOM if needed
  const gameEnd = gameOver();
  const gameOverEl = document.querySelector('#gameOver');
  if (gameEnd && gameOverEl) {
    gameOverEl.textContent = gameEnd;
  } else if (gameOverEl) {
    gameOverEl.textContent = ''; // clear if not over yet
  }

  console.log(scoreTotal());
  return result;
}

humanChoice.addEventListener('click', game);


const reset = document.querySelector('.reset');

const resetScore = () => {
  humanScore = 0;
  computerScore = 0;

  // clear displayed results
  document.querySelector('#humanScore').innerHTML = humanScore;
  document.querySelector('#computerScore').innerHTML = computerScore;
  document.querySelector('#win').innerHTML = '';
  const gameOverEl = document.querySelector('#gameOver');
  if (gameOverEl) gameOverEl.textContent = '';
  console.log(scoreTotal());
};
reset.addEventListener('click', resetScore);



//change scores on html

document.querySelector('#humanScore').innerHTML=humanScore;

document.querySelector('#computerScore').innerHTML=computerScore;





