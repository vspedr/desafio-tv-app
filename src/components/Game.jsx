import React, { Component } from "react";
import classNames from "classnames";

import Board from "./Board";
import calculateWinner from "../util/calculateWinner";
import { getSquareIdFromIndex, getSquareIndexFromId } from "../util/square";

// essa técnica se chama CSS modules. serve para evitar conflitos de nomes de classes
// não é requerida para a solução do desafio, somente um exemplo
import styles from "./Game.module.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      // vamos manter essa propriedade no estado para indicar qual elemento está focado atualmente.
      focusedElement: "square-0",
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleSquareClick.bind(this);
  }

  // quando o componente principal do jogo for renderizado, registramos o event listener
  componentDidMount() {
    window.addEventListener("keydown", (e) => this.handleKeyDown(e));
  }

  // quando for desmontado, removemos o event listener. útil por exemplo caso tivéssemos outra página sem o jogo
  componentWillUnmount() {
    window.removeEventListener("keyDown", (e) => this.handleKeyDown(e));
  }

  // altera o componente focado
  setFocusedElement(id) {
    this.setState({ focusedElement: id });
  }

  // reinicia o estado do jogo
  restart() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      focusedElement: "square-0",
    });
  }

  // função executada quando um quadrado é clicado ou está focado e pressionamos enter.
  // será passada para os Squares
  handleSquareClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentStep = history[history.length - 1];
    const squares = currentStep.squares.slice();
    // determina se todos os quadrados já foram preenchidos
    const isGameFinished = squares.every((s) => !!s);
    // se o quadrado focado estiver preenchido ou o jogo acabou, não faz nada
    if (isGameFinished || squares[i]) {
      return;
    }
    // preenche o quadrado com a letra do jogador atual
    squares[i] = this.state.xIsNext ? "X" : "O";

    // atualiza o estado do jogo com a nova jogada
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleKeyDown(event) {
    // listando as extremidades do Board para facilitar o tratamento de casos especiais
    const leftmostSquares = [0, 3, 6];
    const rightmostSquares = [2, 5, 8];
    const topmostSquares = [0, 1, 2];
    const bottommostSquares = [6, 7, 8];

    const { focusedElement } = this.state;

    // determinando se o elemento focado é um dos quadrados ou o botão de restart
    const isRestartButtonFocused = focusedElement === "restart-button";
    const isBoardFocused = focusedElement.startsWith("square-");
    const currentFocusedSquareIndex = isBoardFocused
      ? parseInt(getSquareIndexFromId(focusedElement), 10)
      : null;

    // verificamos caso a caso qual tecla foi pressionada e mudamos o elemento focado de acordo
    switch (event.key) {
      case "ArrowLeft":
        if (
          isBoardFocused &&
          !leftmostSquares.includes(currentFocusedSquareIndex)
        ) {
          this.setFocusedElement(
            getSquareIdFromIndex(currentFocusedSquareIndex - 1)
          );
        }
        break;
      case "ArrowRight":
        if (
          isBoardFocused &&
          !rightmostSquares.includes(currentFocusedSquareIndex)
        ) {
          this.setFocusedElement(
            getSquareIdFromIndex(currentFocusedSquareIndex + 1)
          );
        }
        break;
      case "ArrowUp":
        if (isBoardFocused) {
          if (!topmostSquares.includes(currentFocusedSquareIndex)) {
            this.setFocusedElement(
              getSquareIdFromIndex(currentFocusedSquareIndex - 3)
            );
          }
        } else if (isRestartButtonFocused) {
          this.setFocusedElement("square-6");
        }
        break;
      case "ArrowDown":
        if (isBoardFocused) {
          if (!bottommostSquares.includes(currentFocusedSquareIndex)) {
            this.setFocusedElement(
              getSquareIdFromIndex(currentFocusedSquareIndex + 3)
            );
          } else {
            this.setFocusedElement("restart-button");
          }
        }
        break;
      case "Enter":
        if (isRestartButtonFocused) {
          this.restart();
        } else if (isBoardFocused) {
          this.handleSquareClick(currentFocusedSquareIndex);
        }
        break;
      default:
        break;
    }
  }

  render() {
    const { history, stepNumber, xIsNext, focusedElement } = this.state;
    const currentStep = history[stepNumber];
    const { winner, winningSequence } = calculateWinner(currentStep.squares);

    let statusMessage;
    if (winner) {
      statusMessage = "Vencedor: " + winner;
    } else if (currentStep.squares.every((v) => !!v)) {
      statusMessage = "Deu velha!";
    } else {
      statusMessage = "Próximo jogador: " + (xIsNext ? "X" : "O");
    }

    return (
      <div className={styles.game}>
        <h1>Jogo da Velha - SmartTV</h1>
        <div className={styles["game-info"]}>
          <div>{statusMessage}</div>
        </div>
        <div className={styles["game-board"]}>
          <Board
            focusedElement={focusedElement}
            winningSequence={winningSequence || []}
            squares={currentStep.squares}
            onClick={() => this.handleSquareClick()}
          />
        </div>
        <div className={styles["game-restart"]}>
          <button
            id="restart-button"
            className={classNames(styles["restart-button"], {
              [styles["restart-button-focused"]]:
                focusedElement === "restart-button",
            })}
            onClick={() => this.restart()}
          >
            Reiniciar jogo
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
