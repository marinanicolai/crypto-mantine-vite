import { FC, useState } from "react";
import { CryptoPriceChange, CryptoTitleWithIcon, HeaderPage } from "../../components";
import { IconBriefcase, IconDotsVertical, IconTrash } from "@tabler/icons-react";
import { Button, Group, Table, Text ,Menu ,ActionIcon} from "@mantine/core";
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
        <td><Text size="md" weight={500}>{"$" + crypto.currency.currentPrice}</Text></td>
        <td><CryptoPriceChange priceChange={crypto.currency.priceChangePercentage24h}/></td>
        <td>
                <Group spacing={5}>
                    <Text size="md" weight={500}>{(crypto.amount*crypto.currency.currentPrice).toFixed(2) + "$"}</Text>
                    <Text size="sm" tt="uppercase"  c="dimmed" >{crypto.amount+ " " + crypto.currency.symbol}</Text>
                </Group>
        </td>
        <td><ContextMenu 
                onDelete={() => {
                    const newPortfolio = portfolio.filter((_, index) => index !== i);
                    setPortfolio(newPortfolio);
                    localStorage.setItem('portfolio', JSON.stringify(newPortfolio));
                }} 
                onEdit={() => {
 
                }}/></td>
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

type ContextMenuProps = {
  onDelete: () => void;
  onEdit: () => void;
};
const ContextMenu = (props: ContextMenuProps) => {
  
  return (
      <Menu shadow="md" width={200}>
          <Menu.Target>
              <ActionIcon><IconDotsVertical size={16} color="#BDBDBD"/></ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
              {/*<Menu.Item onClick={props.onEdit} icon={<IconEdit size={14} />}>Edit</Menu.Item>*/}
              <Menu.Item onClick={props.onDelete} color="red" icon={<IconTrash size={14} />}>Delete</Menu.Item>
          </Menu.Dropdown>
      </Menu>
  );
};