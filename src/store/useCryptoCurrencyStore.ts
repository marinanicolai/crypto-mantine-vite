import { CryptoCurrency } from "../types/CryptoCurrency";
import {create} from "zustand"; 

interface useCryptoCurrencyStore {
    currencies: CryptoCurrency[];
    setCurrencies: (currencies: CryptoCurrency[]) => void;
}

export const useCryptoCurrencyStore = create<useCryptoCurrencyStore>((set) => ({
    currencies: [],
    setCurrencies: (currencies) => set({ currencies }),
}));