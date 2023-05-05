import { FC, useState } from "react";
import { HeaderPage } from "../../components";
import { IconBriefcase } from "@tabler/icons-react";
import { Button, Group, Table } from "@mantine/core";
import { CryptoCurrencyHolding } from "../../types/CryptoCurrencyHolding";

interface Props {
  name: string;
}

export const Portfolio: FC<Props> = ({ name }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [portofolio, setPortofolio] = useState<CryptoCurrencyHolding[]>([]);

  const rows = "this is row of data";
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
    </div>
  );
};
