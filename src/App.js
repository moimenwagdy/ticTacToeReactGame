import Player from "./components/player/player";
import GameBoard from "./components/gameBoard/gameBoard";
import { useState } from "react";
import Log from "./components/log/Log";

function activePlaye(array) {
  let state = "X";
  if (array.length > 0 && array[0].player === "X") {
    state = "O";
  }
  return state;
}

function App() {
  let [myArr, setArr] = useState([]);
  let [playerName, setPlayerName] = useState({ X: "player 1", O: "player 2" });

  let activePlayer = activePlaye(myArr);
  function gameHandler(button, rowIndex, colIndex) {
    setArr((prvVal) => {
      let currentPlayer = activePlaye(prvVal);
      const newArr = [
        {
          square: { rowIndex: rowIndex, colIndex: colIndex },
          player: currentPlayer,
        },
        ...prvVal,
      ];

      return newArr;
    });
    button.disabled = true;
  }

  function changePlayer(symbol, playerName) {
    setPlayerName((prv) => {
      return { ...prv, [symbol]: playerName };
    });
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            active={activePlayer === "X" ? "active" : ""}
            changePlayer={changePlayer}
          />
          <Player
            initialName="player 2"
            symbol="O"
            active={activePlayer === "O" ? "active" : ""}
            changePlayer={changePlayer}
          />
        </ol>
      </div>
      <GameBoard
        gameHandler={gameHandler}
        states={myArr}
        winnerName={playerName}
      />
      <Log myArr={myArr} />
    </>
  );
}

export default App;
