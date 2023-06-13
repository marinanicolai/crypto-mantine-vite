import React, {useState} from 'react';
import {Modal, Paper} from '@mantine/core';
import {CryptoCurrency, CryptoCurrencyHolding} from '../../types/index';
import {AmountForm} from './AmountForm';
import {CryptoSearchList} from './CryptoSearchList';

interface AddCoinDialogProps {

    cryptoList: CryptoCurrency[];
    onAddCrypto: (crypto: CryptoCurrencyHolding) => void;
    onClose: () => void;
    opened: boolean;
}

export const AddCoinDialog = ({
                                  cryptoList,
                                  onAddCrypto,
                                  onClose,
                                  opened,
                              }: AddCoinDialogProps) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency | null>(null);
    const [amount, setAmount] = useState<number>(0.0);
    const [title, setTitle] = useState<string>('Select Coin');

    const clearData = () => {
        setSearchInput('');
        setSelectedCrypto(null);
        setAmount(0.0);
        setTitle('Select Coin');
    };

    const handleCryptoSelection = (crypto: CryptoCurrency) => {
        setSelectedCrypto(crypto);
        setTitle('Add ' + crypto.name);
    };

    const handleAddCrypto = () => {
        onAddCrypto({currency: selectedCrypto!, amount: amount});
        onClose();
        clearData();
    };

    return (
        <Modal
            opened={opened}
            onClose={() => {
                onClose();
                clearData();
            }}
            title={title}
            size="md"
        >
            <Paper p="md" style={{maxWidth: '400px', width: '100%', overflow: 'hidden'}}>
                {!selectedCrypto ? (
                    <CryptoSearchList
                        searchInput={searchInput}
                        onSearchChange={setSearchInput}
                        cryptoList={cryptoList}
                        onCryptoSelection={handleCryptoSelection}
                    />
                ) : (
                    <AmountForm
                        handleAddCrypto={handleAddCrypto}
                        setAmount={setAmount}
                    />
                )}
            </Paper>
        </Modal>
    );
};