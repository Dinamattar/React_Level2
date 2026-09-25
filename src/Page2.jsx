import {useContext } from "react";

  import DataContext from "./context/DataContext"; 
const Page2 = () => {
  const {field ,year,theme,count} = useContext(DataContext); 
  return (
    <div className={`App ${theme}`}>
      <h2>Welcome To Page2</h2>
      <p>     My Field is {field}  , My Experience Year is  {year}</p>
      <p>count is {count}</p>
    </div>
  );
};

export default Page2;
