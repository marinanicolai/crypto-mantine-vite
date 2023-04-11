import { useEffect } from "react";
import geckoLogo from "./assets/coin-gecko.png";
import { Routes, Route } from "react-router-dom";
import { Currencies } from "./pages/Currencies/Currencies";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { useCryptoCurrencyStore } from "./store";
import "./App.css";

function App() {
  const [currencies, setCurrencies] = useCryptoCurrencyStore((state) => [
    state.currencies,
    state.setCurrencies,
  ]);
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          apiUrl
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const data = await response.json();
        setCurrencies(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl, setCurrencies]);

  return (
    <Routes>
      <Route path="" element={<Currencies name={""} />} />
      <Route path="/portfolio" element={<Portfolio name={""} />} />
    </Routes>
  );
}

export default App;
