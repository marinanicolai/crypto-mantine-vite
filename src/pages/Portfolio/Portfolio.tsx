import React, { FC } from "react";
import { HeaderPage } from "../../components";
import { IconBriefcase } from "@tabler/icons-react";

interface Props {
  name: string;
}

export const Portfolio: FC<Props> = ({ name }) => {
  return (
    <div>
      <HeaderPage title="Portfolio" icon={<IconBriefcase />} />

      <h1>Hello, this is portfolio page {name}!</h1>
    </div>
  );
};
