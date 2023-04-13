import React from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { UtilityNav } from "./UtilityNav";
import {
  ActionIcon,
  useMantineColorScheme,
  Container,
  Grid,
  rem,
} from "@mantine/core";

export const AppHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Container>
        <Grid>
          <UtilityNav />
          <Grid.Col span={1} offset={1} style={{ minHeight: rem(80) }}>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? (
                <IconSun size="1.1rem" />
              ) : (
                <IconMoonStars size="1.1rem" />
              )}
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
