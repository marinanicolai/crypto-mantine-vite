import { useState } from "react";
import geckoLogo from "./assets/coin-gecko.png";
import { Routes, Route } from "react-router-dom";
import { Currencies } from "./pages/Currencies/Currencies";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="" element={<Currencies name={""} />} />
      <Route path="/portfolio" element={<Portfolio name={""} />} />
    </Routes>
  );
}

export default App;
