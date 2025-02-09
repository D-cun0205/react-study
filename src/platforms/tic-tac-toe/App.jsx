import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import {useState} from "react";
import Log from "./components/Log.jsx";
import './data/winning-combinations.js'
import {WINNING_COMBINATIONS} from "./data/winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

// 자바스크립트에서 배열을 변수에 할당할 때 변수 자체를 (... 를 사용하지 않고 복사하는 경우) 대입하는 경우
// 이는 배열의 참조 값을 의미한다.
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurn) {
  let currentPlayer = 'X';

  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({'X': 'Player 1', 'O': 'Player 2'});
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if ( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol ) {
      winner = players[firstSquareSymbol];
    }
  }

  let hasDraw = gameTurn.length === 9 && !winner;

  function handleRestart() {
    setGameTurn([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
            onSelectPlayer={handlePlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
            onSelectPlayer={handlePlayerNameChange}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
        { (winner || hasDraw) && <GameOver onRestart={handleRestart} winner={winner} /> }
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App
