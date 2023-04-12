import React, { FC } from "react";
import { useCryptoCurrencyStore } from "../../store";
import { Table, Text } from "@mantine/core";
import { CryptoTitleWithIcon, CryptoPriceChange } from "../../components";

export const Currencies = () => {
  const currencies = useCryptoCurrencyStore((state) => state.currencies);
  console.log("this is currencies from currencies page");
  console.log(currencies);

  const rows = currencies.map((crypto, i) => (
    <tr key={crypto.marketCapRank}>
      <td>
        <Text c="dimmed">{crypto.marketCapRank}</Text>
      </td>
      <td>
        <CryptoTitleWithIcon
          name={crypto.name}
          symbol={crypto.symbol}
          icon={crypto.image}
        />
      </td>
      <td>
        <Text size="md" weight={500}>
          {"$" + crypto.currentPrice}
        </Text>
      </td>
      <td>
        <CryptoPriceChange priceChange={crypto.priceChangePercentage24h} />
      </td>
    </tr>
  ));

  return (
    <>
      <Table horizontalSpacing={0} verticalSpacing={10}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};
