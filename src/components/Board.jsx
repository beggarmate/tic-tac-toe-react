import React, { useState } from "react";
import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <h2 className="status">
        {`${status.slice(0, status.length - 1)}`}
        {status[status.length - 1] === "X" ? (
          <span className="letter-x">{status[status.length - 1]}</span>
        ) : (
          <span className="letter-o">{status[status.length - 1]}</span>
        )}
      </h2>
      <hr />
      <div className="board">
        <div className="board-row">
          <Square
            style={{ borderLeft: "none", borderTop: "none" }}
            onSquareClick={() => {
              handleClick(0);
            }}
            value={squares[0]}
          />
          <Square
            style={{ borderTop: "none" }}
            onSquareClick={() => {
              handleClick(1);
            }}
            value={squares[1]}
          />
          <Square
            style={{ borderRight: "none", borderTop: "none" }}
            onSquareClick={() => {
              handleClick(2);
            }}
            value={squares[2]}
          />
        </div>
        <div className="board-row">
          <Square
            style={{ borderLeft: "none" }}
            onSquareClick={() => {
              handleClick(3);
            }}
            value={squares[3]}
          />
          <Square
            onSquareClick={() => {
              handleClick(4);
            }}
            value={squares[4]}
          />
          <Square
            style={{ borderRight: "none" }}
            onSquareClick={() => {
              handleClick(5);
            }}
            value={squares[5]}
          />
        </div>
        <div className="board-row">
          <Square
            style={{ borderLeft: "none", borderBottom: "none" }}
            onSquareClick={() => {
              handleClick(6);
            }}
            value={squares[6]}
          />
          <Square
            style={{ borderBottom: "none" }}
            onSquareClick={() => {
              handleClick(7);
            }}
            value={squares[7]}
          />
          <Square
            style={{ borderRight: "none", borderBottom: "none" }}
            onSquareClick={() => {
              handleClick(8);
            }}
            value={squares[8]}
          />
        </div>
      </div>
    </div>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
};

export default Board;
