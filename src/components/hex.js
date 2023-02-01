import { useState } from "react";

export const HexComponent = () => {
  const [hexColor, setHexColor] = useState("green");
  const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexHash = "#";

  const clickHandler = () => {
    for (let i = 0; i < 6; i++) {
      setHexColor(
        (hexHash += hexArr[Math.floor(Math.random() * hexArr.length)])
      );
    }
  };

  return (
    <div style={{ backgroundColor: hexColor }}>
      <div className="inner-div">
        <h1>
          HEX <span>{hexColor}</span>
        </h1>
        <button onClick={clickHandler}>Change background</button>
      </div>
    </div>
  );
};
