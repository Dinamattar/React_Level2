import { Link } from "react-router-dom";
import "./App.css";
import "./theme.css";
import { useContext } from "react";

import DataContext from "./context/DataContext";

function App() {
  const {
    field,
    changeField,
    year,
    changeYear,
    count,
    theme,
    changeCount,
    changeTheme,
  } = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <Link to="/page2">Go To Page 2</Link>
      <br />
      <button
        style={{ marginBottom: 60 }}
        onClick={() => {
          changeTheme(theme == "ligth" ? "dark" : "ligth");
        }}
      >
        Toggle Theme
      </button>
      .
      <input
        type="checkbox"
        id="toggle_checkbox"
        onChange={() => {
          changeTheme(theme == "ligth" ? "dark" : "ligth");
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
          onClick={() => {
            changeTheme("ligth");
          }}
        >
          light
        </button>
        <button
          className="dark"
          style={{ marginRight: 26 }}
          onClick={() => {
            changeTheme("dark");
          }}
        >
          dark
        </button>
        <button
          className="gray"
          onClick={() => {
            changeTheme("gray");
          }}
        >
          gray
        </button>
        <button
          className="pink"
          onClick={() => {
            changeTheme("pink");
          }}
        >
          pink
        </button>
      </div>
      <h2>My Field is {field} </h2>
      <button
        onClick={() => {
          changeField();
        }}
      >
        Change Field
      </button>
      <br />
      <h2>My Experience Year is {year}</h2>
      <button
        onClick={() => {
          changeYear();
        }}
      >
        Change Year
      </button>
      <br />
      <button
        onClick={() => {
          changeCount();
        }}
      >
        Counter is {count}
      </button>
    </div>
  );
}

export default App;
