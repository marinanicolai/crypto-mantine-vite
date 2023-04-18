import React from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { HiMail, FaLinkedin, FaGithubSquare } from "react-icons/all";
import { Img } from "./Footer.styles";
import {
  ActionIcon,
  useMantineColorScheme,
  Container,
  Grid,
  rem,
} from "@mantine/core";

export const AppFooter = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Container>
        <Grid>
          <Grid.Col span={3} style={{ minHeight: rem(80) }}>
            <a
              href="https://www.linkedin.com/in/marinanicolaidev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="1.5rem" />
            </a>
          </Grid.Col>
          <Grid.Col span={3} style={{ minHeight: rem(80) }}>
            <a href="mailto:nicolaimarina@gmail.com">
              <HiMail size="1.6rem" />
            </a>
          </Grid.Col>
          <Grid.Col span={3} style={{ minHeight: rem(80) }}>
            <a
              href="https://github.com/marinanicolai/crypto-mantine-vite"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size="1.55rem" />
            </a>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col style={{ minHeight: rem(80) }}>
            Created by <strong>Marina Nicolai</strong> / Powered by
            {/* <Img>
              <img
                src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"
                alt="CoinGheko"
                width="100%"
              />
            </Img> */}
            <strong>CoinGecko API</strong>
            <span className={"hide-xs"}> - 2021</span>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
