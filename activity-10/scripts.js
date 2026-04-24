/**
 * PART A: localStorage Demonstrations
 */
console.log(" Part A: localStorage Demos ");

// 1. setItem and getItem
localStorage.setItem('demo_name', 'Player One');
console.log("Stored name:", localStorage.getItem('demo_name'));

// 2. Objects and JSON Serialization
const playerStats = { wins: 5, losses: 2 };
localStorage.setItem('demo_stats', JSON.stringify(playerStats));

const retrievedStats = JSON.parse(localStorage.getItem('demo_stats'));
console.log("Parsed Object:", retrievedStats);

// 3. removeItem
localStorage.removeItem('demo_name');
console.log("Name after removal:", localStorage.getItem('demo_name')); 


/**
 * PART B & C: Game State & Storage Integration
 */
let gameState = {
    board: Array(9).fill(""),
    currentPlayer: "X",
    gameActive: true,
    winner: null
};

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const STORAGE_KEY = 'tictactoe-game-state';

function saveGameState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        gameState = JSON.parse(saved);
        updateUI();
    }
}

function handleCellClick(e) {
    const clickedCell = e.target;
    const index = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState.board[index] !== "" || !gameState.gameActive) return;

    makeMove(index);
}

function makeMove(index) {
    gameState.board[index] = gameState.currentPlayer;
    checkResult();
    
    if (gameState.gameActive) {
        gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
    }
    
    saveGameState();
    updateUI();
}

function checkResult() {
    let roundWon = false;
    let winningLine = null;

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState.board[a] && gameState.board[a] === gameState.board[b] && gameState.board[a] === gameState.board[c]) {
            roundWon = true;
            winningLine = condition;
            break;
        }
    }

    if (roundWon) {
        gameState.winner = gameState.currentPlayer;
        gameState.gameActive = false;
        highlightWinner(winningLine);
        return;
    }

    if (!gameState.board.includes("")) {
        gameState.gameActive = false;
        gameState.winner = "Draw";
    }
}

/**
 * PART D: UI Update Functions
 */
const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

function updateUI() {
    // Update board cells
    cells.forEach((cell, i) => {
        cell.innerText = gameState.board[i];
        cell.classList.remove('x', 'o', 'winner');
        if (gameState.board[i]) cell.classList.add(gameState.board[i].toLowerCase());
    });

    // Update status message
    if (gameState.winner === "Draw") {
        statusDisplay.innerText = "Game ended in a Draw!";
    } else if (gameState.winner) {
        statusDisplay.innerText = `Player ${gameState.winner} Wins!`;
    } else {
        statusDisplay.innerText = `Player ${gameState.currentPlayer}'s Turn`;
    }
}

function highlightWinner(line) {
    line.forEach(index => {
        cells[index].classList.add('winner');
    });
}

function restartGame() {
    gameState = {
        board: Array(9).fill(""),
        currentPlayer: "X",
        gameActive: true,
        winner: null
    };
    localStorage.removeItem(STORAGE_KEY);
    updateUI();
}

// Event Listeners
document.getElementById('board').addEventListener('click', handleCellClick);
document.getElementById('reset-btn').addEventListener('click', restartGame);

// Initial Load
window.onload = loadGameState;