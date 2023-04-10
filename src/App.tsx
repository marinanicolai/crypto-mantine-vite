import { useState } from "react";
import geckoLogo from "./assets/coin-gecko.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Crypto App</h1>
      <div className="card">
        <p>table</p>
      </div>
      <p className="read-the-docs">
        Created by Marina Nicolai and powered by{" "}
        <a href="https://www.coingecko.com/" target="_blank">
          <img src={geckoLogo} className="logo" alt="CoinGecko logo" />
          CoinGecko API
        </a>
      </p>
    </div>
  );
}

export default App;
