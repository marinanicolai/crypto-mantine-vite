import React from "react";
import {Link, useLocation} from "react-router-dom";
import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";

export interface PageLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    page?: string;
}

export const PageLink = ({ icon, color, label, page }: PageLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === `/${page}`;
    return (

        <Link to={"/" + page}
              style={{textDecoration: 'none', marginLeft: "5px", marginRight: "5px", userSelect: "none"}}>
            <UnstyledButton
                sx={(theme: any) => ({
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    "&:hover": {
                        backgroundColor:
                            !isActive &&
                            (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]),
                    },
                })}
            >
                <Group position="apart">
                    <Group spacing={10}>
                        <ThemeIcon color={color} variant="light">
                            {icon}
                        </ThemeIcon>

                        <Text size="sm">{label}</Text></Group>

                    {isActive && <IconCheck color="blue" size={16}/>}
                </Group>
            </UnstyledButton></Link>
    );
};
