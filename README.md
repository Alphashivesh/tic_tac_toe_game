# tic_tac_toe_game
Created with CodeSandbox

# [Live Demo 🚀](https://tic-tac-toe-game-7gak.vercel.app/)

This is a classic Tic-Tac-Toe game implemented as an interactive web application using the React JavaScript library.

It was developed and runs within a CodeSandbox environment, showcasing how modern web technologies can be used to create engaging user interfaces.

## Gameplay:

Two players take turns marking spaces in a 3x3 grid.

Player 'X' goes first.

The objective is to be the first player to get three of their marks ('X' or 'O') in a horizontal, vertical, or diagonal row.

The game automatically detects win conditions and draw conditions (when all squares are filled with no winner).

Players cannot click on squares that are already filled or after a winner has been decided.

## Key Features Implemented:

Interactive Grid: Players click on squares to place their mark.

Turn Management: The game correctly alternates between 'X' and 'O'.

Win Detection: Automatically identifies and declares a winner.

Draw Detection: Recognizes when the game ends in a stalemate.

Status Display: Clearly indicates the next player, the winner, or if the game is a draw.

Winning Line Highlight: The three squares that form the winning line are visually highlighted.

Restart Button: Allows players to easily start a new game.

## Enhanced Styling: Features a visually appealing design with:

A gradient background.

Rounded corners and subtle shadows for a modern look.

Distinct colors for 'X' and 'O'.

Hover effects on squares and the restart button.

A custom font (if imported via CSS).

## Technical Highlights:

Built with React Functional Components.

Uses the useState hook for managing the game's state (board layout, current player).

Demonstrates component composition (Square, Board, Game).

Employs event handling for user clicks.

Follows React principles like immutability when updating state.

Styled using CSS.

### This project serves as a great example of building a simple yet complete game application using React, covering fundamental concepts like state management, conditional rendering, and component interaction.
