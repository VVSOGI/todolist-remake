import React from "react";
import { D2CodingBold } from "../../../public/fonts";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Title({ children, style }: Props) {
  return (
    <div
      className={`
        w-full mb-[1.5rem] text-red-600 text-lg
        desktop:text-xl
        ${D2CodingBold.className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}
