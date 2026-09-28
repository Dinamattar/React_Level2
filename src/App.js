import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/JavaScript';
import { useContext } from "react";
import DataContext from "./context/DataContext";
function App() {
  const { theme } = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default App;
