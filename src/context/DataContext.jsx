import { createContext, useReducer } from "react";
const DataContext= createContext();
const initialData = { field: "Fornt End", year: 3, count: 0, theme: "ligth" };
const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return { ...state, field: action.newValue };
      case "CHANGE_YEAR":
        return { ...state, year: action.newValue };
      case "CHANGE_COUNT":
        return { ...state, count: state.count+1 };
      case "CHANGE_THEME":
        return { ...state, theme: action.newValue };
      default:
        return state;
    }
  };
export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeField = () => {
    dispatch({ type: "CHANGE_FIELD", newValue: "back end" });
  };
  const changeYear = () => {
    dispatch({ type: "CHANGE_YEAR", newValue: 5});
  };
   const changeCount = () => {
    dispatch({ type: "CHANGE_COUNT"});
  };
  const changeTheme = (color) => {
    dispatch({
            type: "CHANGE_THEME",
            newValue: color
          });
  };
  return (
    <DataContext.Provider value={{ ...firstState, changeField ,changeYear,changeCount,changeTheme}}> 
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
