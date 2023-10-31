export default function GameOver({ winnerIs }) {
  function rematch() {
    window.location.reload();
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winnerIs && <p>{winnerIs} Won!</p>}
      {!winnerIs && <p>DRAW</p>}
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}
