import React, { useState, useEffect } from "react";

function Mycomponent5() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div className="counters-container">
      <p className="counters-value" style={{ color: color }}>
        Count: {count}
      </p>
      <div className="buttons-group">
        <button onClick={addCount} className="btns">Add</button>
        <button onClick={subCount} className="btns">Subtract</button>
        <button onClick={changeColor} className="btn change-btns">
          Change Color
        </button>
      </div>
    </div>
  );
}

export default Mycomponent5;
