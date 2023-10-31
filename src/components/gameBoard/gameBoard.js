import { WINNING_ARRAY } from "../WINNIG.js";
import GameOver from "../gameOver/GameOver";
let gameBoardArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winnerIs;
export default function GameBoard({ gameHandler, states, winnerName }) {
  let newArr = gameBoardArray;
  console.log(states);

  for (const state of states) {
    let { square, player } = state;
    let { rowIndex, colIndex } = square;
    newArr[rowIndex][colIndex] = player;
  }

  for (const winner of WINNING_ARRAY) {
    let firstProp = newArr[winner[0].row][winner[0].col];
    let secondProp = newArr[winner[1].row][winner[1].col];
    let thirdProp = newArr[winner[2].row][winner[2].col];
    if (firstProp && firstProp === secondProp && firstProp === thirdProp) {
      winnerIs = winnerName[firstProp];
    }
  }

  let hasDraw = states.length === 9 && !winnerIs;

  return (
    <>
      <ol id="game-board">
        {gameBoardArray.map((e, eIndex) => (
          <li key={eIndex}>
            {
              <ol>
                {e.map((playerSymbol, hIndex) => (
                  <li key={hIndex}>
                    <button
                      onClick={(event) => {
                        gameHandler(event.target, eIndex, hIndex);
                      }}>
                      {playerSymbol}
                    </button>
                  </li>
                ))}
              </ol>
            }
          </li>
        ))}
        ;
      </ol>
      {(winnerIs || hasDraw) && <GameOver winnerIs={winnerIs} />}
    </>
  );
}
