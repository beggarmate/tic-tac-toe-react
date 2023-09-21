import React, { useState } from "react";
import classes from "./UI/Square.module.css";
const Square = ({ value, onSquareClick, style }) => {
  return (
    <button style={style} onClick={onSquareClick} className={classes.mySqr}>
      <span className={value === "X" ? "letter-x" : "letter-o"}>{value}</span>
    </button>
  );
};

export default Square;
