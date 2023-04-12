import {Group, Text} from "@mantine/core";
import * as React from "react";

export const CryptoTitleWithIcon = ({name, symbol, icon}: { name: string, symbol: string, icon: string }) => {
    return (
        <Group spacing={5}>
            <img src={icon} alt={name} width="16" height="16" />
            <Text size="md" weight={500}>{name}</Text>
            <Text size="md" tt="uppercase"  c="dimmed" >{symbol}</Text>
        </Group>
    );
};