import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Css from './pages/Css';
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Javascript from './pages/JavaScript';
import { useContext } from "react";
import DataContext from "./context/DataContext";
function App() {
  const { theme } = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />

        <Route path="/about" element={<About />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default App;
