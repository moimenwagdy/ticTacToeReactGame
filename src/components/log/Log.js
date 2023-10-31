export default function Log({ myArr }) {
  return (
    <ul id="log">
      {myArr.map((e) => {
        return (
          <li
            key={Math.random()}>{`${e.player} selected ${e.square.rowIndex},${e.square.colIndex}`}</li>
        );
      })}
    </ul>
  );
}
