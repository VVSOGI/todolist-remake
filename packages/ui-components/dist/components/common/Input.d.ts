import React from 'react';
interface Props {
    value: string;
    placeholder?: string;
    buttonContents?: string;
    style?: React.CSSProperties;
    handleSubmit: (value: string) => void;
    changeValue: (value: string) => void;
}
export declare function Input({ value, placeholder, style, handleSubmit, changeValue }: Props): React.JSX.Element;
export {};
