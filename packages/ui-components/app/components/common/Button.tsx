"use client";

import React, { memo } from "react";
import { BUTTON_DEFAULT_STYLES, BUTTON_SIZES_STYLES } from "../../styles";
import { buttonsTheme, buttonSize } from "../../types";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  size: buttonSize;
  style?: React.CSSProperties;
  theme?: buttonsTheme;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function ButtonComponent({ children, size, style, theme = buttonsTheme.BRIGHT, onClick, ...rest }: Props) {
  return (
    <button
      className={`${BUTTON_DEFAULT_STYLES[theme]} ${BUTTON_SIZES_STYLES[size]}`}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export const Button = memo(ButtonComponent);
