import React, { FC } from "react";

interface Props {
  name: string;
}

export const Currencies: FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, this is currency page {name}!</h1>
    </div>
  );
};
