import {Group, Text} from "@mantine/core";
import {IconCaretDown, IconCaretUp} from "@tabler/icons-react";
import * as React from "react";

export const CryptoPriceChange = ({priceChange}: { priceChange: number }) => {
    const getChangeColor = (priceChange: number) => {
        if (priceChange > 0) {
            return "green";
        } else if (priceChange < 0) {
            return "red";
        } else {
            return "gray";
        }
    };
    return (
        // up or down icon to left of percentage
        <Group spacing={3}>
            {priceChange > 0 ? <IconCaretUp size={20} color="green"/> : <IconCaretDown size={20} color="red"/>}
            <Text size="md" color={getChangeColor(priceChange)} weight={500}>{Math.abs(priceChange) + "%"}</Text>
        </Group>
    );
};