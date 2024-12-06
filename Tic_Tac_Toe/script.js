const cells = document.querySelectorAll("[data-cell]");
const winningMessageElement = document.getElementById("winningMessage");
const winnerText = document.getElementById("winnerText");
const restartButton = document.getElementById("restartButton");
let currentPlayer = "X";

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Start the game
function startGame() {
  cells.forEach((cell) => {
    cell.classList.remove("taken");
    cell.textContent = "";
    cell.addEventListener("click", handleClick, { once: true });
  });
  winningMessageElement.classList.remove("show");
  currentPlayer = "X";
}

// Handle a cell click
function handleClick(e) {
  const cell = e.target;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");

  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

// Check for a win
function checkWin(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].textContent === player;
    });
  });
}

// Check for a draw
function isDraw() {
  return [...cells].every((cell) => {
    return cell.textContent === "X" || cell.textContent === "O";
  });
}

// End the game
function endGame(draw) {
  if (draw) {
    winnerText.textContent = "Draw!";
  } else {
    winnerText.textContent = `${currentPlayer} Wins!`;
  }
  winningMessageElement.classList.add("show");
}

// Swap turns
function swapTurns() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Restart the game
restartButton.addEventListener("click", startGame);

// Initialize
startGame();
