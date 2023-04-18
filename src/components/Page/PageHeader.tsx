import React from 'react';
import {Group, Title} from "@mantine/core";

interface HeaderPageProps {
    title: string;
    icon: React.ReactNode;
}

export const HeaderPage: React.FC<HeaderPageProps> = ({ title,icon }) => {
    return (
        <Group mb={10} spacing={5}>
            {icon}
            <Title size="large">{title}</Title>
        </Group>
    );
};
