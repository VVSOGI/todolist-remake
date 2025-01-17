import React from 'react';
import { buttonsTheme, buttonSize } from '@/app/types';
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    size: buttonSize;
    style?: React.CSSProperties;
    theme?: buttonsTheme;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare function ButtonComponent({ children, size, style, theme, onClick, ...rest }: Props): React.JSX.Element;
export declare const Button: React.MemoExoticComponent<typeof ButtonComponent>;
export {};
