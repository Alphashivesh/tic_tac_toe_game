import React, { useState } from "react";
import "./styles.css";

// --- Square Component ---
// Added isWinning prop and conditional className for X/O and winning highlight
function Square({ value, onSquareClick, isWinning }) {
  const className = `square ${value ? value : ""} ${
    isWinning ? "winning" : ""
  }`;
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// --- Board Component ---
// Calculates winner info (including line), adds classes to status
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)?.winner) {
      // Check winner using ?.winner
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winnerInfo = calculateWinner(squares); // Get { winner, line } or null
  const winner = winnerInfo?.winner; // Safely access winner
  const winningLine = winnerInfo?.line || []; // Get line or empty array

  let status;
  let statusClassName = "status"; // Base status class

  if (winner) {
    status = "Winner: " + winner;
    statusClassName += " winner"; // Add winner class
  } else if (squares.every(Boolean)) {
    status = "Draw!";
    statusClassName += " draw"; // Add draw class
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      {/* Add the statusClassName */}
      <div className={statusClassName}>{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                // Pass whether this square is part of the winning line
                isWinning={winningLine.includes(index)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

// --- Game Component (Main Component) ---
// Added the H1 title
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    // Fragment <>...</> allows returning multiple elements without a wrapper div
    // Or you could wrap title and .game in a main div if needed
    <>
      <h1>Tic Tac Toe</h1> {/* Title Added Here */}
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
        </div>
        {/* Moved button outside game-board but inside game container */}
        <button className="restart-button" onClick={handleRestart}>
          Restart Game
        </button>
        {/* game-info div removed for simplicity, add back if needed for history */}

        <h2>Made with ❤️ </h2>
      </div>
    </>
  );
}

// --- Helper Function to Calculate Winner ---
// Now returns an object { winner: 'X'/'O', line: [a,b,c] } or null
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Return object with winner and the winning line
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null; // No winner
}
