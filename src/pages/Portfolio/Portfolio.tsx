import { FC, useState } from "react";
import { HeaderPage } from "../../components";
import { IconBriefcase } from "@tabler/icons-react";
import { Button } from "@mantine/core";

interface Props {
  name: string;
}

export const Portfolio: FC<Props> = ({ name }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div>
      <HeaderPage title="Portfolio" icon={<IconBriefcase />} />
      <Button
        onClick={() => setOpened(true)}
        style={{ outline: "none" }}
        variant="outline"
      >
        Add Coin
      </Button>

      <h1>Hello, this is portfolio page {name}!</h1>
    </div>
  );
};
