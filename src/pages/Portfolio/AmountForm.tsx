import React, {ChangeEvent, useRef, useState} from 'react';
import { Button, FocusTrap, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';

interface AmountFormProps {
    handleAddCrypto: () => void;
    setAmount: (value: number) => void;
}

export const AmountForm = ({handleAddCrypto, setAmount}: AmountFormProps) => {
    const addButtonRef = useRef<HTMLButtonElement>(null);
    const [IsValid, setIsValid] = useState<boolean>(false);
    const [amountInput, setAmountInput] = useState<string>('');

    const handleAmountChange = (value: string) => {
        const amount = parseFloat(value);
        setIsValid(!isNaN(amount) && amount > 0);
        setAmount(amount);
        setAmountInput(value);
    };

    return (
        <>
            <FocusTrap active={true}>
                <TextInput
                    autoComplete="new-password"
                    value={amountInput}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleAmountChange(event.target.value);
                    }}
                    data-autofocus
                    placeholder="0.00"
                    onKeyDown={getHotkeyHandler([
                        [
                            'Enter',
                            () => {
                                console.log('mod+Enter');
                                addButtonRef.current?.click();
                            },
                        ],
                    ])}
                />
            </FocusTrap>

            <Button
                ref={addButtonRef}
                {...(!IsValid && { disabled: true })}
                onClick={handleAddCrypto}
                style={{ marginTop: '1rem' }}
            >
                Add
            </Button>
        </>
    );
};
