"use client";

import React from "react";
import { buttonsTheme, buttonSize } from "../../types";
import { BUTTON_DEFAULT_STYLES, BUTTON_SIZES_STYLES } from "../../styles";

interface Props {
  children?: React.ReactNode;
  size: buttonSize;
  style?: React.CSSProperties;
  theme?: buttonsTheme;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ children, size, style, theme = buttonsTheme.BRIGHT, onClick, ...rest }: Props) {
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
