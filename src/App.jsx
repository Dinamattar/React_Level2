import { Link } from "react-router-dom";
import "./App.css";
import "./theme.css";
import { useReducer } from "react";

// import { useState } from "react";
function App() {
  // const [field, setField] = useState("Front End");
  // const [year, setYear] = useState("3");
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(" ");

  const initialScore = { field: "Fornt End", year: 3, count: 0, color: "" };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return { ...state, field: action.newValue };
      case "CHANGE_YEAR":
        return { ...state, year: action.newValue };
      case "CHANGE_COUNT":
        return { ...state, count: action.newValue };
      case "CHANGE_COLOR":
        return { ...state, color: action.newValue };
      default:
        return state;
    }
  };
  const [allData, dispatch] = useReducer(reducer, initialScore);

  return (
    <div className={`App ${allData.color}`}>
      <Link to="/page2">Go To Page 2</Link>
      <br />
      <button
        style={{ marginBottom: 60 }}
        onClick={() =>
          dispatch({
            type: "CHANGE_COLOR",
            newValue: allData.color == "" ? "dark" : "",
          })
        }
      >
        Toggle Theme
      </button>
      .
      <input
        type="checkbox"
        id="toggle_checkbox"
        onChange={() => {
          dispatch({
            type: "CHANGE_COLOR",
            newValue: allData.color == "" ? "dark" : "",
          });
        }}
      />
      <label htmlFor="toggle_checkbox">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon" />
      </label>
      <div className="th">
        <button
          className="light"
          style={{ marginRight: 26 }}
          onClick={() => dispatch({ type: "CHANGE_COLOR", newValue: "light" })}
        >
          light
        </button>
        <button
          className="dark"
          style={{ marginRight: 26 }}
          onClick={() => dispatch({ type: "CHANGE_COLOR", newValue: "dark" })}
        >
          dark
        </button>
        <button
          className="gray"
          onClick={() => dispatch({ type: "CHANGE_COLOR", newValue: "gray" })}
        >
          gray
        </button>
        <button
          className="pink"
          onClick={() => dispatch({ type: "CHANGE_COLOR", newValue: "pink" })}
        >
          pink
        </button>
      </div>
      <h2>My Field is {allData.field} </h2>
      <button
        onClick={() => dispatch({ type: "CHANGE_FIELD", newValue: "Back End" })}
      >
        Change Field
      </button>
      <br />
      <h2>My Experience Year is {allData.year} </h2>
      <button onClick={() => dispatch({ type: "CHANGE_YEAR", newValue: 5 })}>
        Change Year
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_COUNT", newValue: allData.count + 1 })
        }
      >
        Counter is {allData.count}
      </button>
    </div>
  );
}

export default App;
