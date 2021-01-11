import React from "react";
import Square from "./Square";
import { getSquareIdFromIndex } from "../util/square";

const Board = (props) => {
  const isSquareFocused = (i) =>
    props.focusedElement === getSquareIdFromIndex(i);

  const renderSquare = (i) => {
    return (
      <Square
        // identificador único do quadrado
        id={getSquareIdFromIndex(i)}
        // X, O ou vazio
        value={props.squares[i]}
        // ação ao clicar/pressionar enter naquele quadrado
        onClick={() => props.onClick(i)}
        // determina se o quadrado faz parte da jogada vencedora
        isWinning={props.winningSequence.includes(i)}
        // determina se o quadrado está focado no momento
        isFocused={isSquareFocused(i)}
      />
    );
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
