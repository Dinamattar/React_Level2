import "./App.css";
import "./theme.css";
import { useState } from "react";
function App() {
  const [field, setField] = useState("Front End");
  const [year, setYear] = useState("3");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(" ");

  return (
    <div className={`App ${color}`}>
      <div className="th">
        <button className="light"  style={{ marginRight: 26 }} onClick={() => setColor("light")}>
          light
        </button>
        <button className="dark" style={{ marginRight: 26 }}  onClick={() => setColor("dark")}>
          dark
        </button>
        <button className="gray" onClick={() => setColor("gray")}>
          gray
        </button>
        <button className="pink" onClick={() => setColor("pink")}>
          pink
        </button>
      </div>
      <h2>My Field is {field}</h2>
      <button onClick={() => setField("Back End")}>Change Field</button>
      <br />
      <h2>My Experience Year is {year}</h2>
      <button onClick={() => setYear("5")}>Change Year</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Counter is {count}</button>
    </div>
  );
}

export default App;
