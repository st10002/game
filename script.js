const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  let result = "";

  if (userChoice === computerChoice) {
    result = `Both chose ${userChoice}. It's a Draw!`;
  } else if (winMap[userChoice] === computerChoice) {
    result = `You chose ${userChoice}, computer chose ${computerChoice}. You Win!`;
  } else {
    result = `You chose ${userChoice}, computer chose ${computerChoice}. You Lose! `;
  }

  resultDiv.textContent = result;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
