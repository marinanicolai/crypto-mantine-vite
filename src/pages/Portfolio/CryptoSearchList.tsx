import React from 'react';
import {Input, FocusTrap, ScrollArea, Stack, Group} from '@mantine/core';
import {CryptoCurrency} from '../../types/index';
import {CryptoTitleWithIcon} from '../../components/Crypto/CryptoTitleWithIcon';
import {IconChevronRight} from "@tabler/icons-react";

interface CryptoSearchListProps {
    searchInput: string;
    onSearchChange: (value: string) => void;
    cryptoList: CryptoCurrency[];
    onCryptoSelection: (crypto: CryptoCurrency) => void;
}

export const CryptoSearchList = (props: CryptoSearchListProps) => {
    const {searchInput, onSearchChange, onCryptoSelection, cryptoList} = {...props};
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    const filteredCryptoList = cryptoList.filter(
        (crypto) =>
            crypto.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <FocusTrap active>
                <Input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchChange}
                    data-autofocus
                    autoComplete="new-password"
                    placeholder="Search"
                />
            </FocusTrap>
            <ScrollArea style={{marginTop: '1rem', height: '60vh'}} type="never">
                <Stack spacing={0} m={0}>
                    {filteredCryptoList.map((crypto) => (
                        <Group
                            spacing={0}
                            m={0}
                            position="apart"
                            key={crypto.id}
                            onClick={() => onCryptoSelection(crypto)}
                            sx={(theme: any) => ({
                                padding: 10,
                                cursor: 'pointer',
                                borderRadius: theme.radius.sm,
                                color:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[0]
                                        : theme.black,
                                '&:hover': {
                                    backgroundColor:
                                        theme.colorScheme === 'dark'
                                            ? theme.colors.dark[6]
                                            : theme.colors.gray[0],
                                },
                            })}
                        >
                            <CryptoTitleWithIcon
                                name={crypto.name}
                                symbol={crypto.symbol}
                                icon={crypto.image}
                            />
                            <IconChevronRight color="grey"/>
                        </Group>
                    ))}
                </Stack>
            </ScrollArea>
        </>
    );
};
