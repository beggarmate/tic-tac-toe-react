import React, { useState } from "react";
import classes from "./UI/Square.module.css";
const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className={classes.mySqr}>
      {value}
    </button>
  );
};

export default Square;
