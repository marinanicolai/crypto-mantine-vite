import React from "react";
import { Grid, rem } from "@mantine/core";
import { UtilityNavPair } from "./UtilityNavPair";

export const UtilityNav = () => {
  return (
    <>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
      <Grid.Col span={1} style={{ minHeight: rem(80) }}>
        <UtilityNavPair />
      </Grid.Col>
    </>
  );
};
