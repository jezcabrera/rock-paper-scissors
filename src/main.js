const choices = ["rock", "paper", "scissors"];

const choiceImages = {
  rock: "src/assets/rock.png",
  paper: "src/assets/paper.png",
  scissors: "src/assets/scissors.png",
};

const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay"),
  computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

// function that will allow the user to play the game
// will store the user move data through playerChoice
function playGame(playerChoice) {
  // variable for storing computer move data
  // generate random number between 0 and 2 (based on choices array length)
  // assign choices data to computerChoice for referencing
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if(playerChoice === computerChoice){
    result = "It's a draw!";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = computerChoice === "paper" ? "You lose!" : "You win!";
        break;
      case "paper":
        result = computerChoice === "scissors" ? "You lose!" : "You win!";
        break;
      case "scissors":
        result = computerChoice === "rock" ? "You lose!" : "You win!";
        break;
    }
  }

  // display corresponding images to ui
  computerImageDisplay.src = choiceImages[computerChoice];
  playerImageDisplay.src = choiceImages[playerChoice];
  computerImageDisplay.alt = computerChoice;
  playerImageDisplay.alt = playerChoice;
  
  // reset result text color
  resultDisplay.classList.remove("text-slate-600", "text-emerald-600", "text-rose-600", "text-yellow-600");
  // change result text color
  switch(result){
    case "You win!":
      resultDisplay.classList.add("text-emerald-600");
      playerScore++;
      playerScoreDisplay.textContent = `Score: ${playerScore}`;
      break;
    case "You lose!":
      resultDisplay.classList.add("text-rose-600");
      computerScore++;
      computerScoreDisplay.textContent = `Score: ${computerScore}`;
      break;
    case "It's a draw!":
      resultDisplay.classList.add("text-yellow-600");
      break;
  }

    // display result text
  resultDisplay.textContent = result;
}
