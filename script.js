function playGame(playerChoice) {
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);
let resultDisplay = document.getElementById("result");
if (playerChoice === computerChoice) {
resultDisplay.textContent = "It's a tie! Both choose " + playerChoice;
} else if (
(playerChoice === 'rock' && computerChoice === 'scissors') ||
(playerChoice === 'paper' && computerChoice === 'rock') ||
(playerChoice === 'scissors' && computerChoice === 'paper')
) {
resultDisplay.textContent = "You win! " + playerChoice + " beats " + computerChoice;
} else {
resultDisplay.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
    }
}

