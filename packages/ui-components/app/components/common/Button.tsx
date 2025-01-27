"use client";

import React from "react";
import { BUTTON_DEFAULT_STYLES, BUTTON_SIZES_STYLES, ButtonsTheme, ButtonSize } from "../../styles";

interface Props {
  children?: React.ReactNode;
  size: ButtonSize;
  style?: React.CSSProperties;
  theme?: ButtonsTheme;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ children, size, style, theme = ButtonsTheme.BRIGHT, onClick, ...rest }: Props) {
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
