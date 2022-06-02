function playerPlay() {
  /**This function asks the player to enter their play for the current round of the game**/
  let playerBox = document.querySelector("#playerPlay")
  let playerSelectionPrompt = playerBox.value
  playerSelectionPrompt = playerSelectionPrompt.toLowerCase()
  let playerSelection = 0;
  switch (playerSelectionPrompt) {
    case "rock":
      playerSelection = 1;
      break;
    case "paper":
      playerSelection = 2;
      break;
    case "scissors":
      playerSelection = 3;
      break;
  }
  return Number(playerSelection);
 }

function computerPlay() {
  /**This function generates the computer's play for the current round of the game**/
  let computerSelection = Math.floor(Math.random() * 3) + 1;

  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  /**This function receives both the computer's and the player's plays and determines who have won the current round of the game**/
  let roundResult = ""
  let delta = Math.abs(computerSelection - playerSelection);
  if (playerSelection == computerSelection) {
    roundResult = "Draw";
  } else if (playerSelection > computerSelection) {
    if (delta == 1) {
      roundResult = "Player won!";
    } else {
      roundResult = "Computer won!";
    }
  } else {
    if (delta == 1) {
      roundResult = "Computer won!";
    } else {
      roundResult = "Player won!";
    }
  }
  return roundResult
}

function Humanize(selection) {
  /**This function converts the indexes of the plays (1 - rock, 2 - paper, 3 - scissors) into their names**/
  switch (selection) {
    case 1:
      return "rock"
      break;
    case 2:
      return "paper"
      break;
    case 3:
      return "scissors"
      break;
  }
}

function playGame(scores) {
  /**This function plays 5 rounds of the game and keeps the scores**/

  let finalResult = ""
  let computerSelection
  let playerSelection
  let roundresult
  scores[0]++
    computerSelection = computerPlay()
    playerSelection = playerPlay()
    roundresult = playRound(playerSelection, computerSelection)
    if (roundresult == "Computer won!") {
      scores[2]++
    } else if (roundresult == "Player won!") {
      scores[1]++
    }
   printRoundResult(scores[0], computerSelection, playerSelection, roundresult, scores[2], scores[1])
  
if (scores[0]>=5){
let scoreboard = document.querySelector("#scoreboard")
  if (scores[2] > scores[1]) {
    scoreboard.textContent =scoreboard.textContent + "\nThe game is over, the computer has won!"
  } 
  else if (scores[2] < scores[1]) {
    scoreboard.textContent =scoreboard.textContent + "\nThe game is over, the player has won!"
  } 
  else {
scoreboard.textContent =scoreboard.textContent + "\nThe game is over, it's a draw!"
  }
const playerbox = document.querySelector('#playerPlay')
playerbox.setAttribute('disabled','')
const playbtn = document.querySelector('#playRound')
playbtn.setAttribute('disabled','')
}

}
function printRoundResult(i, computerSelection, playerSelection, roundresult, computerScore, playerScore){
  /**This function outputs the results for the current round of the game to the console log**/
  let scoreboard = document.querySelector("#scoreboard");
 scoreboard.textContent=scoreboard.textContent + "Round " + i + ": The computer chose: " + Humanize(computerSelection) + "; The player chose: " + Humanize(playerSelection) + "; The result is: " + roundresult + ". The score is: " + computerScore + " for computer, and " + playerScore + " for player\n"
}

function newGame(scores){
const playerbox = document.querySelector('#playerPlay')
playerbox.value =""
playerbox.removeAttribute('disabled')
const playbtn = document.querySelector('#playRound')
playbtn.removeAttribute('disabled')
document.querySelector('#scoreboard').textContent=""
scores = [0, 0, 0]
}

let scores=[0 , 0, 0];
const newGameBtn = document.querySelector("#newGame")
newGameBtn.addEventListener('click', ()=>{newGame(scores)})
const playBtn = document.querySelector("#playRound")
playBtn.addEventListener('click', ()=>{playGame(scores)})
