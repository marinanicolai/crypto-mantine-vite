import React, { FC } from "react";
import { useCryptoCurrencyStore } from "../../store";

interface Props {
  name: string;
}

export const Currencies = () => {
  const currencies = useCryptoCurrencyStore((state) => state.currencies);
  console.log("this is currencies from currencies page");
  console.log(currencies);

  
  return (
    <div>
      <h1>Hello, this is currency page!</h1>
    </div>
  );
};
