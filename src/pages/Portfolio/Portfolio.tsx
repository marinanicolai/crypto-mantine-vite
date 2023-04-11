import React, { FC } from 'react';

interface Props {
  name: string;
}

export const Portfolio: FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, this is portfolio page {name}!</h1>
    </div>
  );
};


