function playerPlay() {
  /**This function asks the player to enter their play for the current round of the game**/
  let playerSelectionPrompt = prompt("Enter your selection for this Rock Paper Scissors round!");
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

function playGame() {
  /**This function plays 5 rounds of the game and keeps the scores**/
  let playerScore = 0;
  let computerScore = 0;
  let finalResult = ""
  let computerSelection
  let playerSelection
  let roundresult
  for (let i = 1; i <= 5; i++) {
    computerSelection = computerPlay()
    playerSelection = playerPlay()
    roundresult = playRound(playerSelection, computerSelection)
    if (roundresult == "Computer won!") {
      computerScore++
    } else if (roundresult == "Player won!") {
      playerScore++
    }
   printRoundResult(i, computerSelection, playerSelection, roundresult, computerScore, playerScore)
  }

  if (computerScore > playerScore) {
    console.log("The game is over, the computer has won!")
  } 
  else if (computerScore < playerScore) {
    console.log("The game is over, the player has won!")
  } 
  else {
    console.log("The game is over, it's a draw!")
  }

}
function printRoundResult(i, computerSelection, playerSelection, roundresult, computerScore, playerScore){
  /**This function outputs the results for the current round of the game to the console log**/
 console.log("Round " + i + ": The computer chose: " + Humanize(computerSelection) + "; The player chose: " + Humanize(playerSelection) + "; The result is: " + roundresult + ". The score is: " + computerScore + " for computer, and " + playerScore + " for player")
}
playGame()
