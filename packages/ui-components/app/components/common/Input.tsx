"use client";

import React, { useEffect, useState } from "react";

interface Props {
  value: string;
  placeholder?: string;
  buttonContents?: string;
  style?: React.CSSProperties;
  handleSubmit: (value: string) => void;
  changeValue: (value: string) => void;
}

export function Input({ value, placeholder = "Make your todolist", style, handleSubmit, changeValue }: Props) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(false);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(value);
    }
  };

  return (
    <input
      value={value}
      onKeyDown={handleKeyPress}
      onChange={(e) => changeValue(e.target.value)}
      disabled={disabled}
      className={`
        flex-1 p-[0.75rem] border-none outline-none 
        placeholder:text-xs
      `}
      placeholder={disabled ? "loading..." : placeholder}
      style={style}
    />
  );
}
