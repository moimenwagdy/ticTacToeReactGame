import { useState } from "react";

export default function Player({ initialName, symbol, active, changePlayer }) {
  let [isEditing, setIsEditing] = useState(false);
  let [playerName, setPlayerName] = useState(initialName);
  let onTrigger = () => {
    setIsEditing((current) => !current);
    changePlayer(symbol, playerName);
  };
  let changeHandler = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li className={active}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            defaultValue={initialName}
            type="text"
            value={playerName}
            onChange={changeHandler}></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onTrigger}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
