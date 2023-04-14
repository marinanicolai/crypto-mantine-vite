import { useEffect, useState } from "react";
import geckoLogo from "./assets/coin-gecko.png";
import { Routes, Route } from "react-router-dom";
import { Currencies } from "./pages/Currencies/Currencies";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { AppHeader } from "./components/Header";
import { AppFooter } from "./components/Footer";
import { useCryptoCurrencyStore } from "./store";
import { fetchDataAndCache } from "./api";
import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider,
} from "@mantine/core";

import "./App.css";
import { CryptoCurrency } from "./types/CryptoCurrency";

function App() {
  const [currencies, setCurrencies] = useCryptoCurrencyStore((state) => [
    state.currencies,
    state.setCurrencies,
  ]);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataAndCache(apiUrl, 10 * 60 * 1000);
        const jsonData = await response.json();
        const entities = jsonData.map((data: any) => new CryptoCurrency(data));
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }

        setCurrencies(entities);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl, setCurrencies]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {" "}
        <AppHeader />
        <Routes>
          <Route path="" element={<Currencies />} />
          <Route path="/portfolio" element={<Portfolio name={""} />} />
        </Routes>
        <AppFooter />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
