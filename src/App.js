import React from "react";
import "./App.css";

function App() {
  const arr = [
    "🐶 dog",
    "😺 cat",
    "🐔 chicken",
    "🐄 cow",
    "🐏 sheep",
    "🐎 horse",
  ];
  console.log(arr);

  return <Arr data={arr} />;
}

function Arr(props) {
  const items = props.data;

  return (
    <div className="arr">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default App;
