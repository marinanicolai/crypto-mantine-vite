import { FC, useState } from "react";
import { CryptoPriceChange, CryptoTitleWithIcon, HeaderPage } from "../../components";
import { IconBriefcase } from "@tabler/icons-react";
import { Button, Group, Table } from "@mantine/core";
import {AddCoinDialog} from "./AddCoinDialog";
import { CryptoCurrencyHolding } from "../../types/CryptoCurrencyHolding";
import { useCryptoCurrencyStore } from '../../store/index';


interface Props {
  name: string;
}

export const Portfolio: FC<Props> = ({ name }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<CryptoCurrencyHolding[]>([]);
  const currencies = useCryptoCurrencyStore(state => state.currencies);
  const handleAddCrypto = (crypto: CryptoCurrencyHolding) => {
    const newPortfolio = [...portfolio, crypto];
    setPortfolio(newPortfolio);
    localStorage.setItem('portfolio', JSON.stringify(newPortfolio));
};

  const rows = portfolio.map((crypto, i) => (
    <tr key={i}>
        <td><CryptoTitleWithIcon name={crypto.currency.name} symbol={crypto.currency.symbol} icon={crypto.currency.image}/></td>
    </tr>
  ))
  console.log(portfolio);
  return (
    <div>
      <Group position="apart">
        <HeaderPage title="Portfolio" icon={<IconBriefcase />} />
        <Button
          onClick={() => setOpened(true)}
          style={{ outline: "none" }}
          variant="outline"
        >
          Add Coin
        </Button>
      </Group>

      <Table horizontalSpacing={0} verticalSpacing={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Holdings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <AddCoinDialog cryptoList={currencies}
                          onAddCrypto={handleAddCrypto}
                          onClose={() => {
                              setOpened(false);
                          }} opened={opened}/>
    </div>
  );
};
