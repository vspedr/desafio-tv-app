import React from "react";
import classNames from "classnames";
import styles from "./Square.module.css";

const emSpace = " "; // Unicode U+2003

const Square = (props) => {
  return (
    <button
      id={props.id}
      className={classNames(
        // classe padrão do square
        styles.square,
        // classe do square que forma a jogada vencedora
        props.isWinning && styles.winning,
        // classe do square focado
        props.isFocused && styles.focused
      )}
      onClick={props.onClick}
    >
      {props.value || emSpace}
    </button>
  );
};

export default Square;
